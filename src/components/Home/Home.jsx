import ToyCars from "../ToyCars/ToyCars";


const Home = () => {
    return (
        <div>
            <div
        className="hero min-h-screen mb-20"
        style={{
            backgroundImage: "url(https://i.ibb.co/d4YkvCJ/toy-cover.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl text-white">
            <h1 className="mb-5 md:text-6xl font-bold">Discover the Best Car Toys for Kids of All Ages</h1>
            <p className="mb-5">
            We have a wide selection to ignite every child's imagination and fuel their love for all things automotive. Explore our collection and find the perfect ride to keep the excitement on the road.
            </p>
            <button className="btn btn-primary">All Toys</button>
            </div>
        </div>
        </div>
        <ToyCars/>
        </div>


    );
};

export default Home;