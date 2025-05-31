import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 md:px-16">
      <img src="/profile.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full mb-4" />
      <h2 className="text-3xl font-semibold">Hi, I'm Sharme AKter</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">A passionate web developer</p>
    </section>
  );
}
