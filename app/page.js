import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Section1 />
      <div className="h-[10vh] bg-gradient-to-b from-amber-400 to-emerald-300"></div>
      <Section2 />
      <div className="h-[10vh] bg-gradient-to-b from-emerald-300 to-fuchsia-400"></div>
      <Section3 />
    </>
  );
}
