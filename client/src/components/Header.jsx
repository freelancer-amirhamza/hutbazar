import React, { useEffect, useState } from 'react'
import Search from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import useMobile from '../hooks/useMobile'
import { BsCart4 } from "react-icons/bs";
import {useSelector} from "react-redux"
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from './UserMenu'
import { DisplayPriceInTaka } from '../utils/DisplayPriceInTaka'

const Header = () => {
  const isMobile  = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const user  = useSelector((state)=> state.user.user);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const cartItems = useSelector((state)=> state.cartItems.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const handleCloseUserMenu = ()=>{
    setShowUserMenu(false)
  }
  const handleMobileUser = ()=>{
    if(!user){
      navigate("/login")
      return;
    }
    navigate("/user")
  }

  useEffect(()=>{
    const qty = cartItems.reduce((prev,curr)=>{
      return prev + curr.quantity;
    },0);
    setTotalQty(qty);
    const tPrice = cartItems.reduce((preve,curr)=>{
              return preve + (curr.productId.price * curr.quantity)
          },0)
          setTotalPrice(tPrice)
  },[cartItems])
  return (
    <header>
      <div className="flex w-full bg-white flex-col h-28  justify-center lg:h-20 gap-1  shadow-md items-center sticky top-0  ">
        {
          !(isSearchPage && isMobile) && (
            <div className="container mx-auto items-center justify-between max-sm:px-3  w-full flex  ">
              {/* logo */}
              <Link to={"/"} className="flex sm:text-4xl text-3xl font-bold font-display">
                <span className="text-secondary">Deshi</span>
                <span className="text-primary">Motors</span>
              </Link>
              
              {/* search box */}
              <div className=" hidden  lg:flex">
                <Search />
              </div>
              {/* login and cart box */}
              <div  className="flex lg:hidden">
                <button onClick={handleMobileUser} className="text-3xl cursor-pointer text-neutral-600">
                  <FaRegUserCircle />
                </button>
              </div>
              <div className="hidden lg:flex gap-3 items-center">
                {/* login */}
                {user ? (
                    <div className="relative">
                      <button onClick={()=> setShowUserMenu(!showUserMenu)}
                    className="text-md flex items-center font-medium cursor-pointer hover:bg-neutral-200 px-3 py-2 rounded  text-neutral-800"> 
                    <p>Account</p>
                    {showUserMenu ? (<GoTriangleUp size={20} />) : (<GoTriangleDown size={20} />)}
                    </button>
                    {showUserMenu && 
                    <div className="absolute top-12 right-0 bg-white shadow-md w-40 rounded-sm transition-all duration-500">
                    <UserMenu  close={handleCloseUserMenu} />
                  </div>
                    }
                    </div>
                    
                  ) : (
                    <button onClick={()=> navigate("/login")}
                    className="text-md font-medium hover:bg-neutral-200 px-3 py-2 rounded  text-neutral-800">Login</button>
                  )
                }
  
                {/* cart */}
                <div className=" flex gap-1 items-center cursor-pointer bg-secondary text-white px-3 py-2 rounded-sm ">
                  <div className=" animate-bounce">
                  <BsCart4 size={28} />
                  </div>
                  <div className=" font-bold">
                    {cartItems[0] ? (
                      <div>
                      <p>{totalQty} Items</p>
                      <p>{DisplayPriceInTaka(totalPrice)}</p>
                  </div>
                    ): (<p>My Cart</p>)}
                    
                  </div>
                </div>
              </div>
            </div>
          )
        }

        <div className="container mx-auto  items-center px-3 lg:hidden ">
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header
