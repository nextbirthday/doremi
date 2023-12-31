import { doUserLogin } from '@/controller/userController'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userid: {
          label: '아이디',
          type: 'text',
          placeholder: '아이디를 입력해주세요',
        },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null
        }

        const { userid, password } = credentials

        const user = await doUserLogin({ userid, pw: password })
        console.log('user', user)
        return user
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },

  /* Custom SignIn page */
  pages: {
    signIn: '/signin',
  },
})

export { handler as GET, handler as POST }
