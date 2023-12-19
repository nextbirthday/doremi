'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const SignInButton = () => {
  const { data: session } = useSession()

  console.log('SignInButton { data: session } ===>', { data: session })

  if (session && session.user) {
    return (
      <button className="px-12 py-4 border rounded-xl bg-red-300" onClick={() => signOut()}>
        {session.user.name}님 Log Outf
      </button>
    )
  }

  return (
    <div className="space-x-10">
      <button className="rounded-xl border bg-yellow-300 px-12 py-4" onClick={() => signIn()}>
        LogIn
      </button>
      <button className="rounded-xl border bg-red-300 px-12 py-4" onClick={() => signOut()}>
        Log Out
      </button>
    </div>
  )
}

export default SignInButton
