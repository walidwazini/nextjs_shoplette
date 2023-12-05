import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { NextResponse } from 'next/server'

const handler = NextAuth({
    pages: {
        // ? We specific signIn page for callback after signOut
        signIn: '/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    // callbacks: {
    //     async jwt({ token, user }) {
    //         return { ...token, ...user };
    //     },
    //     async session({ session, token, user }) {
    //         session.user = token as any;
    //         return session;
    //     },
    // }
})

export { handler as GET, handler as POST }