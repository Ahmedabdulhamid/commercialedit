import React from 'react'
import Coursoule from './Coursoule'
import Show from './Show'
import { useSelector } from 'react-redux'

const Home = () => {
    const {loading}=useSelector((s)=>s.dataSlice)
  return (
    <div>
    <Coursoule/>
     <Show/>
    </div>
  )
}

export default Home
