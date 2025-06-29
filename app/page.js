"use client";
import { useState } from "react";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import SectionInput from "./components/sectionInput";
import SectionOutput from "./components/sectionOutput";
import Footer from "./components/footer";
import "./globals.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const sections = [
    {
      component: <Section1 inputValue={inputValue} />,
      bg: "bg-[#F5ECD5]-300",
    },
    {
      component: <Section2 />,
      bg: "bg-[#F5ECD5]-300",
    },
    {
      component: <Section3 />,
      bg: "bg-fuchsia-300",
    },
    {
      component: <Section4 />,
      bg: "bg-maroon-300",
    },
    {
      component: (
        <SectionInput inputValue={inputValue} setInputValue={setInputValue} />
      ),
      bg: "bg-blue-300",
    },
    {
      component: <SectionOutput inputValue={inputValue} />,
      bg: "bg-gray-300",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        {sections.map((section, index) => (
          <section key={index}>
            <div className={`${section.bg} font-cabin`}>{section.component}</div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
