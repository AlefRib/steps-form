import { useState } from 'react'

export type IStep = {
  id: string
  name: string
  formComponent: React.JSX.Element
}

export function useForm(steps: IStep[]) {
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(stepSelectedIndex: number) {
    if (currentStep >= steps.length || currentStep < 0) return
    setCurrentStep(stepSelectedIndex)
  }

  return {
    currentStep,
    currentComponent: steps[currentStep].formComponent,
    changeStep,
  }
}
