import React, { useState } from 'react'
import '../styles/formSignUp.css'
import logo from '../../../assets/logo.png'
import { User, Phone, HandPointing, Envelope, Lock, Recycle } from 'phosphor-react'
import SwitchSelector from "react-switch-selector";
import DropDown from './DropDown';
import drop from '../styles/drop.css'



  


function RegisterForm() {

    const options = [
        {
          label: "Pessoa Juridica",
          value: "CNPJ",
          selectedBackgroundColor: "#fff",
          fontColor: "#000000"
        },
        {
          label: "Pessoa Fisica",
          value: "CPF",
          selectedBackgroundColor: "#fff",
          fontColor: "#000000"
    
        }   
      ];

    const [cpfCnpj, setCpfCnpj] = useState('CNPJ')


    const onChange = (newValue: any) => {
      setCpfCnpj(newValue)
    };



    return (
        <form id="form-sign-up" action="#" className="sign-up-form">
            <img src={logo} className='logoo' alt="logo" />
            <h2 className='title'>Registrar-se</h2>
            <div className="input-field">
                <i><User /></i>
                <input type="text" id="username" placeholder="Nome" required />
            </div>

            <div className="input-field">
                <i><Phone /></i>
                <input type="number" id="telefone" placeholder="Telefone" required />
            </div>

            <div  className="sw" style={{width: 350, height: 45}}>
          <SwitchSelector
            onChange={onChange}
            options={options}
            backgroundColor={"#006400"}
            selectedFontColor={"#000000"}
            
            
        />
          </div>





            <div className="input-field" id="adicionar_CPFCNPJ">
                <i className="fa-solid fa-file" id="icone_cpfcnpj"></i>
                <input type="text" placeholder={cpfCnpj} id="text_cpfcnpj"
                />
            </div>

            <div className="input-field">
                <i><Envelope/></i>
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
                <i ><Lock/></i>
                <input type="password" id="senha" placeholder="Senha" required />
            </div>


                <div className='drop' style={{width: 375, height: 50, borderRadius: 100, }}>
                    <DropDown/>
                    
                </div>
        
            <ul id="lista" className="list-items"></ul>

            <div className="divbotao">
                <button type="button" className="btnescolha" id="btn-catador"
                    value="Catador(a)">Catador(a)</button>
                <button type="button" className="btnescolha" id="btn-gerador"
                    value="Gerador de residuo">Gerador de residuo</button>
            </div>
            <button type="submit" value="Registar-se" className="btn solid" id="sign-in">Registrar-se</button>

        </form >
    )
}

export default RegisterForm