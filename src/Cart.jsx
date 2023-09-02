import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import img from './images/shopping_cart.png'
import "./header.css"
import { increment1, decrement1, deleteBtn, clear } from './Readux/Categories'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsTrash3Fill } from 'react-icons/bs'
import { addToCart } from './Readux/Categories';
import { useParams } from 'react-router-dom';
const Cart = () => {
  const { array } = useSelector((s) => s.allCategories)
  console.log(array);
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(addToCart)
  })
  return (
   
      <div style={{ backgroundColor: 'whitesmoke' }} className='w-100 h-100 '>
        <div className='container py-5'>
          {array.length === 0 ? (
            <div> 
              <div className='d-flex justify-content-center align-items-center py-5'>
                <img src={img} className='w-25' alt="" srcset="" style={{ minWidth: "240px" }} />




              </div>
              <div className='py-3 d-flex justify-content-center'>
                <Link as={Link} to='/'>
                  <Button variant="outline-success">go to shopping</Button>
                </Link>


              </div>

            </div>




          )
            : (
              <div>
                <TableContainer component={Paper} className='navlink3'>
                  <Table sx={{ minWidth: 650 }} aria-label="caption table ">

                    <TableHead>
                      <TableRow>
                        <TableCell>SN</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {array.map((e, index) => (
                        <TableRow key={index} className=''>
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell align="right">{e.title}</TableCell>
                          <TableCell align="right">   {Math.round((e.price) - (e.price * (e.discountPercentage / 100)))} EGP
                          </TableCell>
                          <TableCell align="right">  <div className='d-flex justify-content-end'>
                            <Button variant='light' onClick={() => dispatch(increment1(e))}>+</Button>
                            <Button variant='light'>{e.count}</Button>
                            <Button variant='light' onClick={() => dispatch(decrement1(e))}>-</Button>


                          </div></TableCell>
                          <TableCell align="right">

                            EGP {Math.round((e.price) - (e.price * (e.discountPercentage / 100))) * e.count}

                          </TableCell>
                          <TableCell align="right"> <Button variant='none' onClick={() => dispatch(deleteBtn(e))} className='text-success'>Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}

                    </TableBody>
                  </Table>

                </TableContainer>
                <div className=''>

                  <span className='mx-2 my-2 d-flex justify-content-start'>
                    <Button variant='success ' onClick={() => dispatch(clear())}> <BsTrash3Fill className='text-light mx-2'
                    />
                      clear the cart

                    </Button>
                  </span>
                  <span className='mx-2 my-2 d-flex justify-content-end'>
                    <span className='text-success'>Total ({array.length}) Items:<span className='fw-bold fs-5'>{array.map((e) => {
                      return (Math.round((e.price) - (e.price * (e.discountPercentage / 100))) * e.count)
                    }).reduce((x, y) => (
                      x + y
                    ), 0)}EGP</span></span>
                  </span>
                </div>
              </div>


            )
          }
        </div>
      </div>

   

  )
}

export default Cart
