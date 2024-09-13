import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from '../Toys/Toys';

const AllToys = () => {
    const toys = useLoaderData();
    const {_id}=toys
    console.log(toys);
    return (
        <div>
            <h1 className='text-center font-bold text-6xl mt-5'>All Toys</h1>
          <div className='grid md:grid-cols-4 md:mx-20 my-20 gap-5'>
          {
                toys.map(toy=><Toys
                key={toy._id}
                toy={toy}></Toys>)
            }
          </div>
        </div>
    );
};

export default AllToys;