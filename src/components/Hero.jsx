import React from "react";

export default function Hero() {
  return (
    <div id="hero" className="text-center py-20 px-20 md:px-16 justify-center max-auto items-center gap-4">
      <img src="/src/Robyn O'Neale.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full mb-4" />
      <h1 className="md:text-5xl font-semibold sm:text-md">Hi, I'm Sharme AKter</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Now working at Softvence Agency as a Sr. Team Leader in WordPress Team for 4+ years. I've completed BSC in Computer Science and Engineering at Northern University Bangladesh.</p>
      <a href="#about"><i className="fa fa-angle-double-down text-[30px] p-7"></i></a>
    </div>
  );
}
