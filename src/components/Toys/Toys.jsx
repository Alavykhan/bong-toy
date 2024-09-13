import React from 'react';
import { Link} from 'react-router-dom';

const Toys = ({toy}) => {
    const {_id, title, price, img, rating, quantity} = toy;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary"><Link to={`/toy/${_id}`}>View Details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Toys;