'use client';

import Image from "next/image";

export default function Home() {
  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };
  
  return (
      <div>
      <div className="flex flex-col mt-[50px]">
      <img src="https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863" className="circle avatar mb-2"></img>
      <h1 className="text-3xl font-bold text-center mt-2 mb-2">Alexandra Shvydchenko</h1>
      <p className="text-center mb-10">Memento Mori. 67 67 67 67 💀</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
      <button onClick={() => handleLinkClick('https://instagram.com')} className="w-200 px-6 py-3 bg-white shadow-md content-center text-black rounded-xl hover:bg-blue-600 transition">
        <p className="font-bold">Instagram</p>
      </button>
      <button onClick={() => handleLinkClick('https://instagram.com')} className="w-200 px-6 py-3 bg-white shadow-md content-center text-black rounded-xl hover:bg-blue-600 transition">
        <p className="font-bold">Twitter</p>
      </button>
      <button onClick={() => handleLinkClick('https://instagram.com')} className="w-200 px-6 py-3 bg-white shadow-md content-center text-black rounded-xl hover:bg-blue-600 transition">
        <p className="font-bold">Etsy</p>
      </button>
      </div>
      <div className="flex space-x-0 justify-center mt-10">
      <img src="instagram_logo.png" className="w-15 h-15 hover:opacity-50 transition-opacity duration-300" onClick={() => handleLinkClick('https://instagram.com')}></img>
      <img src="instagram_logo.png" className="w-15 h-15 hover:opacity-50 transition-opacity duration-300" onClick={() => handleLinkClick('https://instagram.com')}></img>
      <img src="instagram_logo.png" className="w-15 h-15 hover:opacity-50 transition-opacity duration-300" onClick={() => handleLinkClick('https://instagram.com')}></img>
      </div>
      </div>
  );
}
