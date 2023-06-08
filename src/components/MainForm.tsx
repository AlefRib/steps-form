import React from 'react'

function MainForm() {
    return (
        <form className="flex items-center justify-center flex-col gap-4">
            <div>
                <label htmlFor="name-form"> Nome:</label>
                <input className="border w-full" id="name-form" type="text" />
            </div>

            <div>
                <label htmlFor="phone-form"> Telefone:</label>
                <input className="border w-full" id="phone-form" type="text" />
            </div>
            <div>
                <label htmlFor="email-form"> E-mail:</label>
                <input className="border w-full" id="email-form" type="email" />
            </div>
            <button type="submit">Avançar</button>
        </form>
    )
}

export default MainForm
