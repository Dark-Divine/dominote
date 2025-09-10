import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SignInGithub from '@/components/SignInGithub'
import Image from 'next/image'

export default async function LoginPage() {
  const session = await auth()
  if (session) {
    redirect('/dashboard')
  } else {
    return (
      <div className='flex flex-col overflow-hidden w-screen h-screen justify-center items-center'>
        <div className='flex flex-col items-center gap-10 border-1 p-20 rounded-2xl border-white/10 bg-white/5 backdrop-blur-2xl'>
          <div className='flex flex-col  gap-4'>
            <div className='flex items-center gap-4'>
              <div className='w-8 h-8 md:w-12 md:h-12'>
                <Image
                  src='/dominote-logo.png'
                  width={128}
                  height={128}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-3xl md:text-5xl tracking-tighter text-center w-full font-bold'>Dominote</h3>
            </div>
            <div>
              <p>Login</p>
            </div>
          </div>

          <SignInGithub />
        </div>
      </div>
    )
  }
}
