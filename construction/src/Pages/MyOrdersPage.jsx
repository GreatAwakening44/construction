import React from 'react';
import { useState, useEffect } from 'react';

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            const mockOrders = [
                {
                    _id: 12345,
                    createAt: new Date(),
                    shippingAddress: {city: "New York", country: "USA"},
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=1"
                        },
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },
                {
                    _id: 34564,
                    createAt: new Date(),
                    shippingAddress: {city: "Saint Morris", country: "Australia"},
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=2"
                        },
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },
            ];

            setOrders(mockOrders);
        }, 1000);
    }, []);

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
    </div>
  )
}

export default MyOrdersPage
