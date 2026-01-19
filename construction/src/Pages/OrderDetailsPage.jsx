import React from 'react';
import { useParams } from 'react-router-dom';
// OrderId Details for the product id that the person picks or wants to check

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);


    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "Paypal",
            shippingMethod: "Standard",
            shippingAddress: { city: "New York", country: "USA" },
            orderItems: [
                {
                    productId: "1",
                    name: "Jacket",
                    price: 120,
                    quantiy: 1,
                    Image: "https://picsum.photos/150?random=1"
                },
                {
                    productId: "2",
                    name: "Boots",
                    price: 150,
                    quantiy: 2,
                    Image: "https://picsum.photos/150?random=4"
                },
            ],
        };

        setOrderDetails(mockOrderDetails)
    }, [id]);

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6'>Order Details</h2>
        {!orderDetails 
        ? (<p>No order details found</p>

        ) : (<div className='p-4 sm:p-6 rounded-lg border'>
            {/* Order Info */}
            <div className='flex flex-col sm:flex-row justify-between mb-8'>
                <div>
                    <h3 className='text-lg md:text-xl font-semibold'>Order ID: #{orderDetails._id}</h3>
                    
                </div>
            </div>
        </div>)}
    </div>
  )
}

export default OrderDetailsPage
