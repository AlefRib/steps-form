import React from 'react'

function MainForm() {
  return (
    <form className="flex flex-col gap-4 w-96">
      <div className="gap-1">
        <label className="font-bold text-base" htmlFor="name-form">
          Nome:
        </label>
        <input
          autoComplete="off"
          placeholder="Como prefere ser chamado"
          className="border w-full p-4 rounded-sm "
          id="name-form"
          type="text"
        />
      </div>
      <div className="gap-1">
        <label className="font-bold" htmlFor="phone-form">
          Telefone:
        </label>
        <input
          className="border w-full p-4 rounded-sm"
          id="phone-form"
          type="text"
          placeholder="Digite seu número de WhatsApp"
        />
      </div>
      <div className="gap-1">
        <label className="font-bold" htmlFor="email-form">
          E-mail:
        </label>
        <input
          className="border w-full p-4 rounded-sm"
          id="email-form"
          type="email"
          placeholder="Digite seu e-mail"
        />
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

export default MainForm
