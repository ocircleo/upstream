import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
const OmniDetaill = () => {
    const loaderData = useLoaderData()
    //name
    //price
    //launch
    //brand
    // ram
    // processor
    // stroage
    //buy on daraj
    //buy on amazon
    console.log(loaderData);
    delete loaderData._id;
    delete loaderData.Showroom;
    delete loaderData.Video;
    delete loaderData.Audio;
    let gridData = Object.entries(loaderData)
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [])
    return (
        <div className='container mx-auto  px-2'>
            <BsArrowLeft className='text-3xl mt-2 rounded cursor-pointer bg-gray-100 p-1' onClick={goBack} />
            <div className='grid grid-cols-5  gap-5 mt-2'>
                <div className='h-full col-span-5 lg:col-span-2 bg-gray-300 rounded '>
                    <img src="" className='h-full w-full bg-slate-300 rounded min-h-[20rem] lg:h-full object-cover' alt="" />
                </div>
                <div className='h-full col-span-5 lg:col-span-3 bg-gray-100 rounded '>
                    <h1 className='text-xl font-semibold p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quia culpa quo!</h1>
                    <div className='flex justify-start flex-wrap gap-2 mx-2' >
                        <button className='bg-gray-100 capitalize px-3 font-semibold  text-[.9rem] text-gray-600 rounded-xl'><span className='text-[.8rem]'>price</span>: 100$</button>
                        <button className='bg-gray-100 capitalize px-3 font-semibold  text-[.9rem] text-gray-600 rounded-xl'><span className='text-[.8rem]'>price</span>: 100$</button>
                        <button className='bg-gray-100 capitalize px-3 font-semibold  text-[.9rem] text-gray-600 rounded-xl'><span className='text-[.8rem]'>price</span>: 100$</button>
                    </div>
                    <div className='p-3  text-[.8rem] text-gray-600 font-semibold capitalize flex flex-col gap-1'>
                        <h3 className='text-lg font-semibold'>Key feature</h3>
                        <p>model: <span className='text-sm'>havit-mic-44</span></p>
                        <p>brand: <span className='text-sm'>havit</span></p>
                        <p>platform: <span className='text-sm'>android</span></p>
                        <p>price: <span className='text-sm'>400$</span></p>


                    </div>
                    <Link className='text-indigo-500 inline-block bg-white border-2 p-2 ms-2 rounded'>Buy on amazon </Link>

                </div>

            </div>
            <div className='w-full min-h-[30rem]   my-5'>
                <h3 className='text-2xl font-semibold underline underline-offset-8 underline-2 text-gray-700 decoration-gray-500 p-2'>Detaill description</h3>

                <div className="overflow-x-auto">
                    <table className="table table-zebra text-[.9rem]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                gridData.map(ele => {
                                    return (
                                        <tr>
                                            <td>{ele[0]}</td>
                                            <td>{ele[1]}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <div className='min-h-[15rem] rounded w-full bg-gray-300'>
                comments
            </div>
        </div>
    );
};

export default OmniDetaill;