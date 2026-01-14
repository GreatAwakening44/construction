import React from 'react'
import Hero from '../Components/Layout/Hero'
import { TbGridGoldenratio } from 'react-icons/tb'
import Gender from '../Components/Products/Gender'
import NewArrival from '../Components/Products/NewArrival'

const Home = () => {
  return (
    <div>
        <Hero />
        <Gender />
        <NewArrival />
    </div>
  )
}

export default Home
