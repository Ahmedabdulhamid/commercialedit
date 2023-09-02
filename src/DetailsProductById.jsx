import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from './Readux/Categories'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button';
import './show.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import imgloading from './images/loader.svg'
import { increment, decrement,funcImage } from './Readux/Categories'
import { addToCart } from './Readux/Categories'
const DetailsProductById = () => {
    const { id } = useParams()
    const { dataobj, loading, detailsImages, dataImage,  } = useSelector((s) => s.allCategories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductById(id))
       
        dispatch(funcImage())

    }, [])

    return (
        <div className='container my-3'>
            {!loading ? (<div className="row">
                <div className="col-md-6 my-3  ">
                    <img src={dataImage} className='w-50 h-50 img' alt="" srcset="" />
                    <div className="row my-3">
                        {detailsImages.map((e) => (
                            <div className="col-3 my-3"key={e.id}>
                                <img src={e} className='h-100 w-100 img' alt="" srcset="" onClick={() => dispatch((funcImage(e)))}/>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className='container mt-5'>
                        <h3 className=''>{dataobj.title}</h3>
                        <p className='pragraph'> {dataobj.description}</p>
                        <div className=' d-flex justift-content-evenly align-items-center'>
                            <div className='px-2' >Rating: {dataobj.rating} <span className='text-success fs-3'> |</span> </div>
                            <div className='px-2'>Brand: {dataobj.brand} <span className='text-success fs-3'> |</span></div>
                            <div className='px-2'>Category: {dataobj.category} <span className='text-success fs-3'> |</span></div>


                        </div>
                        <div className='my-2'>
                            <span className='text-success fw-bold fs-3'>EGP
                            
                           {Math.round((dataobj.price) -(dataobj.price*(dataobj.discountPercentage/100)) ) }






                            </span>
                            <span className='mx-2 text-light bg-success'>{dataobj.discountPercentage}%</span>

                        </div>
                        <div className=' container '>
                            <span > Quantity:</span>
                            <span>
                                <Button variant='light' onClick={() => dispatch(increment(dataobj))}>+</Button>
                                <Button variant='light'>{dataobj.count}</Button>

                                <Button variant='light' onClick={() => dispatch(decrement(dataobj))}>-</Button>

                            </span>


                        </div>
                        <div className='my-3'>
                            <Button variant='success ' onClick={() => dispatch(addToCart(dataobj))}> <BsFillCartPlusFill className='text-light mx-2'
                            />
                                Add To Cart

                            </Button>
                            <Button variant='success mx-2'>Buy Now</Button>
                        </div>

                    </div>



                </div>
            </div>) : (
                <div className='d-flex justify-content-center'>
                    <img src={imgloading} width={'100'} alt="" srcset="" />

                </div>
            )}


        </div>


    )
}

export default DetailsProductById
