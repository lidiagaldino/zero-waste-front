import { motion } from 'framer-motion'
import React, { useState } from 'react'

import './circle.css'
import './button.css'
import './style.css'
import Form from './components/Form'

const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignInOpen, setSignIn] = useState(true)
  const [isSignInContainerOpen, setSignInContaienr] = useState(true)
  const [isSignUpOpen, setSignUp] = useState(false)
  const [isSignUpContainerOpen, setSignUpContaienr] = useState(false)


  const circleVariants = {
    hidden: {
        scale: 1
    },
    visible: {
        scale: 2,
        transition: {
            type: 'spring',
            stiffness: 160,
            damping: 60
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
    y: -50,
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
      <button className='button' onClick={() => setIsOpen(true)}>Registre-se</button>

      <motion.div variants={signInContainerVariants} initial='visible' animate={isSignInContainerOpen ? 'visible' : 'hidden'}></motion.div>
      <motion.div variants={signUpContainerVariants} initial='hidden' animate={isSignUpContainerOpen ? 'visible' : 'hidden'}></motion.div>

      <motion.div className='circle' variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} ></motion.div>

      <motion.div variants={signInVariants} initial='visible' animate={isSignInOpen ? 'visible' : ''}>
        <Form />
      </motion.div>
      <motion.div variants={signUpVariants} initial='hidden' animate={isSignUpOpen ? 'visible' : 'hidden'}></motion.div>
    </div>
    
  )
}

export default Login