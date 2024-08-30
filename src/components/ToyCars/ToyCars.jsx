import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';

const ToyCars = () => {

    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=>setToys(data));
    },[])

    return (
        <div>
            <h2 className='text-5xl font-bold text-center text-white'>Best Toy Cars</h2>
           <div className='grid md:grid-cols-4 md:mx-20 md:my-16 gap-5'>
           {
                toys.map(toy=><Toys
                key={toy._id}
                toy={toy}></Toys>)
            }
           </div>
        </div>
    );
};

export default ToyCars;