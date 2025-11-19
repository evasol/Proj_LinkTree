'use client';

import Image from "next/image";
import ParticleBackground from "../components/ParticleBackground"

export default function Home() {
  
  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };
  
  return (
      <div>
        <ParticleBackground className="absolute inset-0 -z-10"/>
      <div className="flex flex-col mt-[20px] lg:mt-[10px]">
      <img src="profile.png" className="avatar w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"></img>
      <h1 className="text-4xl lg:text-7xl -mt-3 lg:-mt-8 text-center text-4xl" style={{color:'#FFEDD4', fontFamily: 'lexiel_art'}}>CUTE ANIMAL & FAN ART</h1>
      <p className="text-xl lg:text-3xl -mt-2 text-center mb-8 " style={{color:'#FFEDD4', fontFamily: 'intrepid-reg'}}>Keychains | Stickers | Posters</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-7 mt-7 lg:mt-0 lg:gap-7">
      <button onClick={() => handleLinkClick('https://www.instagram.com/lexiel_art')} className="w-75 lg:w-110 px-6 py-3 shadow-md content-center bg-[#B58843] rounded-full hover:bg-[#D4A45B] transition">
        <p className="text-4xl drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,1)]" style={{color:'#FFEDD4', fontFamily: 'lexiel_art'}}>Instagram</p>
      </button>
      <button onClick={() => handleLinkClick('https://www.patreon.com/cw/lexiel_art')} className="w-75 lg:w-110 px-6 py-3 shadow-md content-center bg-[#B58843] rounded-full hover:bg-[#D4A45B] transition">
        <p className="text-4xl drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,1)]" style={{color:'#FFEDD4', fontFamily: 'lexiel_art'}}>Patreon</p>
      </button>
      <button onClick={() => handleLinkClick('https://www.etsy.com/shop/WhimsyInkIE')} className="w-75 lg:w-110 px-6 py-3 shadow-md content-center bg-[#B58843] rounded-full hover:bg-[#D4A45B] transition">
        <p className="text-4xl drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,1)]" style={{color:'#FFEDD4', fontFamily: 'lexiel_art'}}>Etsy</p>
      </button>
      </div>
      {/*
      <div className="flex space-x-0 justify-center mt-28 lg:mt-10">
      <img src="instagram_logo.png" className="w-15 h-15 hover:opacity-50 transition-opacity duration-300" onClick={() => handleLinkClick('https://instagram.com')}></img>
      <img src="instagram_logo.png" className="w-15 h-15 hover:opacity-50 transition-opacity duration-300" onClick={() => handleLinkClick('https://instagram.com')}></img>
      <img src="instagram_logo.png" className="w-15 h-15 hover:opacity-50 transition-opacity duration-300" onClick={() => handleLinkClick('https://instagram.com')}></img>
      </div>
      */}
      </div>
  );
}
