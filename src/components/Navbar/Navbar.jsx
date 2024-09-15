import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout =()=>{
        logOut()
        .then(()=>{
       alert('Logout successfully')
        })
        .catch(err=>{
            console.log(err);
        })
    }


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='allToys'>All Toys</Link></li>
        <li><Link to=''>Blog</Link></li>
        {
            user?.email? <><li><Link to='mytoy'>My Toys</Link></li>
        <li><Link to='addatoy'>Add A Toy</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li></> : <li><Link to='/login'>Login</Link></li>
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BONG TOY</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='allToys'>All Toys</Link></li>
        <li><Link to=''>Blog</Link></li>
        {
            user?.email? <><li><Link to='mytoy'>My Toys</Link></li>
        <li><Link to='addatoy'>Add A Toy</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li></> : <li><Link to='/login'>Login</Link></li>
        }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;