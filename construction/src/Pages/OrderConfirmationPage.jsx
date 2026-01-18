import React from 'react';

const checkout = {
    _id: "12323",
    createdAt: new Date(),
    checkoutItems: [
        {
            productsId: "1",
            name: "Jacket",
            color: "black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productsId: "1",
            name: "Jacket",
            color: "black",
            size: "M",
            price: 150,
            quantity: 2,
            image: "https://picsum.photos/150?random=1",
        },
    ],

    shippingAddress: {
        address: "123 Fashion Street",
        city: "New York",
        country: "USA",
    }
}

const OrderConfirmationPage = () => {
  return (
    <div>OrderConfirmationPage</div>
  )
}

export default OrderConfirmationPage
