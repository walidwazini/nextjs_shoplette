import NextAuth, { Awaitable } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { NextResponse } from 'next/server'

import { Account, Profile } from 'next-auth'
import { NextApiHandler } from 'next'
import { connectDatabase } from '@/server/mongoose'
import User from '@/model/user.model'

interface OAuthProps {
    account: Account,
    profile: Profile
}

const handler: NextApiHandler = NextAuth({
    pages: {
        // ? We specific signIn page as callback after signOut
        signIn: '/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async signIn({ account, profile, email, user, credentials }) {

            if (account?.type === 'oauth' && profile) {
                return await signInWithOAuth({
                    account, profile
                })
            }
            return true
        },
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    }
})

export { handler as GET, handler as POST }

// Google Sign-In
const signInWithOAuth = async ({ account, profile }: { account: any, profile: any }) => {
    try {
        connectDatabase()

        const user = await User.findOne({ email: profile.email })

        if (user) {
            console.log('Existing user.')
            console.log(user)
            return true
        } else if (!user) {
            const newUser = await User.create({
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                provider: account.provider
            })
            console.log(newUser)
            return true
        }

    } catch (error) {
        throw error
    }
};