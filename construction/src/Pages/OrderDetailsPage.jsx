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
                    productId: "1",
                    name: "Jacket",
                    price: 120,
                    quantiy: 1,
                    Image: "https://picsum.photos/150?random=1"
                },
            ],
        };
    });
    
  return (
    <div>

    </div>
  )
}

export default OrderDetailsPage
