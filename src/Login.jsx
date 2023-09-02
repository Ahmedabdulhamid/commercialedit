import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './show.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {AiFillEye} from'react-icons/ai'
import Swal from 'sweetalert2'
const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [emailLabel, setEmailLabel] = useState(false);
  const [passLabel, setPassLabel] = useState(false)
  const [icon,setIcon]=useState(false)

  const navigate = useNavigate()


  const handleForm = (e) => {
    e.preventDefault()
    if (email === '') {
      setEmailLabel(true);


    }
    else if (pass === '') {
      setEmailLabel(false);

      setPassLabel(true);

    }
    else if (!localStorage.user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you must create account',

      })


    }
    else if (JSON.parse(localStorage.user).email !== email || JSON.parse(localStorage.user).password !== pass) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you must create account',

      })

    }

    else {
      const userData = { email: email, password: pass }
      localStorage.login = JSON.stringify(userData)
      navigate('/')
    }

  }
  const handleForm2 = () => {
    navigate('/signup')
  }
  const handleFunc=(e)=>{
   if (icon===false) {
    setIcon(true)
    
   }
   else{
    setIcon(false)
   }
  }
  return (
    localStorage.user ? (
      
        <div style={{ background: "whitesmoke" }} className='d-flex justify-content-center h-100'>
          <div className='container d-flex justify-content-center  pt-5 '>
            <Form className='py-3 w-75' >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={emailLabel === false ? 'text-dark' : 'text-danger'}>{emailLabel === false ? 'email adress' : 'check email'}</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={passLabel === false ? 'text-dark' : 'text-danger'}>{passLabel === false ? 'password' : 'check password'}</Form.Label>
                <div className='position-relative'>
                <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}className='postion-relative' />
                <AiFillEye className=' position-absolute   'style={{top:'25%',right:'2%'}}/>
                </div>
              </Form.Group>
             
              <div className='d-flex justify-content-center'>
                <Button variant="success " type="submit" onClick={handleForm}>
                  sign in
                </Button>
                <Button variant="success mx-5" type="submit" onClick={handleForm2}>
                  sign up
                </Button>
              </div>

            </Form>
          </div>

        </div>
     
    ) : (
      
        <div style={{ background: "whitesmoke", height: "100% ", minWidth: '100%' }} className='py-5 h-100'>
          <div className='container d-flex justify-content-center   pt-5'>
            <Form className='py-3c w-75 ' >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={emailLabel === false ? 'text-dark' : 'text-danger'}>{emailLabel === false ? 'email adress' : 'check email'}</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label className={passLabel === false ? 'text-dark' : 'text-danger'}>{passLabel === false ? 'password' : 'check password'}</Form.Label>
                <div className='position-relative'>
                <Form.Control type={icon===false?'password':'text'} placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                <AiFillEye className=' position-absolute   'style={{top:'25%',right:'2%',cursor:'pointer'}}onClick={handleFunc}/>
                </div>
              
              </Form.Group>
              
              <div className='d-flex justify-content-center'>
                <Button variant="success " type="submit" onClick={handleForm}>
                  sign in
                </Button>
                <Button variant="success mx-5" type="submit" onClick={handleForm2}>
                  sign up
                </Button>
              </div>

            </Form>
          </div>
        </div>


      

    )

  )
}

export default Login
