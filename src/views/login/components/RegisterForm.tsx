import React from 'react'
import logo from '../../../assets/logo.png'
import { User, Phone } from 'phosphor-react'
import * as Switch from '@radix-ui/react-switch';

function RegisterForm() {
    return (
        <form id="form-sign-up" action="#" className="sign-up-form">
            <img src={logo} alt="logo" />
            <h2 className='title'>Registrar-se</h2>
            <div className="input-field">
                <i><User /></i>
                <input type="text" id="username" placeholder="Nome" required />
            </div>

            <div className="input-field">
                <i><Phone /></i>
                <input type="number" id="telefone" placeholder="Telefone" required />
            </div>

            <button type="submit" value="Entrar" className="btn solid" id="sign-in">Registrar-se</button>


            <Switch.Root className="actionBtns" id="airplane-mode">
                <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>



            <div className="input-field" id="adicionar_CPFCNPJ">
                <i className="fa-solid fa-file" id="icone_cpfcnpj"></i>
                <input type="text" placeholder="CNPJ" id="text_cpfcnpj"
                />
            </div>

            <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="date" id="nascimento" name="nascimento" placeholder="Data de nascimento" required />
            </div>
            <div className="input-field">
                <i className="fa-solid fa-location-dot"></i>
                <input type="number" id="cep" placeholder="CEP" required />
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank"
                    className="consultacep">Consultar CEP</a>
            </div>

            <div className="divbotao">
                <input type="text" id="complemento" placeholder="Complemento" />
                <input type="number" id="numero" placeholder="Numero" required />
            </div>


            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" id="senha" placeholder="Senha" required />
            </div>
            <div className="select-btn" id="adicionar_material">
                <i className="fa-solid fa-recycle" id="icone_material"></i>
                <span className="btn-text">Materiais que eu recolho</span>
                <span className="arrow-dwn">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <ul id="lista" className="list-items"></ul>

            <div className="divbotao">
                <button type="button"
                    value="Catador(a)">Catador(a)</button>
                <button type="button"
                    value="Gerador de residuo">Gerador de residuo</button>
            </div>


        </form >
    )
}

export default RegisterForm