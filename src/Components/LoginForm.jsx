import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from  'react-icons/ai'
import { useNavigate } from "react-router-dom";

const LoginForm=({setisloggedin})=>{

    const navigate=useNavigate();

    const [formData,setformData]=useState({
        email:"",
        password: ""
    })

    const [showpassword,setshowpassword]=useState(false);

    function changehandler(event){
        setformData({...formData,[event.target.name] : event.target.value})
    }

    function Submithandler(event){
        event.preventDefault();
        setisloggedin(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }

    return(
        <form onSubmit={Submithandler}
        className=" flex flex-col w-full gap-y-4 mt-6">
            <label className=" w-full">
                <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">Email Address<sup className=" text-red-500">*</sup></p>
                <input required 
                    name="email"
                    type="email" 
                    value={formData.email} 
                    onChange={changehandler} 
                    placeholder="Enter Email Address"
                    className=" w-full bg-[#28343e] rounded-md p-[0.5rem]  border-b-[1px] text-[#eaf2f9] "
                />
                    
            </label>
            <label className=" w-full relative">
                <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">Password<sup className=" text-red-500">*</sup></p>
                <input required 
                    name="password"
                    type={showpassword ? ("text"):("password")} 
                    value={formData.password} 
                    onChange={changehandler} 
                    placeholder="Enter password"
                    className=" w-full bg-[#28343e] rounded-md p-[0.5rem]  border-b-[1px] text-[#eaf2f9] "
                />
                <span onClick={()=>{
                    setshowpassword((prev)=>!prev)
                }}
                className=" absolute right-3 top-[35px]">
                    {showpassword ?   (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                </span>
                <p className=" text-xs mt-2 text-blue-400 max-w-max ml-auto">Forgot Password</p>

                {/* <Link to="#">Forgot Password</Link> */}
                {/* <Link to="#">Forgot Password</Link> */}
                    
            </label>

            <button className=" bg-yellow-300 rounded-md font-medium px-[12px] py-[8px] mt-5 ">Sign In</button>
        </form>
    )
}

export  default LoginForm;