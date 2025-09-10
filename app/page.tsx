'use client'

import Link from 'next/link'
import { IconRocket } from '@tabler/icons-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-dvh container mx-auto w-full text-white dark flex flex-col items-center justify-center gap-6'>
      <h1 className='text-4xl font-extrabold'>Dominote</h1>
      <Link color='secondary' href='/board' className='flex items-center gap-2 bg-blue-700 w-fit px-3 py-2 rounded-2xl'>
        Login | Register
      </Link>
    </main>
  )
}
