import React from 'react'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export type IStep = {
  id: string
  name: string
  formComponent: React.JSX.Element
}

export default function Steps({
  steps,
  currentStep,
}: {
  steps: IStep[]
  currentStep: number
}) {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <>
          <div
            key={`step-${index}`}
            className="flex justify-between items-center"
          >
            <span
              className={`flex font-bold justify-center items-center w-7 h-7 rounded-full ${
                index === currentStep
                  ? 'text-white bg-purple-mid'
                  : index < currentStep
                  ? 'text-white bg-success'
                  : 'text-gray-200 bg-gray-100'
              }`}
            >
              {index < currentStep ? (
                <CheckIcon className="h-5 w-5 " />
              ) : (
                step.id
              )}
            </span>
            <span
              className={`font-bold pl-2 ${
                index === currentStep ? 'text-gray-400' : 'text-gray-200'
              }`}
            >
              {step.name}
            </span>
          </div>
          {index !== steps.length - 1 && (
            <span className="m-4" key={`divider-${index}`}>
              <ChevronRightIcon className="h-6 w-6 " />
            </span>
          )}
        </>
      ))}
    </div>
  )
}
