import MainForm from '@/components/MainForm'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center  ">
      <div className="border rounded-md p-8 flex items-center justify-center flex-col">
        <span className="h-px w-full bg-gray-300 m-8"></span>
        <MainForm />
      </div>
    </main>
  )
}
