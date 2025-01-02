import React from "react";
import "./LandingPage.css";

const LandingPage = ({toggleOverlay}) => {
  return (
    <>
        <div className="relative h-screen bg-cover bg-center bg-people">
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>
            <div className="relative flex h-full items-center justify-around">
                {/* Left Section */}
                <div className="flex flex-col items-center justify-center text-center text-white space-y-4 w-1/3 h-2/3">
                    <h1 className="text-4xl font-bold">Conference Reservation System</h1>
                    <p className="text-lg">Plan your next major event with us!</p>
                    <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition" onClick={toggleOverlay}>
                    Get Started
                    </button>
                </div>
                {/* Right Section */}
                <div className="flex flex-col items-center justify-center w-1/2 h-2/3  space-y-4">
                    <p className="text-white font-bold text-justify">
                        Welcome to <span className="text-yellow-500">EventEase</span>! Our mission is to provide transparent pricing and effortless planning for your next conference or event. With our system, you can focus on what matters while we handle the rest.  
                    </p>
                    <p className="text-white font-bold text-justify">
                        At <span className="text-yellow-500">EventEase</span>, we believe planning an event should be exciting, not overwhelming. That’s why we’ve built a platform that prioritizes simplicity and flexibility, giving you the tools to create the perfect gathering without the stress. Whether it’s a small business meeting or a large-scale conference, we’ve got you covered.  
                    </p>
                    <p className="text-white font-bold text-justify">
                        Trust us to bring your vision to life with unparalleled transparency and support every step of the way. From detailed budget breakdowns to intuitive scheduling tools, <span className="text-yellow-500">EventEase</span> ensures you’re in control. Let us help you turn your ideas into unforgettable experiences!  
                    </p>

                </div>
            </div>
        </div>
    </>
  );
};

export default LandingPage;
