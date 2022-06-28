import React from "react";
import { useState } from "react";
import { LayoutComponents } from "../layout/LayoutComponents.js"

import { MdOutlineMail} from "react-icons/md"
import { BiLockAlt } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
  
    return (
      <LayoutComponents >
        <form className="login-form">
          <span className="login-form-title"><h1>CRIE SUA CONTA</h1></span>
        <p>Identifique-se</p>
        <br/>
        <br/>
          <div className="wrap-input">
          <AiOutlineUser />
            <input
              className={name !== "" ? "has-val input" : "input"}
              type="email"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input" placeholder="Nome"></span>
          </div>
        <br/>
          <div className="wrap-input">
          <MdOutlineMail />
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" placeholder="Email"></span>
          </div>
        <br/>
          <div className="wrap-input">
          <BiLockAlt />
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" placeholder="Senha"></span>
          </div>
        <br/>
        <br/>
          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
        </form>
      </LayoutComponents>
    )
  }

export default Cadastro;