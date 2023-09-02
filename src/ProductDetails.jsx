import React, { useEffect } from 'react'
import { getProductCategory } from './Readux/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './show.css'
import imgloading from './images/loader.svg'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const { name } = useParams();
  const { loading, productSlice } = useSelector((s) => s.allCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductCategory(name))
  }, [name])

  const navigate = useNavigate()
  const viewDetails = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div className=' bg-whitesmoke back py-3 h-100'>
      <div className='container my-3'>
        {!loading ? (
          <div>
            <div className='categories '>
              <div className='categories-item postion-relative'>
                <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                  <h1 className='' >See Our {name}</h1>

                </div>

              </div>

            </div>


            <div className="row   ">

              {productSlice.map((e) => (

                <div className="col-md-3 col-sm-6 mt-5 d-flex justify-content-center " key={e.id}>
                  <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                    <Card.Img className='h-100' src={e.images[0]} />

                    <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                    <Card.Body className='text-center'>
                      <h6>title:{e.title}</h6>

                      <h6 >brand:{e.brand}</h6>
                      <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                      <span className='line-through text-sm' style={{ color: '#999' }}>  EGP   {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>

                      <span className='line-through text-success' >(%Off)</span>
                    </Card.Body>
                  </Card>
                </div>

              ))}
            </div>
          </div>

        ) : (
          <div className='d-flex justify-content-center'>
            <img src={imgloading} width={'100'} alt="" srcset="" />

          </div>


        )}
      </div>
    </div>

  )
}

export default ProductDetails
