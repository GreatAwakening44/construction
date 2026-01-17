// This is the checkout page that shows you details of your products and kets you make payments.
import React from 'react'

const cart = {
    products: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 120,
            image: "https://picsum.photos/150?random=1"
        },
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 120,
            image: "https://picsum.photos/150?random=1"
        },
    ],
    totalPrice: 195,
};

export const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}
