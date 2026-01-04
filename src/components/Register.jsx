import React from "react"
import kidsImage from "../assets/kids.png";
import Login from "../assets/Login.png";
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

function Register() {
      const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">

        {/* Image Section */}
        <div className="hidden md:flex items-center justify-center p-6">
            <img
                src={kidsImage}
                alt="Kids illustration"
                className="w-full max-w-sm object-contain"
            />
            </div>


        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
               Welcome to lorem..!
          </h1>
          <img src={Login} alt="Login"/>
          <p className="text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <form className="space-y-4">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <lable>User name</lable>
            <input
              type="text"
              placeholder="User name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
             <label className="block mb-1 font-medium">Password</label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

           <div className="flex justify-end">
                <button className="bg-[#49BBBD] text-white px-6 py-2 rounded-lg hover:bg-[#3da7a9] transition">
                    Register
                </button>
                </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Register
