import React from 'react';
import SmallCard from '../../components/small-card/SmallCard';

const FeaturedItems = ({ data }) => {
    console.log(data)
    return (
        <div className='flex flex-wrap sm:justify-center sm:items-center gap-2 col-span-5  sm:gap-5'>
        
            {
                data.map(ele => <SmallCard data={ele}></SmallCard>)
            }
        </div>
    );
};

export default FeaturedItems;