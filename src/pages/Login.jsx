import React from "react";
// import LoginForm from "../Components/LoginForm";
import Templates from "../Components/Templates"
import loginImg from "../assets/login.png"

const Login=({setisloggedin})=>{
    return(
       <Templates 
            title="Welcome Back"
            description1='Build skill for today, tomorrow, and beyond'
            description2="Educate to future-proof your carrie"
            image={loginImg}
            formtype="login"
            setisloggedin={setisloggedin}
       />
    )
}

export default Login;