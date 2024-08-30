import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const SingleToy = () => {
    const toys= useLoaderData();
    const {title, price, quantity, _id, img, rating}= toys

    const firstExample = {
        size: 30,
        value: `${rating}`,
        edit: false
      };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex justify-between gap-10">
                <img
                src={img}
                className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">
                    Unit Price: {price}
                </p>
                <p className="py-6">
                    Quantity Available: {quantity}
                </p>
                <ReactStars {...firstExample} />
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleToy;