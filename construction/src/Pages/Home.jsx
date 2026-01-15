import React from 'react'
import Hero from '../Components/Layout/Hero'
import { TbGridGoldenratio } from 'react-icons/tb'
import Gender from '../Components/Products/Gender'
import NewArrival from '../Components/Products/NewArrival'
import ProductDetails from '../Components/Products/ProductDetails'
import Placeholder from '../Components/Products/Placeholder'

const Home = () => {
  return (
    <div>
        <Hero />
        <Gender />
        <NewArrival />

        {/* Best seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>
          Best Seller
        </h2>
        <ProductDetails />

        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Top wears for women
          </h2>
          <Placeholder />
        </div>
    </div>
  )
}

export default Home
