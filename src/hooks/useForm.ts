import { useState } from 'react'

export type IStep = {
  id: string
  name: string
  formComponent: React.JSX.Element
}

export function useForm(steps: IStep[]) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isChangingStep, setIsChangingStep] = useState(false)

  function changeStep(stepSelectedIndex: number) {
    if (currentStep >= steps.length || currentStep < 0) return
    setIsChangingStep(true)
    setCurrentStep(stepSelectedIndex)
    setIsChangingStep(false)
  }

  return {
    currentStep,
    currentComponent: steps[currentStep].formComponent,
    changeStep,
    isChangingStep
  }
}
