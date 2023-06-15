'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type projectFormData = z.infer<typeof contactsFormSchema>

const contactsFormSchema = z.object({
  aboutTheProject: z
    .string()
    .nonempty('O Nome é obrigatório!')
    .min(3, 'O nome deve ter ao menos 3 caracteres!')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
})

export default function ProjectForm({
  onSubmit,
  onBack,
  defaultValues,
}: {
  onSubmit: (values: projectFormData) => void
  onBack: () => void
  defaultValues: projectFormData
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<projectFormData>({
    resolver: zodResolver(contactsFormSchema),
    defaultValues,
  })

  return (
    <form
      className="flex flex-col gap-4 w-96 animate-waving-hand"
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <div className="gap-1">
        <label className="font-bold text-gray-400" htmlFor="about-project-form">
          Objetivos do projeto
        </label>
        <textarea
          className="border border-gray-100 w-full p-4 rounded-sm mt-2 focus:border-purple-mid focus:outline-none placeholder-gray-200"
          id="about-project-form"
          placeholder="Descreva quais os objetivos desse projeto"
          {...register('aboutTheProject')}
        />
        {errors.aboutTheProject && (
          <span className="text-red-500 text-sm">
            {errors.aboutTheProject.message}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="border-2 border-purple-mid text-purple-mid font-bold rounded-md py-4 px-8 text-base uppercase self-end hover:bg-purple-light hover:text-white"
          type="button"
        >
          Voltar
        </button>

        <button
          className="bg-purple-mid rounded-md text-white py-4 px-8 text-base uppercase self-end hover:bg-purple-light"
          type="submit"
        >
          Finalizar
        </button>
      </div>
    </form>
  )
}
