import React from 'react'
import '../styles/HomePage.css'

const HomePage = () => {
  return (
    <section className="seção">
      <div className="circlee"></div>
      <div className="content">
        <div className="textBox">
          <h2><span className="zerowastetext">ZeroWaste</span> é fazer nossa parte para um mundo mais sustentavel </h2>
          <p>texto texto texto texto texto texto texto texto texto texto
            textotextotextotextotextotextotextotextotextotextotextotexto</p>
          <a href="#">Saiba mais</a>
        </div>
        <div className="imgBox">
          {/* <img src="" className="zerowastelogo"> */}
        </div>
      </div>
    </section>
  )
}

export default HomePage