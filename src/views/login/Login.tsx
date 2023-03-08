import { motion } from 'framer-motion'
import React, { useState } from 'react'

import './circle.css'
import './button.css'
import './style.css'
import './form.css'
import './reset.css'
import './panels.css'
import Form from './components/Form'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import RegisterForm from './components/RegisterForm'


const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignInOpen, setSignIn] = useState(true)
  const [isSignInContainerOpen, setSignInContaienr] = useState(true)
  const [isSignUpOpen, setSignUp] = useState(false)
  const [isSignUpContainerOpen, setSignUpContaienr] = useState(false)


  const circleVariants = {
    hidden: {
      scale: 2
    },
    visible: {
      scale: [2, 4, 2],
      transition: {
        duration: 1,

        type: 'spring',
      }

    }
  }

  const signInVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    }
  }
  const signUpVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    }
  }


  const signInContainerVariants = {
    hidden: {
      x: 1,
      y: -0.50,
      right: 0.52
    },
    visible: {
      y: -20,
      transition: {
        delay: 0.2
      }
    }
  }

  const signUpContainerVariants = {
    hidden: {
      translateX: -100
    },
    visible: {
      translateX: 100,
      transition: {
        delay: 0.2
      }
    }
  }

  return (
    <div className='container'>

      <motion.div className='circle' variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} ></motion.div>

      <div className='forms-container'>
        <div className='signin-signup'>
          <motion.div variants={signInVariants} initial='visible' animate={isSignInOpen ? 'visible' : ''}>
            <Form />
          </motion.div>

          <motion.div variants={signUpVariants} initial='visible' animate={isSignUpOpen ? 'visible' : ''}>
            <RegisterForm />
          </motion.div>
        </div>
      </div>

      < div className='panels-container'>
        <motion.div variants={signInContainerVariants} initial='visible' animate={isSignInContainerOpen ? 'visible' : 'hidden'}>
          <div className='panel left-panel'>
            <LeftPanel />
            <button className='button' onClick={() => { setIsOpen(true) }}>Registre-se</button>
          </div>
        </motion.div>

        <motion.div variants={signUpContainerVariants} initial='hidden' animate={isSignUpContainerOpen ? 'visible' : 'hidden'}>
          <div className='panel right-panel'>
            <RightPanel />
            <button className='button' onClick={() => setIsOpen(true)}>Entrar</button>
          </div>
        </motion.div>
      </div>
    </div >

  )
}

export default Login