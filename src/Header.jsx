import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { logout } from './Readux/Categories';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAllCategories } from './Readux/Categories';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiFacebook } from 'react-icons/ci'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import { BsBagFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import "./header.css"
import { AiFillQuestionCircle } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import { FaBars } from 'react-icons/fa'
import { searchProducts } from './Readux/SearchSlice';

const Header = () => {
    const [show, setShow] = useState(false);
    const { data, dataSlice } = useSelector((s) => s.allCategories)
    const { array } = useSelector((s) => s.allCategories)
    const { arr, loading } = useSelector((s) => s.searchSliceProduct)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
  
 
   
    const navigate = useNavigate()
   
   
    useEffect(() => {
        dispatch(getAllCategories())
       

    }, [])
 
    const [item, setItem] = useState('')
    const handleForm = (e) => {
        dispatch(searchProducts(item))
        e.preventDefault()
        if (item==='') {
            navigate('/productNotFound')
            
        }
        else{
            
           
            navigate(`/search/${item}`)
        }
      
        setItem('')

    }


    return (
        <div style={{ backgroundColor: "#006400" }} >
            <div className="container">
                <div className="text-light d-flex flex-wrap w-100">
                    <div className="d-flex align-items-center" >
                        <p className='me-2 mt-3 text-light'>Follow Us</p>
                        <Link as={Link} to='https://ar-ar.facebook.com/' className='text-light'><CiFacebook className='me-2 fs-3' /></Link>
                        <Link as={Link} to='https://twitter.com/?lang=ar' className='text-light'>< BsInstagram className='fs-5' /></Link>

                    </div>
                    <div className="d-flex align-items-center ms-auto">
                        <Nav.Link><AiFillQuestionCircle className='me-2 mt-4' /></Nav.Link>
                        <Nav.Link className='me-2 mt-3 text-light ' style={{ cursor: 'pointer' }}>Supprt</Nav.Link>
                        <span className='me-2 mt-3 xz'>|</span>
                        <Nav.Link className='me-2 mt-3 text-light' style={{ cursor: 'pointer' }} as={Link} to='/signup'>Register</Nav.Link>
                        <span className='me-2 mt-3 xz'>|</span>
                        {localStorage.login?( <Nav.Link className='me-3 mt-3 text-light' style={{ cursor: 'pointer' }} onClick={()=>dispatch(logout())}>logout</Nav.Link>
                        ):(<Nav.Link className='me-2 mt-3 text-light' style={{ cursor: 'pointer' }} as={Link} to='/login'>login</Nav.Link>)}
                        

                    </div>
                </div>
                <div className="w-100 bg-light " style={{ height: '1px' }}> </div>
                <Navbar.Brand className='text-light d-flex justify-content-start align-items-center'>
                    <AiOutlineBars onClick={handleShow} className='fs-4 me-2 text-light' style={{ cursor: 'pointer' }} />
                    <Offcanvas show={show} onHide={handleClose} className=' w-25' style={{ minWidth: '240px' }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>All Categoris</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className=' navlink2 '>
                            {data.map((e) => (
                                <Nav.Link className=' navlink1 ' as={Link} to={`/category/${e}`} key={e.id}>
                                    {e}
                                    <hr className='text-success' />
                                </Nav.Link>
                            ))}
                        </Offcanvas.Body>

                    </Offcanvas>
                    <BsBagFill className='mx-1 fs-5' />
                    <Nav.Link as={Link} to='/'>
                        <span className='fw-bold fs-5  text-light' style={{ cursor: 'pointer' }}>GOO</span>
                        <span className='text-light fs-5' style={{ cursor: "pointer" }}>web.</span>


                    </Nav.Link>


                </Navbar.Brand>
                <Navbar expand='lg' className='d-flex justify-content-end '>

                    <Navbar.Toggle className='s  border-none border-1' >
                        <FaBars className='text-light' />
                    </Navbar.Toggle>

                    <Navbar.Collapse id='navbarScroll'>

                        <div className="d-flex flex-column align-items-center w-100 text-light mt-3">
                            <Form className='seearchform position-relative w-100   '>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" aria-label='search' placeholder="search your perferred items here  " value={item}


                                        onChange={(e) => setItem(e.target.value)}


                                        className='py-3' />

                                </Form.Group>
                                <Button variant=' border border-light border-5 position-absolute xys end-0 left-0 border-2' onClick={handleForm} >
                                    <AiOutlineSearch className=' text-light  text-center fs-4  ' />


                                </Button>


                            </Form>

                            <Nav className='me-auto my-2 my-lg-0'

                            >

                                {dataSlice.map((e) => (
                                    <Nav.Link className='text-light' as={Link} to={`/category/${e}`} key={e.id}>{e}</Nav.Link>
                                ))}

                            </Nav>

                        </div>
                        <Nav className="d-flex justify-content-end flex-grow-1 pe-3 ">
                            <Nav.Link className='text-light position-relative ' as={Link} to='/cart'>
                                <BiCartAlt className='fs-1 cart' />
                                <span className="position-absolute top-0 numbericon text-success bg-light px-1 ">{array.length}</span>

                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>




                </Navbar>
            </div>

        </div>
    )
}

export default Header
