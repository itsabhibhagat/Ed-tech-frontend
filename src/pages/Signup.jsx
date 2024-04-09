import React from "react";
import Templates from "../Components/Templates"
import signupImg from "../assets/signup.png"

const Signup=({setisloggedin})=>{
    return(
        <Templates 
            title="Join the millions learning to code with StudyNotion for free"
            description1='Build skill for today, tomorrow, and beyond'
            description2="Educate to future-proof your carrie"
            image={signupImg}
            formtype="signup"
            setisloggedin={setisloggedin}
        />
    )
}

export default Signup;