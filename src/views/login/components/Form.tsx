import React from 'react'
import logo from '../../../assets/logo.png'
import formm from '../../../views/login/form.css'
import '../../../views/login/switchButton.css'
import { Person, Envelope } from 'phosphor-react'
import * as Switch from '@radix-ui/react-switch';

const form = () => {
  return (
    <form action="#" className="sign-in-form" id="sign-in-form">
      <img src={logo} className='logoo' alt="logo" />
      <h2 className='title'>Entrar</h2>
      <div className="input-field">
        <i><Person /></i>
        <input type="email" placeholder="Email" id="email-login" required />
      </div>

      <div className="input-field">
        <i><Envelope /></i>
        <input type="password" placeholder="Senha" id="senha-login" required />
      </div>

      <button type="submit" value="Entrar" className="btn solid" id="sign-in">Entrar</button>


    </form>
  )
}

export default form