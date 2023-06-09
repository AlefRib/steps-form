'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type contactFormData = z.infer<typeof contactsFormSchema>

const contactsFormSchema = z.object({
  name: z
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
  phone: z.string().nonempty('O Telefone é obrigatório!'),
  email: z
    .string()
    .nonempty('O E-mail é obrigatório!')
    .email('Formato de E-mail inválido!'),
})

export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactsFormSchema),
  })

  const nextStep = (data: any) => {
    console.log(data)
  }
  return (
    <form
      className="flex flex-col gap-4 w-96"
      onSubmit={handleSubmit(nextStep)}
    >
      <div className="gap-1">
        <label className="font-bold" htmlFor="name-form">
          Nome:
        </label>
        <input
          autoComplete="off"
          placeholder="Como prefere ser chamado"
          className="border w-full p-4 rounded-sm mt-2"
          id="name-form"
          type="text"
          {...register('name')}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="gap-1">
        <label className="font-bold" htmlFor="phone-form">
          Telefone:
        </label>
        <input
          className="border w-full p-4 rounded-sm mt-2"
          id="phone-form"
          type="text"
          placeholder="Digite seu número de WhatsApp"
          {...register('phone')}
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
      </div>
      <div className="gap-1">
        <label className="font-bold" htmlFor="email-form">
          E-mail:
        </label>
        <input
          className="border w-full p-4 rounded-sm mt-2"
          id="email-form"
          type="email"
          placeholder="Digite seu e-mail"
          {...register('email')}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <button
        className="bg-purple-mid rounded-md text-white py-4 px-8 text-base uppercase self-end"
        type="submit"
      >
        Avançar
      </button>
    </form>
  )
}
