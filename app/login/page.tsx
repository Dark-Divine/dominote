import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SignInGithub from '@/components/SignInGithub'
import Image from 'next/image'
import { Button, Input } from '@heroui/react'

export default async function LoginPage() {
  const session = await auth()
  if (session) {
    redirect('/dashboard')
  } else {
    return (
      <div className="flex flex-col overflow-hidden w-screen h-screen justify-center items-center bg-[#191919]">
        <div className="max-w-[360px] w-full flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              {/* <Image src="/dominote-logo.png" width={128} height={128} alt="dominote" className="w-12 h-12" /> */}
              <h1 className="text-2xl font-bold">Dominote Login</h1>
            </div>
            <p className="text-xl text-neutral-400 font-bold">Welcome back to Plane.</p>
          </div>
          <SignInGithub />
          <div className="mt-2 flex items-center transition-all duration-300 w-full">
            <hr className="w-full border-white/10 transition-colors duration-300" />
            <p className="mx-3 flex-shrink-0 text-center text-xs text-white/60 transition-colors duration-300">
              or
            </p>
            <hr className="w-full border-white/10 transition-colors duration-300" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <Input
              label="Email"
              labelPlacement="outside"
              placeholder="name@company.com"
              classNames={{
                inputWrapper: 'border-1 border-white/10 rounded-lg',
                input: 'text-sm',
              }}
              variant="bordered"
            />
            <Button color="primary" className="w-full rounded-lg">
              Continue
            </Button>
          </div>
          <p className="text-xs w-full text-center text-white/50">
            By signing in, you understand and agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    )
  }
}
