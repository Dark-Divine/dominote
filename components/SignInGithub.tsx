'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@heroui/button'
import { IconBrandGithub } from '@tabler/icons-react'

const SignInGithub = () => {
  return (
    <Button
      className="border-1 rounded-lg w-full flex items-center justify-center border-white/10 text-sm"
      onPress={() => signIn('github', { callbackUrl: '/dashboard' })}
      type="button"
      variant="ghost"
    >
      <div className="flex shrink-0">
        <IconBrandGithub size={20} />
      </div>
      <div className="flex grow items-center justify-center">Sign In With GitHub</div>
    </Button>
  )
}

export default SignInGithub
