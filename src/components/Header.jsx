import React from "react";

export default function Header() {
  return (
    <header>
        <div className="py-6 px-4 md:px-16 flex justify-between items-center max-auto w-full"> 
            <div>
                <h1 className="text-2xl font-bold">Sharme Akter</h1>
            </div>
            <div>
                <nav className="space-x-4 text-sm md:text-base">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#about" className="hover:underline">Experience</a>
                    <a href="#projects" className="hover:underline">Project</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </div>
                
            <div className="flex justify-between items-end">
                <button>Resume</button>
                <button>Hire Me</button>
            </div>
        </div>
            
    </header>
  );
}