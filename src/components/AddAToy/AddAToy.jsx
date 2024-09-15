import React from 'react';

const AddAToy = () => {


  const handleDetails = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const amount = form.amount.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    console.log(name, email, category, amount, rating, quantity, description);
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 w-full">
            <form onSubmit={handleDetails} className="card-body">
            <h2 className='text-center font-bold text-2xl pb-4'>Add Toy Details</h2>
              <div className='grid md:grid-cols-2 gap-5'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input type="email" name='email' placeholder="seller email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input type="text" name='category' placeholder="Sub Category" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='amount' defaultValue={"$"+20} placeholder="" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name='rating' placeholder="Rate you product 1 to 5" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" required />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input type="text" name='description' className="input input-bordered" placeholder="Detail description" required />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Add a Toy" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddAToy;