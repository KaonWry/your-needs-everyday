"use client";
import RandomFontText from "../components/randomfonts";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Footer from "../components/footer";
import { useState, useEffect, useRef } from "react";
import "../text.css";
import Navbar from "../components/Navbar";
import TypewriterOnScroll from "../components/typewriter";

const Main_Content = () => {
  const searchParams = useSearchParams();
  const inputValue = searchParams.get("name") || "";
  const [fadeIn, setFadeIn] = useState(false);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setFadeIn(true);
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [volume]);

  // Sync audio volume with state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toogleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  // Volume control handlers
  const handleVolumeUp = () => {
    if (audioRef.current) {
      setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1));
    }
  };

  const handleVolumeDown = () => {
    if (audioRef.current) {
      setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0));
    }
  };


  return (
    <div>
      <Navbar
        isMuted={isMuted}
        toggleMute={toogleMute}
        volume={volume}
        setVolume={setVolume}
      />
      <audio
        ref={audioRef}
        src="/What-A-Beautiful-Name.mp3" // Ganti dengan nama file audio Anda
        loop
        autoPlay
        muted={isMuted}
      >
        Browser Anda tidak mendukung elemen audio.
      </audio>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div
          className={`sections-content transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <TypewriterOnScroll>
            Hai <span className="font-bold">{inputValue}</span>
          </TypewriterOnScroll>
          <TypewriterOnScroll>apa kabar?</TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Apakah kamu merasa ada yang kurang dalam hidupmu?
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Atau kamu merasa ada yang salah dalam
          </TypewriterOnScroll>
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
          <TypewriterOnScroll>
            Di sini, kamu akan mempelajari sesuatu yang baru
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Sesuatu yang akan kamu syukuri
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Sesuatu yang tidak akan kamu sesali
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>Pertama, ini adalah kamu</TypewriterOnScroll>
          <div className="pt-10">
            <Image src="/1.png" alt="You" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Kamu adalah cangkir yang sebenarnya sudah terisi air
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>Tapi dari mana airnya?</TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-[150vh] bg-[#F5ECD5]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Dari keran Tuhan yang tak pernah habis mengalir!!
          </TypewriterOnScroll>
          <TypewriterOnScroll>Lihat ini !!</TypewriterOnScroll>
          <div className="pt-10">
            <Image src="/2.png" alt="You" width={1000} height={1000} />
          </div>
          <TypewriterOnScroll>
            Tuhan selalu memenuhi kita dengan hal yang baik dan terus melimpah
            pada diri kita
          </TypewriterOnScroll>
        </div>
      </section>
      <div className="h-screen bg-gradient-to-b from-[#F5ECD5] to-[#A4B465] w-full"></div>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <TypewriterOnScroll>Tapi ... </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <TypewriterOnScroll>Kita mulai menjauh dari Tuhan</TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Kita mulai mengisi diri kita dengan hal yang tidak baik
          </TypewriterOnScroll>
        </div>
      </section>
      {/* /*ini bagian taruh gambar yang kekayaan yang 5.png */}
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <Image src="/5.png" alt="You" width={800} height={800} />
          <TypewriterOnScroll>
            kekayaan, hawa nafsu, kesenangan duniawi, dan hal-hal yang tidak
            baik lainnya
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <Image src="/3.png" alt="You" width={500} height={500} />
          <TypewriterOnScroll>
            Bahkan, kita sendiri yang tidak mau menerima air tersebut
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Semakin lama, kita semakin menjauh dari Tuhan
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#A4B465]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Hingga, kita merasa tidak ada ...
          </TypewriterOnScroll>
        </div>
      </section>
      <div className="h-[200vh]  bg-gradient-to-b from-[#A4B465] to-[#626F47] w-full"></div>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content">
          <div className="glowtext">
            <h1>Tuhan</h1>
          </div>
        </div>
      </section>
      <div className="h-[200vh]  bg-[#626F47] w-full"></div>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Itulah dosa kita, yang menjadikan kita jauh dari Tuhan
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Keran yang mengalir itu sekarang hanya pajangan yang tertutup oleh
            pagar <strong>DOSA</strong> kita
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content">
          <TypewriterOnScroll>Hilang, tidak ada</TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content">
          <TypewriterOnScroll>
            Kita semua jatuh dalam <strong>Kebinasaan</strong>
          </TypewriterOnScroll>
        </div>
      </section>
      <div className="h-[200vh]  bg-gradient-to-b from-[#626F47] to-[#222222] w-full"></div>
      <div className="h-[400vh]  bg-[#222222] w-full"></div>
      <section className="sections h-screen bg-[#222222]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Tapi, Tuhan berfirman dalam Alkitab
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#222222]">
        <div className="sections-content text-white">
          <div className="pt-10">
            {" "}
            <Image src="/cross.png" alt="You" width={500} height={500} />
          </div>
          <TypewriterOnScroll>
            <q>
              Karena begitu besar kasih{" "}
              <strong>
                <em>Allah</em>
              </strong>{" "}
              akan dunia ini,
              <br></br> sehingga Ia telah mengaruniakan{" "}
              <strong>
                <em>Anak-Nya</em>
              </strong>{" "}
              yang tunggal,
              <br></br> supaya setiap orang yang percaya kepada-Nya{" "}
              <strong>
                <em>tidak binasa</em>
              </strong>
              ,<br></br>melainkan beroleh hidup yang{" "}
              <strong>
                <em>KEKAL</em>
              </strong>
              .
            </q>
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#222222]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Tuhan mengasihi kita, dan Ia mengutus Yesus untuk menebus dosa kita
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#222222]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Yesus mati di kayu salib untuk menebus <u>dosa</u> kita
          </TypewriterOnScroll>
        </div>
      </section>
      <div className="h-[200vh]  bg-gradient-to-b from-[#222222] to-[#626F47] w-full"></div>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content text-white">
          <div className="flex justify-center">
            <TypewriterOnScroll>
              Artinya, kita sudah diselamatkan...
            </TypewriterOnScroll>
            <TypewriterOnScroll></TypewriterOnScroll>
          </div>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47] flex items-center justify-center">
        <div className="sections-content text-white text-left">
          <div className="flex justify-between items-center">
            <TypewriterOnScroll>...ya, kan?</TypewriterOnScroll>
          </div>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Nyatanya, kita sendiri yang tidak menerima kasih karunia-Nya
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Walaupun kita sudah diselamatkan, jika kita percaya bahwa kita sudah
            diselamatkan,
            <br></br> tapi kita tidak mau menerima kasih karunia-Nya,
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Tuhan tinggal dalam kita, Dia menaruh <strong>keran</strong>{" "}
            kehidupan-Nya dalam diri kita
            <br></br>
            hingga meluap dan keluar
          </TypewriterOnScroll>
          <Image src="/7.png" alt="You" width={500} height={500} />
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Tapi, masih ada beberapa cangkir <br></br>yang tidak mau
            menerima-Nya dan mengakui keselamatan-Nya
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#626F47]">
        <div className="sections-content text-white">
          <Image src="/8.png" alt="You" width={500} height={500} />
          <TypewriterOnScroll>
            Lihat, masih ada beberapa cangkir yang tidak mau menerimanya
          </TypewriterOnScroll>
        </div>
      </section>
      <div className="h-[200vh]  bg-gradient-to-b from-[#626F47] to-[#222222] w-full"></div>
      <section className="sections h-screen bg-[#222222]">
        <div className="sections-content text-white">
          <TypewriterOnScroll>
            Lalu, bagaimana caranya agar kita bisa menerima kasih karunia-Nya?
          </TypewriterOnScroll>
        </div>
      </section>
      <div className="h-[200vh]  bg-gradient-to-b from-[#222222] to-[#FDFAF6] w-full"></div>
      <section className="sections h-screen bg-[#FDFAF6]">
        <div className="sections-content text-black">
          <TypewriterOnScroll>
            Kalau begitu, luangkan waktu sejenak untuk merenungkan
            <br></br>apa yang sudah Tuhan lakukan dalam hidupmu
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#FDFAF6]">
        <div className="sections-content text-black">
          <TypewriterOnScroll>
            Cari tempat ternyamanmu dan mari kita berdoa
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#FDFAF6]">
        <div className="sections-content text-black">
          <TypewriterOnScroll>
            Bapa, terima kasih untuk kasih karunia-Mu
            <br></br>yang selalu mengalir dalam hidupku.
            <br></br>Aku percaya bahwa Engkau adalah Tuhan dan Juruselamatku.
            <br></br>Aku tahu bahwa aku salah dan berdosa 
            <br></br>dan aku butuh Engkau dalam hidupku.
            <br></br>Terima kasih untuk Yesus yang sudah mati di kayu salib 
            <br></br>untuk menebus dosaku.
            <br></br>dan memberikan aku hidup yang kekal.
            <br></br>Terima kasih karena Engkau datang dan hidup dalam diriku
            <br></br>dan mengalir dalam hidupku.
            <br></br>Penuhi aku dengan kasih karunia-Mu, kebaikan-Mu, dan kasih-Mu,
            <br></br>dan biarkan aku menjadi berkat bagi orang lain dan memuliakan nama-Mu.
            <br></br>Aku percaya bahwa Engkau adalah Tuhan dan Juruselamatku.
            <br></br>Dalam nama Yesus, aku berdoa, 
            <br></br><strong>Amin</strong>
          </TypewriterOnScroll>
        </div>
      </section>
      <section className="sections h-screen bg-[#FDFAF6]">
        <div className="sections-content text-black">
          <TypewriterOnScroll>
            Yey, kamu sudah benar dan Yesus tinggal di dalam kamu
          </TypewriterOnScroll>
          <TypewriterOnScroll>
            Dia akan memberi kamu apa yang kamu butuhkan
          </TypewriterOnScroll>
          <TypewriterOnScroll>
            Dia akan mencukupi segala kebutuhanmu
          </TypewriterOnScroll>
          <TypewriterOnScroll>
            Tetap dekat dengan Tuhan, dan biarkan Dia mengalir dalam hidupmu!!
          </TypewriterOnScroll>
          <Image
            src="/6.png"
            alt="You"
            width={500}
            height={500}
            className="mx-auto mt-10"/>
        </div>
      </section>
      <section
        className="sections h-screen bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
        style={{
          opacity:0.8,
          backgroundImage: "url('/the-end.png')",
          backgroundSize: "full",
          backgroundPosition: "center",
        }}
      >
        <div className="sections-content flex items-center justify-center w-full h-full">
          <TypewriterOnScroll>
            <span className="text-white text-4xl font-bold drop-shadow-lg text-center outline-solid outline-offset-2 outline-2 outline-black">
              Sampai jumpa, Tuhan memberkati!
            </span>
          </TypewriterOnScroll>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main_Content;
