import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar"
import Home from  "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const [isloggedin,setisloggedin]=useState(false);

  return (
    <div className=" w-screen h-[830px] bg-[#0c1823] flex flex-col">
      <Navbar isloggedin={isloggedin} setisloggedin={setisloggedin}/>
      <Routes>
        <Route path="/home" element={<Home isloggedin={isloggedin}/>}/>
        <Route path="/login" element={<Login setisloggedin={setisloggedin}/>}/>
        <Route path="/signup" element={<Signup setisloggedin={setisloggedin}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isloggedin={isloggedin}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
