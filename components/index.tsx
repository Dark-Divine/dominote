import { Card, CardBody, CardHeader } from '@heroui/card'
import Image from 'next/image'
import SignInGithub from './SignInGithub'

export default async function CustomSignInPage() {
  return (
    <div className='flex justify-center items-center h-full'>
      <Card className='min-w-96 shadow-xl dark:bg-zinc-900 border-2 border-primary' shadow='none'>
        <CardHeader className='px-10 py-5 flex items-center'>
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
        </CardHeader>
        <CardBody className='space-y-3 p-10 pt-0'>
          <SignInGithub />
        </CardBody>
      </Card>
    </div>
  )
}
