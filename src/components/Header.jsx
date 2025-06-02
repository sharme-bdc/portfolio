import React from "react";

export default function Header() {
  return (
    <header>
        <div className="py-6 px-4 md:px-16 flex flex-col md:flex-row sm:w-full w-full justify-between overflow-hidden items-center gap-4"> 
            <div>
                <h1 className="text-2xl font-bold">Sharme Akter</h1>
            </div>
            <div>
                <nav className="space-x-4 text-sm md:text-base">
                    <a href="#hero" className="hover:underline">About</a>
                    <a href="#about" className="hover:underline">Experience</a>
                    <a href="#projects" className="hover:underline">Project</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </div>
                
            <div className="flex justify-between items-end gap-4">
                <a  href="/src/Sharme_Akter_CV.doc" target="_blank"><button className="border-gray-700 border px-4 py-2 bg-gray-100 rounded">Resume</button></a>
                <a href="#contact"><button className="border-gray-700 border px-4 py-2 bg-gray-100 rounded">Hire Me</button></a>
            </div>
        </div>
            
    </header>
  );
}