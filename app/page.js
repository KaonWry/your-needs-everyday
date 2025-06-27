"use client";
import { useState } from "react";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import SectionInput from "./components/sectionInput";
import SectionOutput from "./components/sectionOutput";
import Footer from "./components/footer";
import "./globals.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const sections = [
    {
      bg: "bg-amber-300",
      from: "from-amber-300",
      to: "to-emerald-300",
      component: <Section1 />,
    },
    {
      bg: "bg-emerald-300",
      from: "from-emerald-300",
      to: "to-blue-300",
      component: <Section2 />,
    },
    {
      component: <SectionInput inputValue={inputValue} setInputValue={setInputValue} />,
      bg: "bg-blue-300",
      from: "from-blue-300",
      to: "to-gray-300",
    },
    {
      component : <SectionOutput inputValue={inputValue} />,
      bg: "bg-gray-300",
      from: "from-gray-300",
      to: "to-fuchsia-300",
    },
    { bg: "bg-fuchsia-300", component: <Section3 /> },
  ];

}
