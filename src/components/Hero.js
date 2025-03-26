import React from "react";

const Hero = () => {
    return (
        <section className="text-center py-10 px-4 md:py-20">
            <h1 className="text-3xl md:text-5xl font-bold">
                Give the best shot at your <br />
                <span className="text-red-500">Dream University</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl">
                Get expert help, personalized guidance, and all the support <br />
                you need to <b>increase your chances of success with Ambitio Elite.</b>
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-md hover:bg-gray-900">
                10x your chances with Ambitio
            </button>
        </section>
    );
};

export default Hero;
