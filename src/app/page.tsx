import MainForm from '@/components/MainForm'
import Steps, { IStep } from '@/components/Steps'
import React from 'react'

const formSteps: IStep[] = [
  { finished: true, id: '1', isCurrent: false, name: 'Contatos' },
  { finished: false, id: '2', isCurrent: true, name: 'Empresa' },
  { finished: false, id: '3', isCurrent: false, name: 'Projeto' },
]

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center  ">
      <div className="border rounded-md p-8 flex items-center justify-center flex-col">
        <Steps steps={formSteps} />
        <span className="h-px w-full bg-gray-300 m-8"></span>
        <MainForm />
      </div>
    </main>
  )
}
