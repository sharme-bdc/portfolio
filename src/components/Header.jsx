import React from "react";

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="space-x-4 text-sm md:text-base">
            <a href="#" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </nav>
    </header>
  );
}