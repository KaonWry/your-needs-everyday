"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import Login from "./loginpage";

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Login />
    </main>
  );
}
