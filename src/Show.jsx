import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import {
  getAllProducts, getAllFurniture, getAllTops, getAllWomenDress, getAllWomenShoes, getAllMenShirts, getAllMenShoes
  , getAllAuotoMotivde, getAllMotor, getAllWatches, getAllWomenWatches, getAllWomenPages, getAllWomenJwellery, getAllWomenSunglasses, getAllWomenLighting


} from './Readux/allProducts'
import imgloading from './images/loader.svg'
import './show.css'
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
const Show = () => {
  const { loading, productSmartPhons, productFurniture, productTops, productWomenDress, productWomenShoes, productMenShirts, productMenShoes, productMotive, productMotor,
    productMenWatch,
    productWomenWatch,
    productWomenPages,
    productWomenJwellery,
    productWomenSunglasses,
    productWomenLighting,



  } = useSelector((s) => s.dataSlice)
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    Dispatch(getAllProducts())
    Dispatch(getAllFurniture())
    Dispatch(getAllTops())
    Dispatch(getAllWomenDress())
    Dispatch(getAllWomenShoes())
    Dispatch(getAllMenShirts())
    Dispatch(getAllMenShoes())
    Dispatch(getAllAuotoMotivde())
    Dispatch(getAllMotor())
    Dispatch(getAllWatches())
    Dispatch(getAllWomenWatches())
    Dispatch(getAllWomenPages())
    Dispatch(getAllWomenJwellery())
    Dispatch(getAllWomenSunglasses())
    Dispatch(getAllWomenLighting())

  }, [])


  //const {id}=useParams()
  const viewDetails = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className='bg-whitesmoke back py-3 h-100'  >
      <div className='container'>
        <div>
          {!loading ? (
            <div>
              <div className='categories '>
                <div className='categories-item postion-relative'>
                  <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                    <h1 className='' >See Our Products</h1>

                  </div>

                </div>

              </div>
              <div className="row  mt-5">
                {productSmartPhons.map((e) => (
                  <div className="col-md-3 col-sm-6 mt-5  d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productFurniture.map((e) => (
                  <div className="col-md-3 col-sm-6 mt-5   d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                       
                        <h6 >brand:{e.brand}</h6>
                        
                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>


                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productTops.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 img postion-relative  a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                     
                        <h6 >brand:{e.brand}</h6>
                        
                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>


                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenDress.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                       
                        <h6 >brand:{e.brand}</h6>
                        
                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>


                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenShoes.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                      
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productMenShirts.map((e) => (
                  <div className="col-md-3 mt-5  col-sm-6 d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
              

                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productMenShoes.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center" key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productMotive.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productMotor.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6 d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img  a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productMenWatch.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6 d-flex justify-content-center align-items-center " key={e.id} style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                    <Card className='w-75 h-100 postion-relative img a' onClick={() => viewDetails(e.id)} style={{ cursor: "pointer" }} >
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenWatch.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6 d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenPages.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6 d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <p >title:{e.title}</p>
                       
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenJwellery.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <p >title:{e.title}</p>
                      
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenSunglasses.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6 d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <p >title:{e.title}</p>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP{Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
                        <span className='line-through text-success' >(%Off)</span>

                      </Card.Body>
                    </Card>
                  </div>

                ))}
                {productWomenLighting.map((e) => (
                  <div className="col-md-3 mt-5 col-sm-6  d-flex justify-content-center align-items-center " key={e.id}>
                    <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                      <Card.Img className='h-100' src={`${e.images[0]}`} />
                      <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                      <Card.Body className='text-center'>
                        <h6>title:{e.title}</h6>
                        
                        <h6 >brand:{e.brand}</h6>

                        <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                        <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) -(e.price*(e.discountPercentage/100)) ) }</span>
                          
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
    </div>

  )
}

export default Show
