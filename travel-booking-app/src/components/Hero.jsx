import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVideo.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-screen object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40"></div>

      <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center text-center p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% locations Worldwide</h2>
        <form className="flex justify-between item-center mx-auto p-1 border w-full max-w-[700px] items-center rounded-md bg-gray-100/90 text-black">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none font-[poppins]"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon "
                style={{ color: "white" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
