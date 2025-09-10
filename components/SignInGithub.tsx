'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@heroui/button'
import { IconBrandGithub } from '@tabler/icons-react'

const SignInGithub = () => {
  return (
    <Button onPress={() => signIn('github', { callbackUrl: '/dashboard' })} type='button' variant='ghost'>
      <IconBrandGithub size={20} />
      Sign In With GitHub
    </Button>
  )
}

export default SignInGithub
