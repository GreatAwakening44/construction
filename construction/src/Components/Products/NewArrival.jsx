import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NewArrival = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    
    const newArrivals = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "2",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "3",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "4",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "5",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "6",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "7",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "8",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylish Jacket",
                },
            ],
        },
    ];

    //HandleMouseDown
   
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle Mouse Up or Leave - Stop dragging
    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    // Update scroll buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            console.log({
                scrollLeft: container.scrollLeft,
                clientWidth: container.clientWidth,
                scrollWidth: container.scrollWidth,
                offsetLeft: scrollRef.current.offsetLeft
            });
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.clientWidth
            );
        }
    };

    

    // Scroll left function
    const scrollLeftHandler = () => {
        const container = scrollRef.current;
        if (container) {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Scroll right function
    const scrollRightHandler = () => {
        const container = scrollRef.current;
        if (container) {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons(); // Initial check
            
            // Cleanup function
            return () => {
                container.removeEventListener("scroll", updateScrollButtons);
            };
        }
    }, []); // Empty dependency array

    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto text-center mb-10 relative'>
                <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Discover the latest styles straight off the runway, freshly added to 
                    keep your wardrobe on the cutting edge of fashion.
                </p>
                {/* Scroll buttons */}
                <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
                    <button 
                        onClick={scrollLeftHandler}
                        disabled={!canScrollLeft}
                        className='p-2 rounded border bg-white text-black disabled:opacity-50'
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>
                    <button 
                        onClick={scrollRightHandler}
                        disabled={!canScrollRight}
                        className='p-2 rounded border bg-white text-black disabled:opacity-50'
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div ref={scrollRef} 
            className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}

            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
            }}>
                {newArrivals.map((product) => (
                    <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img 
                            src={product.images[0]?.url}
                            alt={product.images[0]?.altText || product.name} 
                            className='w-full h-[500px] object-cover rounded-lg'
                            draggable="false"
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md
                        text-white p-4 rounded-b-lg'>
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className='font-medium'>{product.name}</h4>
                                <p className='mt-1'>${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrival;
