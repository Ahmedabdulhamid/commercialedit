import React from 'react'

const ProductNotFound = () => {
    return (
        <div style={{height:'100vh',backgroundColor:'whitesmoke'}}>
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

    )
}

export default ProductNotFound
