import React from 'react';
// This page confirms the order of whatever is about to be checked out

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
    },
};

const OrderConfirmationPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
        <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
            Thank You For your order!
        </h1>

        {checkout && (
            <div className='p-6 rounded-lg border'>
                <div className='flex justify-between mb-20'>
                    {/* Order Id and Date */}
                    <div>
                        <h2 className='text-xl font-semibold'>Order ID: {checkout._id}</h2>
                        <p className='text-gray-500'>Order date: {new Date(checkout.createdAt)}</p>
                    </div>
                </div>
            </div>
        )}

    </div>
  )
}

export default OrderConfirmationPage
