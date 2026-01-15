import React from 'react'
import ProductGrid from './ProductGrid';



const placeholderProducts = [
    {
        _id: 4,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=2"}]
    },
    {
        _id: 5,
        name: "Product 2",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=3"}]
    },
    {
        _id: 6,
        name: "Product 3",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=4"}]
    },
    {
        _id: 7,
        name: "Product 4",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=5"}]
    }
]

const Placeholder = () => {
  return (
    <>
        <ProductGrid products={placeholderProducts}/>
    </>
  )
}

export default Placeholder
