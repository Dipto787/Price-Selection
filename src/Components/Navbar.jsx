 
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Link from './Link';
import { IoIosMenu } from "react-icons/io";
 const Navbar = () => {
    let [open,setOpen]=useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
      ]; 
      console.log(routes);
      
    return (
        <div className=''>

           <div onClick={()=>setOpen(!open)} className='md:hidden'>
           
           {
            open===true ? <IoCloseSharp className='text-2xl' /> : <IoIosMenu className='text-2xl ' />
           }
           </div>

            <ul className={`md:flex duration-500 md:static px-10 p-5 absolute 
                ${open?'':'hidden'}
                bg-purple-600 text-white`}>
            {
                routes.map(route=> <Link route={route}></Link>)
            }
            </ul>
        </div>
    );
 };
 
 export default Navbar;