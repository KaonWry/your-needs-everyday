import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./wave.css";    

const Login = () => {
    const [input, setInput] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();
    useEffect(() => {
    setFadeIn(true);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/main?name=${encodeURIComponent(input)}`);
    }
  };
return (
      <section className="sections w-screen h-screen bg-[#640D14] text-[#FDFAF6] flex flex-col items-center justify-start pt-16">
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
        <div
          className={`sections-content transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          >
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-top mb-4">
              Your Needs Everyday
            </h1>
            <p className="text-2xl text-center">
              Masukkan nama sebelum mengakses websitenya 😁
            </p>
            <div className="mt-4" />
            <div className="caution">
              <p>*Diharapkan menggunakan laptop atau PC untuk pengalaman terbaik</p>
            </div>
            <input
              type="text"
              className="border border-white-xl bg-white text-lg text-black rounded-3xl px-4 py-1"
              value={input}
              placeholder="Masukkan namamu"
              onChange={(e) => setInput(e.target.value)}
              />
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="relative overflow-hidden px-4 py-2 bg-green-500 text-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-base transition-colors duration-500 group custom-animated-btn"
                >
                <span className="relative z-10">Let&apos;s Explore My Needs</span>
                <span className="animated-bg" />
      
              </button>
            </div>
          </form>
        </div>
      </section>
);
}
export default Login;