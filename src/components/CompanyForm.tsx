'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type companyFormData = z.infer<typeof companyFormSchema>

const companyFormSchema = z.object({
  companyName: z.string().nonempty('O Nome da empresa é obrigatório!'),
  employeesQuantity: z
    .string()
    .nonempty('O número de funcionários é obrigatório!'),
  aboutBusiness: z.string(),
})

export default function CompanyForm({
  defaultValues,
  onSubmit,
  onBack,
}: {
  onSubmit: (values: companyFormData) => void
  onBack: () => void
  defaultValues: companyFormData
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<companyFormData>({
    resolver: zodResolver(companyFormSchema),
    defaultValues,
  })

  return (
    <form
      className="flex flex-col gap-4 w-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="gap-1">
        <label className="font-bold text-gray-400" htmlFor="company-name-form">
          Nome da empresa
        </label>
        <input
          autoComplete="off"
          placeholder="Qual é o nome da empresa"
          className="border border-gray-100 w-full p-4 rounded-sm mt-2 focus:border-purple-mid focus:outline-none placeholder-gray-200"
          id="company-name-form"
          type="text"
          {...register('companyName')}
        />
        {errors.companyName && (
          <span className="text-red-500 text-sm">
            {errors.companyName.message}
          </span>
        )}
      </div>

      <div className="gap-1">
        <label className="font-bold text-gray-400" htmlFor="employees-quantity">
          Número de funcionários
        </label>
        <input
          className="border border-gray-100 w-full p-4 rounded-sm mt-2 focus:border-purple-mid focus:outline-none placeholder-gray-200"
          id="employees-quantity"
          type="text"
          placeholder="Digite o número de colaboradores"
          {...register('employeesQuantity')}
        />
        {errors.employeesQuantity && (
          <span className="text-red-500 text-sm">
            {errors.employeesQuantity.message}
          </span>
        )}
      </div>

      <div className="gap-1">
        <label
          className="font-bold text-gray-400"
          htmlFor="about-business-form"
        >
          Sobre seu negócio
        </label>
        <textarea
          className="border border-gray-100 w-full p-4 rounded-sm mt-2 focus:border-purple-mid focus:outline-none placeholder-gray-200"
          id="about-business-form"
          placeholder="Fale um pouco sobre seus produtos ou serviços"
          {...register('aboutBusiness')}
        />
        {errors.aboutBusiness && (
          <span className="text-red-500 text-sm">
            {errors.aboutBusiness.message}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="border-2 border-purple-mid text-purple-mid font-bold rounded-md py-4 px-8 text-base uppercase self-end  hover:bg-purple-light hover:text-white"
          type="button"
        >
          Voltar
        </button>

        <button
          className="bg-purple-mid rounded-md text-white py-4 px-8 text-base uppercase self-end hover:bg-purple-light"
          type="submit"
        >
          Avançar
        </button>
      </div>
    </form>
  )
}
