import React from 'react'
import logo from '../../../assets/logo.png'
import {Person, Envelope} from 'phosphor-react'

const form = () => {
  return (
    <form>
        <img src={logo} alt="logo" />
        <h2>Entrar</h2>
        <div>
            <Person />
            <input type="text" />
        </div>

        <div>
            <Envelope />
            <input type="text" />
        </div>
        
        <button type='submit'>Entrar</button>
    </form>
  )
}

export default form