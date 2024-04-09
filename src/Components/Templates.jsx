import React from "react";
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";


const templates=({title,description1,description2,image,formtype,setisloggedin})=>{
    return(
        <div className=" flex  w-11/12 max-w-[1160px]  py-12 mx-auto justify-between gap-y-0">
            <div className=" w-11/12 max-w-[450px]">
                <h1 className=" text-[#dcdae9] font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className=" text-[1.125rem] leading-[1.625rem] mt-4 text-[#d4d3d3]"> 
                    <span className=" text-[#d4d3d3]">{description1}</span><br></br>
                    <span className=" text-blue-300 italic">{description2}</span>
                </p>

                {
                    formtype === "signup" ? (<SignupForm setisloggedin={setisloggedin}></SignupForm>):
                    (<LoginForm setisloggedin={setisloggedin}></LoginForm>)
                }
            
                <div className=" flex w-full items-center my-4 gap-x-2">
                    <div className=" h-[1px] bg-[#3c4d5d] w-full"></div>
                    <p className=" text-[#3c4d5d]">OR</p>
                    <div className=" h-[1px] bg-[#3c4d5d] w-full"></div>
                </div>
            
                <button className=" w-full flex justify-center items-center rounded-[8px] font-medium text-[#cbd6e0]
                bordeer border-[0.5px] border-[#d7dfe7] px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle></FcGoogle>
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div className=" relative w-11/12 max-w-[450px]">
                <img src={frameImage} alt="pattern"
                width={558} height={504} loading="lazy"/>
                <img src={image} alt="students" width={558} height={498} loading="lazy" 
                className=" absolute -top-4 right-4"/>
            </div>
        </div>
    )
}

export default templates;