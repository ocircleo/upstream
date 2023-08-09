import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const MainCard = ({ data }) => {
    let { Price, Model, _id } = data;
    let smallPrice = Price.split(" ");
    smallPrice = smallPrice.slice(0, 2)
    smallPrice = smallPrice[0] + " " + smallPrice[1]
    let name = Model.split(',')
    return (
        <Link to={`detaill/${_id}`}>
            <div className="flex flex-col gap-5 w-56 bg-base-100  relative rounded-lg flex-shrink-0 pb-5 border">
                <div className='h-44 bg-gray-200 z-10  w-full object-cover rounded-lg absolute top-2'></div>
                <figure className='h-44 bg-white  w-full object-cover z-20 rounded-lg'><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className=" flex flex-col items-center gap-2">
                    <div className=''>  <Rating
                        style={{ maxWidth: 90 }}
                        value={3}
                        readOnly
                    /></div>
                    <div className='flex flex-col capitalize text-sm font-semibold px-1 items-center'>
                        <div>
                            <h3 title='product name' className='text-gray-600'>{name[0]}</h3>
                        </div>
                        <p title='price' className='text-center text-gray-700'>{smallPrice}</p>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <Link className='active:scale-90 duration-200 bg-gray-100 capitalize flex items-center gap-3 hover:bg-gray-200 justify-center p-1 rounded'>see more <BsFillArrowRightCircleFill /></Link>
                        <div className='cursor-pointer bg-gray-100 capitalize flex items-center gap-3 hover:bg-gray-200 active:scale-90 duration-200 justify-center p-1 rounded'>
                            Add to cart
                            <BsFillCartFill />
                        </div>
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default MainCard;