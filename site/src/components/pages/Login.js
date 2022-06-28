import React from 'react';
import { useState } from 'react'
import '../../components/pages/Login.css'

import { MdOutlineMail } from "react-icons/md"
import { BiLockAlt } from "react-icons/bi"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }
    
    return (
        <div className="login">
            <div className="login-right">
            <h1>BEM-VINDO DE VOLTA!</h1>
            <br/>

            <div className="login-loginInputEmail">
               <MdOutlineMail />
               <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>
            
            <div className="login-loginInputPassword">
               <BiLockAlt />
               <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="login-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>
            <br/>
            <button type="submit">
               Entrar
            </button>

            <h4>Novo usuário?</h4> <a type="submit" href="/Cadastro">Crie uma conta</a>
            <h4>Esqueceu sua senha?</h4> <a type="submit" href="/RecuperacaoSenha">Recuperação de senha</a>
            
         </div>
      </div>
    );
}

export default Login;