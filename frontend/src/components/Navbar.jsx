
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import CartModal from '../pages/shop/CartModal';
import avatarImg from "../assets/avatar.png";
import { useLogoutUserMutation } from '../redux/features/auth/authapi';
import { logout } from '../redux/features/auth/authSlice';

const Navbar = () => {
    const products=useSelector((state)=>state.cart.products);
    //console.log(products)
    const [isCartOpen, setisCartOpen] = useState(false);
    const handleCartToogle = () => {
        setisCartOpen(!isCartOpen)
    }
   
//show user if logged in
const dispatch = useDispatch();
const {user}=useSelector((state)=> state.auth);
// console.log(user)
// logout user
const [logoutUser] = useLogoutUserMutation();
const  navigate = useNavigate();

//dropdown menus
const [isDropDownOpen, setIsDropDownOpen] = useState(false);
const handDropDownToogle = () => {
    setIsDropDownOpen(!isDropDownOpen)
}

//admin dropdown menus
const adminDropDownMenus = [
    {label: "Dashboard", path: "/dashboard/admin"},
    {label: "Manage Items", path: "/dashboard/manage-products"},
    {label: "All Orders", path: "/dashboard/manage-orders"},
    {label: "Add Product", path: "/dashboard/add-product"},
]
//user dropdown menus
const userDropDownMenus = [
    {label: "Dashboard", path: "/dashboard"},
    {label: "Profile", path: "/dashboard/profile"},
    {label: "Payments", path: "/dashboard/payments"},
    {label: "Orders", path: "/dashboard/orders"},
]

const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus]

const handleLogout = async () => {
try {
    await logoutUser().unwrap();
    dispatch(logout())
    navigate('/')
} catch (error) {
    console.error("Failed to Logout");
}
}

  return (
    <header>
        <nav>
            <ul className="nav__links">
                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                {/* <li className='link'><Link to="/">Pages</Link></li>
                <li className='link'><Link to="/contact">Contact</Link></li> */}
            </ul>
            
{/* Logo */}
            <div className='nav__logo'>
                <Link to="/">O'Blush <span>.</span></Link></div>

                {/* nav icons */}
                <div className='nav__icons relative'>
                    <span>
                    <Link to="/search">
                         <i className="ri-search-line"></i>
                    </Link>
                    </span>
                    <span>
                        <button onClick={handleCartToogle} className='hover:text-primary'>
                        <i className="ri-shopping-bag-line"></i>
                        <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                        </button>
    
                    </span>
                    <span>
                        {
                          user &&  user ? (<>
                          <img 
                          onClick={handDropDownToogle}
                          src={user?.profileImage || avatarImg } alt="" className='size-6 runded-full cursor-pointer' />
                          {
                            isDropDownOpen && (
                                <div className='absolute right-0 mt-3 p-4 w-48 bg-white border
                                border-gray-200 rounded-lg shadow-lg z-50'>
                                    <ul className='font-medium space-y-4 p-2'>
                                        {dropdownMenus.map((menu, index)=> (
                                            <li key={index}>
                                                <Link
                                                onClick={()=> setIsDropDownOpen(false)} 
                                                className='dropdown-items' to={menu.path}>{menu.label}</Link>

                                            </li>
                                        ))}
                                        <li><Link onClick={handleLogout}
                                        className='dropdown-items'>Logout</Link></li>
                                    </ul>
                                </div>
                            )
                          }
                          </>) : (<Link to ="login">
                                <i className="ri-user-3-line"></i>
                                </Link>)
                        }
                        
                    </span>
                </div>
        </nav>

        {/* addtocart bag section CartModel */}
        {
            isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToogle}/>
        }

    </header>
  )
}

export default Navbar

