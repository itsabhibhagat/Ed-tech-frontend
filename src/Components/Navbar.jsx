import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"

const Navbar = (props) => {
    let isloggedin=props.isloggedin;
    let setisloggedin=props.setisloggedin;

    return(
        <div className=" flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/home">
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" to="/" className="  h-[30px]"/>
            </Link>
            <nav>
                <ul className=" flex gap-6 text-white">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/home">About</Link>
                    </li>
                    <li>
                        <Link to="/home">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* buttons */}
            <div className=" flex ml-5 gap-7 text-white">
                { 
                    !isloggedin &&
                    <Link to="/login">
                        <button className=" bg-[#1b242d] text-white py-[8px]
                        px-[12px] rounded-[8px] border border-[#333f4b] " >Log in</button>
                    </Link>
                }
                {  
                    !isloggedin &&
                    <Link to="/signup">
                        <button className=" bg-[#1b242d] text-white py-[8px]
                        px-[12px] rounded-[8px] border border-[#333f4b]">Sign up</button>
                    </Link>
                }
                {  
                    isloggedin &&
                    <Link to="/logout">
                        <button className=" bg-[#1b242d] text-white py-[8px]
                        px-[12px] rounded-[8px] border border-[#333f4b]" onClick={()=>{
                            setisloggedin(false);
                            toast.success("logged out")
                        }}>Logout</button>
                    </Link>
                }
                { 
                    isloggedin &&
                    <Link to="/dashboard">
                        <button className=" bg-[#1b242d] text-white py-[8px]
                        px-[12px] rounded-[8px] border border-[#333f4b]">Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;