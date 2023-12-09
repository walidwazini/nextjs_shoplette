import NextAuth, { Awaitable } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { NextResponse } from 'next/server'

import { Account, Profile } from 'next-auth'
import { NextApiHandler } from 'next'
import { connectDatabase } from '@/server/mongoose'
import User from '@/model/user.model'
import { authOptions } from '@/utils/auth'

const handler: NextApiHandler = NextAuth(authOptions)

export { handler as GET, handler as POST }

