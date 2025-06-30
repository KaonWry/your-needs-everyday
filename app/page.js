"use client";
import { useState } from "react";
import Image from "next/image";
import RandomFontText from "./components/randomfonts";
import Footer from "./components/footer";
import "./globals.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>
            Kita boleh kenalan dulu gak? <br />
            Tulis namamu di samping kanan ini dong{" "}
            <input
              type="text"
              className="text-2xl border-b cursor-pointer"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>
            Hai <span className="font-bold">{inputValue}</span>
          </p>
          <p>apa kabar?</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Apakah kamu merasa ada yang kurang dalam hidupmu?</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Atau kamu merasa ada yang salah dalam</p>
        </div>
      </section>
      {/* klo g butuh gradient ini hapus aja */}
      <div 
        className="bg-gradient-to-b from-[#F5ECD5] to-[#222222] h-[200vh] w-full"
      ></div>
      <section className="sections h-[200vh] bg-[#222222] text-white">
        <div className="sections-content">
          <RandomFontText text={`Hidupmu`} />
        </div>
      </section>
      {/* sama ini juga hapus klo g butuh, cuma gw suka aja si klo ada gradient */}
      <div 
        className="bg-gradient-to-b from-[#222222] to-[#F5ECD5] h-[200vh] w-full"
      ></div>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Di sini, kamu akan mempelajari sesuatu yang baru</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Sesuatu yang akan kamu syukuri</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Sesuatu yang tidak akan kamu sesali</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Pertama, ini adalah kamu</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <Image src="/1.png" alt="You" width={500} height={500} />
        </div>
        </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Kamu adalah cangkir yang sebenarnya sudah terisi air</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Tapi dari mana?</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
