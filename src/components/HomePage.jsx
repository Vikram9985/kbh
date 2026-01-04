import React from "react"
import Hr from "../assets/Hr.png";
import frame from "../assets/Frame 55.png";
import services from "../assets/ourservices.png";
import All from "../assets/All-in-one.png";
import Whatis from "../assets/What Is TOTC.png";
import You from "../assets/You Can Do With TOTC.png";
import Features from "../assets/Our Features.png";
import Course from "../assets/Explore Course.png";
import Testimonials from "../assets/Testimonials.png";
import Lastest from "../assets/Lastest.png";
import footer from "../assets/Footer.png";

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full p-8">

        {/* Image with background color */}
        <div className="bg-[#49BBBD] rounded-lg p-6 mb-6">
          <img
            src={Hr}
            alt="Home"
            className="w-full object-contain"
          />
        </div>
        <div className=" rounded-lg  mb-6">
          <img
            src={frame}
            alt="frame"
            className="w-full object-contain"
          />
        </div>
        <div className=" rounded-lg  mb-6">
          <img
            src={services}
            alt="services"
            className="w-full object-contain"
          />
        </div>

        <div className=" rounded-lg  mb-6">
          <img
            src={All}
            alt="All In one"
            className="w-full object-contain"
          />
        </div>

         <div className=" rounded-lg  mb-6">
          <img
            src={Whatis}
            alt="TOTC"
            className="w-full object-contain"
          />
        </div>

        <div className=" rounded-lg  mb-6">
          <img
            src={You}
            alt="TOTC"
            className="w-full object-contain"
          />
        </div>
        <div className=" rounded-lg  mb-6">
          <img
            src={Features}
            alt="TOTC"
            className="w-full object-contain"
          />
        </div>
        <div className=" rounded-lg  mb-6">
          <img
            src={Course}
            alt="TOTC"
            className="w-full object-contain"
          />
        </div>

        <div className=" rounded-lg  mb-6">
          <img
            src={Testimonials}
            alt="Testimonials"
            className="w-full object-contain"
          />
        </div>
        <div className=" rounded-lg  mb-6">
          <img
            src={Lastest}
            alt="Lastest"
            className="w-full object-contain"
          />
        </div>

        <div className=" rounded-lg  mb-6">
          <img
            src={footer}
            alt="footer"
            className="w-full object-contain"
          />
        </div>
     
      </div>
    </div>
  )
}

export default HomePage
