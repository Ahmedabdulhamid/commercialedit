import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import imgloading from './images/loader.svg'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const { item } = useParams()

  const { arr, loading } = useSelector((s) => s.searchSliceProduct)
  const navigate = useNavigate()
  const viewDetails = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <div className=' bg-whitesmoke back py-3 h-100'>
        <div className='container my-3'>
          {!loading ? (
            <div>
              {arr.length !== 0 ? (
                <dir>
                  <div className='categories '>
                    <div className='categories-item postion-relative'>
                      <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                        <h3 className='' style={{ color: "#999" }}>Search Results :</h3>

                      </div>

                    </div>

                  </div>


                  <div className="row   ">

                    {arr.map((e) => (

                      <div className="col-md-3 col-sm-6  mt-5 d-flex justify-content-center " key={e.id}>
                        <Card className='w-75 h-100 postion-relative img a' style={{ cursor: "pointer" }} onClick={() => viewDetails(e.id)}>
                          <Card.Img className='h-100' src={e.images[0]} />

                          <h6 className='postion-absolute bg-success px-3 py-2 text-light b'>{e.category}</h6>
                          <Card.Body className='text-center'>
                            <h6>title:{e.title}</h6>


                            <h6 >brand:{e.brand}</h6>
                            <s className='line-through text-sm' style={{ color: '#999' }}>EGP{e.price}</s>

                            <span className='line-through text-sm' style={{ color: '#999' }}> EGP {Math.round((e.price) - (e.price * (e.discountPercentage / 100)))}</span>

                            <span className='line-through text-success' >(%Off)</span>
                          </Card.Body>
                        </Card>
                      </div>

                    ))}
                  </div>
                </dir>
              ) :


                (
                  <div style={{ height: '100vh', backgroundColor: 'whitesmoke' }}>
                    <div className='container py-5'>
                      <div className='categories '>
                        <div className='categories-item postion-relative'>
                          <div className='title-md bg-light w-100 px-3 py-2 postion-absolute'>
                            <h3 className='' style={{ color: "#999" }}>Search Results :</h3>

                          </div>

                        </div>

                      </div>

                      <h4 className='text-success my-5'>Product Not Found</h4>
                    </div>
                  </div>

                )}

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

export default Search
