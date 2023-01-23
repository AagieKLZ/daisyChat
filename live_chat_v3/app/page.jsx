"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'

export default function Page() {
  const router = useRouter()
  

  return <><Navbar /><div onLoad={router.replace("/chats")}></div></>
}
