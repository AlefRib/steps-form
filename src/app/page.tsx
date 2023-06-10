'use client'
import CompanyForm from '@/components/CompanyForm'
import ContactForm from '@/components/ContactForm'
import ProjectForm from '@/components/ProjectForm'
import Steps, { IStep } from '@/components/Steps'
import { useForm } from '@/hooks/useForm'
import React from 'react'

export default function Home() {
  const formSteps: IStep[] = [
    {
      id: '1',
      name: 'Contatos',
      formComponent: <ContactForm onSubmit={(data) => handleSumit(data)} />,
    },
    {
      id: '2',
      name: 'Empresa',
      formComponent: (
        <CompanyForm onSubmit={(data) => handleSumit(data)} onBack={backStep} />
      ),
    },
    {
      id: '3',
      name: 'Projeto',
      formComponent: (
        <ProjectForm onSubmit={(data) => handleSumit(data)} onBack={backStep} />
      ),
    },
  ]

  const { currentComponent, currentStep, changeStep } = useForm(formSteps)

  function backStep() {
    changeStep(currentStep - 1)
  }

  function handleSumit(values: any) {
    console.log(values)
    changeStep(currentStep + 1)
  }

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center  ">
      <div className="border border-gray-100 rounded-md p-8 flex items-center justify-center flex-col">
        <Steps steps={formSteps} currentStep={currentStep} />
        <span className="h-px w-full bg-gray-300 m-8"></span>
        {currentComponent}
      </div>
    </main>
  )
}
