import React from 'react'
import '../styles/HomePage.css'
import devicelogo from '../../../assets/devices.png'


const HomePage = () => {
  return (
    <section className="seção">
      <div className="circlee"></div>
      <div className="content">
        <div className="textBox">
          <h2><span className="zerowastetext">ZeroWaste</span> é fazer nossa parte para um mundo mais sustentável.</h2>
          <p>Seja bem vindo ao nosso website, caso não saiba por onde começar, clique
            no "Saiba mais", para ter uma representação em slides.
          </p>
          <a href="#" className="SAIBAMAIS">Saiba mais</a>
        </div>
        <div className="imgBox">
        <img src={devicelogo} alt="aa" />
        </div>
      </div>
    </section>
  )
}

export default HomePage