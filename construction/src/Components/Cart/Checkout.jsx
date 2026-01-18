// This is the checkout page that shows you details of your products and kets you make payments.
import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PaypalButton from './PaypalButton';

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
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
}

const handlePaymentSuccess = (details) => {
    console.log("Payment Successful", details);
    navigate("/order-confirmation")
}

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        {/* This is the left section */}
        <div className='bg-white rounded-lg p-6'>
            <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                <h3 className='text-lg mb-4'>Contact Details</h3>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input 
                    type='email'
                    value="user@example.com"
                    className='w-full p-2 border rounded'
                    disabled/>
                </div>

                <h3 className='text-lg mb-4'>Delivery</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className='block text-gray-700'>First Name</label>
                        <input
                        type='text'
                        value={shippingAddress.firstName}
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress, 
                            firstName: e.target.value,

                        })
                    }
                        className='w-full p-2 border rounded'
                        required/>
                    </div>

                    <div>
                        <label className='block text-gray-700'>Last Name</label>
                        <input
                        type='text'
                        value={shippingAddress.lastName}
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress, 
                            lastName: e.target.value,

                        })
                    }
                        className='w-full p-2 border rounded'
                        required/>
                    </div>
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Address</label>
                    <input 
                    type='text'
                    value={shippingAddress.address}
                    onChange={(e)=> 
                        setShippingAddress({
                            ...shippingAddress, address: e.target.value,
                        })
                    }
                    className='w-full p-2 border rounded'
                    required/>
                </div>
                {/* City and Postal codes. "e" stands for events, where you are expecting a change of state.*/}
                <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-gray-700'>City</label>
                        <input
                        type='text'
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress, 
                            city: e.target.value,

                        })
                    }
                        className='w-full p-2 border rounded'
                        required/>
                    </div>

                    <div>
                        <label className='block text-gray-700'>Postal Code</label>
                        <input
                        type='text'
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress, 
                            postalCode: e.target.value,

                        })
                    }
                        className='w-full p-2 border rounded'
                        required/>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Country</label>
                    <input 
                    type='text'
                    value={shippingAddress.country}
                    onChange={(e)=> 
                        setShippingAddress({
                            ...shippingAddress, country: e.target.value,
                        })
                    }
                    className='w-full p-2 border rounded'
                    required/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Phone</label>
                    <input 
                    type='text'
                    value={shippingAddress.phone}
                    onChange={(e)=> 
                        setShippingAddress({
                            ...shippingAddress, phone: e.target.value,
                        })
                    }
                    className='w-full p-2 border rounded'
                    required/>
                </div>

                {/* Checkout Button */}
                <div className='mt-6'>
                    {!checkoutId ? (
                        <button type='submit'
                        className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>

                    ) : (
                        <div>
                            <h3 className='text-lg mb-4'>Pay with Paypal</h3>
                            {/* Paypal Component Button*/}
                            <PaypalButton amount={100}
                            onSuccess={handlePaymentSuccess}
                            onError={(err) => toast.error("Payment failed. Try again", {
                                duration: 3000,
                                className: "text-lg font-semibold text-red-600"
                            })}
                            />
                        </div>
                    )}
                </div>

            </form>
        </div>
    </div>
  )
}
