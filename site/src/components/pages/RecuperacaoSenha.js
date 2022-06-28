import React from "react"
import "./RecuperacaoSenha.css"
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md"

function RecuperacaoSenha() {
    const [email, setEmail] = useState("")

    return (

        <div className="recuperacao">
            <div className="recuperacao-right">
                <h1>Esqueci minha senha</h1>
                <div className="text">
                    <p>informe o e-mail cadastrado na sua conta e lhe enviaremos um codigo para e troca da senha.</p>
                </div>
                <div className="recuperacao-InputEmail">
                <MdOutlineMail />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Enviar
                </button>
            </div>
        </div>

        

    );
}

export default RecuperacaoSenha
