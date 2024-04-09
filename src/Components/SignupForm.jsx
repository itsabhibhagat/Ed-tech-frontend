import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from  'react-icons/ai'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm=({setisloggedin})=>{


    const navigate = useNavigate();

    const [formData, setformData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword: ""
    })

    const [showpassword,setshowpassword]=useState(false);
    const [accounttype,setaccounttype]=useState("Student");

    function changehandler(event){
        setformData({...formData,[event.target.name] : event.target.value})
    }

    function submithandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password does not match");
            return;
        }
        setisloggedin(true);
        toast.success("Account is created");
        
        navigate('/dashboard')
    }

    return(
        <div className="">
            <div className=" flex flex-row  border-[0px] rounded-full p-1 gap-x-2 my-6 max-w-max bg-[#25323c] text-white ">
                <button className={`${accounttype==="Student" ? " bg-[#101d28] text-white p-2 rounded-full":
                    " bg-transparent text-[#5b6973] p-2 transition-all duration-200"}`}
                    onClick={()=>setaccounttype("Student")} >Student
                </button>
                <button className={`${accounttype==="Instructor" ? " bg-[#101d28] text-white p-2 rounded-full"
                    :" bg-transparent text-[#5b6973] p-2 transition-all duration-200"}`}
                    onClick={()=>setaccounttype("Instructor")}>Instructor
                </button>
            </div>
            <form onSubmit={submithandler}  className=" flex flex-col w-full gap-y-4 mt-6">
                <div className=" flex flex-row gap-x-4 ">
                    <label className=" w-full">
                        <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">First Name<sup className=" text-red-500">*</sup></p> 
                        <input required
                            type="text" 
                            name="firstname" 
                            onChange={changehandler}
                            placeholder="Enter your First name"
                            value={formData.firstname} //value ko track kr rhe hai
                            className=" w-full bg-[#28343e] rounded-md p-[0.5rem]  border-b-[1px] text-[#eaf2f9] "
                        />
                    </label>
                    <label className=" w-full">
                        <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">Last Name<sup className=" text-red-500">*</sup></p> 
                        <input required
                            type="text" 
                            name="lastname" 
                            onChange={changehandler}
                            placeholder="Enter your Last name"
                            value={formData.lastname}
                            className=" w-full bg-[#28343e] rounded-md p-[0.5rem]  border-b-[1px] text-[#eaf2f9] "
                        />
                    </label>
                </div>
                
                <label className=" w-full">
                   <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">Email<sup className=" text-red-500">*</sup></p> 
                   <input required
                        type="email" 
                        name="email" 
                        onChange={changehandler}
                        placeholder="Enter your email"
                        value={formData.email}
                        className=" w-full bg-[#28343e] rounded-md p-[0.5rem]  border-b-[1px] text-[#eaf2f9] "
                    />
                </label>
                <div className=" flex flex-row gap-x-4">
                    <label className=" w-full relative">
                    <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">Create Password<sup className=" text-red-500">*</sup></p> 
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
                            className=" absolute right-3 top-[35px]" >
                            {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                    <label className=" w-full relative">
                    <p className=" text-white text-[0.875rem] mb-1 leading-[1.375rem]">Confirm Password<sup className=" text-red-500">*</sup></p> 
                        <input required 
                            name="confirmpassword"
                            type={showpassword ? ("text"):("password")} 
                            value={formData.confirmpassword} 
                            onChange={changehandler} 
                            placeholder="Enter password"
                            className=" w-full bg-[#28343e] rounded-md p-[0.5rem]  border-b-[1px] text-[#eaf2f9] "
                        />
                        <span onClick={()=>{
                                setshowpassword((prev)=>!prev)
                            }}
                             className=" absolute right-3 top-[35px]">
                            {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>
                <button className=" bg-yellow-300 rounded-md font-medium px-[12px] py-[8px] mt-5 ">
                    Create Account
                </button>
                

            </form>
        </div>
    )
}

export default SignupForm;