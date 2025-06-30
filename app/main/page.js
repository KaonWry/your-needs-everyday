"use client";
import RandomFontText from "../components/randomfonts";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

const Main_Content = () => {
  const searchParams = useSearchParams();
  const inputValue = searchParams.get("name") || "";
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div
          className={`sections-content transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
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
      <div className="bg-gradient-to-b from-[#F5ECD5] to-[#222222] h-[200vh] w-full"></div>
      <section className="sections h-[200vh] bg-[#222222] text-white">
        <div className="sections-content">
          <RandomFontText text={`Hidupmu`} />
        </div>
      </section>
      {/* sama ini juga hapus klo g butuh, cuma gw suka aja si klo ada gradient */}
      <div className="bg-gradient-to-b from-[#222222] to-[#F5ECD5] h-[200vh] w-full"></div>
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
          <div className="pt-10">
            <Image src="/1.png" alt="You" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Kamu adalah cangkir yang sebenarnya sudah terisi air</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Tapi dari mana airnya?</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Tapi dari mana airnya?</p>
        </div>
      </section>
      <section className="sections h-[150vh] bg-[#F5ECD5]">
        <div className="sections-content">
          <p>Dari keran Tuhan yang tak pernah habis mengalir!!</p>
          <p>Lihat ini !!</p>
          <div className="pt-10">
            <Image src="/2.png" alt="You" width={1000} height={1000} />
          </div>
          <p>
            Tuhan selalu memenuhi kita dengan hal yang baik dan terus melimpah
            pada diri kita
          </p>
        </div>
      </section>
      <div className=" h-[200vh] h-screen bg-gradient-to-b from-[#F5ECD5] to-[#A4B465] w-full"></div>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <p>Tapi ... </p>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <p>Kita mulai menjauh dari Tuhan</p>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <p>Kita mulai mengisi diri kita dengan hal yang tidak baik</p>
        </div>
      {/* /*ini bagian taruh gambar yang kekayaan yang 5.png */ }
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <p>
            kekayaan, hawa nafsu, kesenangan duniawi, dan hal-hal yang tidak
            baik lainnya
          </p>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <p>
            Bahkan, Tuhan yang sedang disamping kita saja kita abaikan
          </p>
        {/* Ini bagian foto yang berkelahi */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main_Content;
