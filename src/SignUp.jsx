import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import axios from 'axios'

const SignUp = () => {

   const [nameLabel,setNameLabel]=useState(false);
   const[emailLabel,setEmailLabel]=useState(false);
   const[ageLabel,setAgeLabel]=useState(false);
   const[passLabel,setPassLabel]=useState(false);
   const[lastNameLabel,setLastNameLabel]=useState(false)
   const[ConfirmPassLabel,setConfirmLabel]=useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [pass, setPass] = useState()
    const [ConfirmPass, setConfirmPass] = useState('')
    const [lastName, setLastName] = useState('')

    const navigate=useNavigate()
   

    const handleForm = (e) => {
        e.preventDefault()
        if (name==='') {
            setNameLabel(true)
            setName('')
            
        }
        else if (email==='') {
            setNameLabel(false)
            setEmailLabel(true)
            
        }
        else if (pass==='') {
            setNameLabel(false)
            setEmailLabel(false)
            setPassLabel(true)
            
        }
        else if (lastName==='') {
            setNameLabel(false)
            setEmailLabel(false)
            setPassLabel(false)
            setLastNameLabel(true)
            
        }
        else if (age==='' || isNaN(age)) {
            setNameLabel(false)
            setEmailLabel(false)
            setPassLabel(false)
            setLastNameLabel(false)
            setAgeLabel(true)
            
        }
        else if (ConfirmPass===''|| ConfirmPass!==pass) {
            setNameLabel(false)
            setEmailLabel(false)
            setPassLabel(false)
            setLastNameLabel(false)
            setAgeLabel(false)
            setLastNameLabel(false)
            setConfirmLabel(true)
        }
        else{
            const userInfo={firstname:name,email:email,age:age,password:pass,lastname:lastName}
            localStorage.user=JSON.stringify(userInfo)
            navigate('/login')


        }
        
       

    }



    return (
        <div style={{background:"whitesmoke"}}>
   <div className='container'>
            <Form className='py-3 row' >
                <div className='col-md-6 col-sm-6 '>
                    <Form.Group className="mb-3" >
                        <Form.Label className={nameLabel===false?'text-dark':'text-danger'}  >{nameLabel===false?'first name':'invalid first name'}</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className={emailLabel===false?'text-dark':'text-danger'}>{emailLabel===false?'email':'invalid email'}</Form.Label>
                        <Form.Control type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className={passLabel===false?'text-dark':'text-danger'}>{passLabel===false?'password':'invalid password'}</Form.Label>
                        <Form.Control type="password" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                    </Form.Group>
                  
                   
                </div>
                <div className='col-md-6 col-sm-6 '>
                    <Form.Group className="mb-3" >
                        <Form.Label className={lastNameLabel===false?'text-dark':'text-danger'}>{lastNameLabel===false?'last name':'invalid last name'}</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className={ageLabel===false?'text-dark':'text-danger'}>{ageLabel===false?'age':'invalid age'}</Form.Label>
                        <Form.Control type="text" placeholder="Your Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className={ConfirmPassLabel===false?'text-dark':'text-danger'}>{ConfirmPassLabel===false?'confirm password':'check password'}</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" value={ConfirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    </Form.Group>


                </div>
                <div className='d-flex justify-content-center'>

                    <Button variant="success mx-5" type="submit"onClick={handleForm}>
                        sign in
                    </Button>
                </div>






            </Form>
        </div>
        </div>
     
    )
}

export default SignUp
