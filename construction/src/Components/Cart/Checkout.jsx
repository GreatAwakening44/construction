// This is the checkout page that shows you details of your products and lets you make payments.
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
    totalPrice: 240,
};

export const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
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
        navigate("/order-confirmation");
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            {/* Left section - Form */}
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
                            })}
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
                            })}
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

                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700'>City</label>
                            <input
                            type='text'
                            value={shippingAddress.city}
                            onChange={(e) => setShippingAddress({
                                ...shippingAddress, 
                                city: e.target.value,
                            })}
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
                            })}
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
                            className='w-full bg-black text-white py-3 rounded hover:bg-gray-800'>
                                Continue to Payment
                            </button>
                        ) : (
                            <div>
                                <h3 className='text-lg mb-4'>Pay with Paypal</h3>
                                <PaypalButton 
                                    amount={cart.totalPrice}
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

            {/* Right section - Order Summary */}
            <div className='bg-gray-50 rounded-lg p-6'>
                <h2 className='text-2xl uppercase mb-6'>Order Summary</h2>
                <div className='space-y-4'>
                    {cart.products.map((product, index) => (
                        <div key={index} className='flex gap-4 pb-4 border-b'>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className='w-20 h-20 object-cover rounded'
                            />
                            <div className='flex-1'>
                                <h3 className='font-semibold'>{product.name}</h3>
                                <p className='text-sm text-gray-600'>
                                    Size: {product.size} | Color: {product.color}
                                </p>
                                <p className='font-semibold mt-1'>${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-6 pt-6 border-t'>
                    <div className='flex justify-between text-xl font-bold'>
                        <span>Total:</span>
                        <span>${cart.totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}