import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

export type ISteps = {
  steps: IStep[]
}

export type IStep = {
  id: string
  name: string
  isCurrent: boolean
  finished: boolean
}
export default function Steps({ steps }: ISteps) {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <>
          <div className="flex justify-between items-center" key={step.id}>
            <span
              className={`flex font-bold justify-center items-center p-2 w-7 h-7 rounded-full ${
                step.isCurrent
                  ? 'text-white bg-purple-mid'
                  :  step.finished ? 'text-white bg-success' : 'text-gray-200 bg-gray-100'
              }`}
            >
              {step.finished ? (
                <CheckIcon className="h-8 w-8 " />
              ) : (
                step.id
              )}
            </span>
            <span
              className={`font-bold pl-2 ${
                step.isCurrent ? 'text-gray-400' : 'text-gray-200'
              }`}
            >
              {step.name}
            </span>
          </div>
          {index !== steps.length - 1 && <span className="m-4">{'>'}</span>}
        </>
      ))}
    </div>
  )
}
