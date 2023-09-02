import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { getAllSmartPhons, getAllLaptops, getAllFragrances,getAllSkinCare,getAllGroceries,getAllHomeDecoration } from './Readux/productSlice'
import "./show.css"
const SmartPhones = () => {
  const { loading, productSmartPhons, productLaptops ,productFrangces,productSkinCare,productGroceries,productHomeDecoration} = useSelector((s) => s.getProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllSmartPhons())
    dispatch(getAllLaptops())
    dispatch(getAllFragrances())
    dispatch(getAllSkinCare())
    dispatch(getAllGroceries())
    dispatch(getAllHomeDecoration())

  }, [])
 
  return (
    <div>
      <div className='bg-whitesmoke back py-3 h-100'  >
        <div className='container'>
          <div className='categories '>
            <div className='categories-item postion-relative'>
              <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                <h1 className='' >See Our smartphones</h1>

              </div>

            </div>

          </div>
          <div className="row  mt-5">
            {productSmartPhons.map((e) => (
              <div className="col-md-3 mt-5  " key={e.id}>
                <Card className='w-100 h-100 postion-relative  a'>
                  <Card.Img className='h-100' src={`${e.thumbnail}`} />
                  <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                  <Card.Body className='text-center'>
                    <h6 >price:{e.price}$</h6>
                    <h6 >brand:{e.brand}</h6>

                  </Card.Body>
                </Card>
              </div>

            ))}
          </div>

        </div>
      </div>
      <div className='bg-whitesmoke back py-3 h-100'  >
        <div className='container'>
          <div className='categories '>
            <div className='categories-item postion-relative'>
              <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                <h1 className='' >See Our Laptops</h1>

              </div>

            </div>

          </div>
          <div className="row  mt-5">
            {productLaptops.map((e) => (
              <div className="col-md-3 mt-5  " key={e.id}>
                <Card className='w-100 h-100 postion-relative  a'>
                  <Card.Img className='h-100' src={`${e.thumbnail}`} />
                  <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                  <Card.Body className='text-center'>
                    <h6 >price:{e.price}$</h6>
                    <h6 >brand:{e.brand
                    }</h6>
                  </Card.Body>
                </Card>
              </div>

            ))}
          </div>

        </div>
      </div>
      <div className='bg-whitesmoke back py-3 h-100'  >
        <div className='container'>
          <div className='categories '>
            <div className='categories-item postion-relative'>
              <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                <h1 className='' >See Our Frangces</h1>

              </div>

            </div>

          </div>
          <div className="row  mt-5">
            {productFrangces.map((e) => (
              <div className="col-md-3 mt-5  " key={e.id}>
                <Card className='w-100 h-100 postion-relative  a'>
                  <Card.Img className='h-100' src={`${e.thumbnail}`} />
                  <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                  <Card.Body className='text-center'>
                    <h6 >price:{e.price}$</h6>
                    <h6 >brand:{e.brand
                    }</h6>
                  </Card.Body>
                </Card>
              </div>

            ))}
          </div>

        </div>
      </div>
      <div className='bg-whitesmoke back py-3 h-100'  >
        <div className='container'>
          <div className='categories '>
            <div className='categories-item postion-relative'>
              <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                <h1 className='' >See Our Skincare</h1>

              </div>

            </div>

          </div>
          <div className="row  mt-5">
            {productSkinCare.map((e) => (
              <div className="col-md-3 mt-5  " key={e.id}>
                <Card className='w-100 h-100 postion-relative  a'>
                  <Card.Img className='h-100' src={`${e.thumbnail}`} />
                  <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                  <Card.Body className='text-center'>
                    <h6 >price:{e.price}$</h6>
                    <h6 >brand:{e.brand
                    }</h6>
                  </Card.Body>
                </Card>
              </div>

            ))}
          </div>

        </div>
      </div>
      <div className='bg-whitesmoke back px-3 py-2 h-100'  >
        <div className='container'>
          <div className='categories '>
            <div className='categories-item postion-relative'>
              <div className='title-md bg-light w-100 px-3 postion-absolute'>
                <h1 className='' >See Our groceries</h1>

              </div>

            </div>

          </div>
          <div className="row  mt-5">
            {productGroceries.map((e) => (
              <div className="col-md-3 mt-5  " key={e.id}>
                <Card className='w-100 h-100 postion-relative  a'>
                  <Card.Img className='h-100' src={`${e.thumbnail}`} />
                  <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                  <Card.Body className='text-center'>
                    <h6 >price:{e.price}$</h6>
                    <h6 >brand:{e.brand
                    }</h6>
                  </Card.Body>
                </Card>
              </div>

            ))}
          </div>

        </div>
      </div>
      <div className='bg-whitesmoke back px-3 py-2 h-100'  >
        <div className='container'>
          <div className='categories '>
            <div className='categories-item postion-relative'>
              <div className='title-md bg-light w-100 px-3 postion-absolute'>
                <h1 className='' >See Our homedecoration</h1>

              </div>

            </div>

          </div>
          <div className="row  mt-5">
            {productHomeDecoration.filter((e)=>{
              return e.id<29
            }).map((e) => (
              <div className="col-md-3 mt-5  " key={e.id}>
                <Card className='w-100 h-100 postion-relative  a'>
                  <Card.Img className='h-100' src={`${e.thumbnail}`} />
                  <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                  <Card.Body className='text-center'>
                    <h6 >price:{e.price}$</h6>
                    <h6 >brand:{e.brand
                    }</h6>
                  </Card.Body>
                </Card>
              </div>

            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default SmartPhones
