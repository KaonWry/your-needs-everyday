// components/TypewriterOnScroll.js
"use client";
import { useState, useEffect, useRef } from 'react';

// Komponen ini akan menerima teks sebagai 'children'
const TypewriterOnScroll = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen masuk ke viewport, atur isVisible menjadi true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Hentikan pengamatan setelah animasi dipicu sekali
          // Hapus baris ini jika Anda ingin animasi berulang setiap kali scroll
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.5 // Animasi terpicu saat 50% elemen terlihat
      }
    );

    // Mulai mengamati elemen target
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Fungsi cleanup untuk menghentikan observer saat komponen dilepas
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // useEffect ini hanya berjalan sekali saat komponen dimuat

  return (
    <p 
      ref={targetRef} 
      // Terapkan kelas 'typewriter' hanya saat isVisible true
      // Gabungkan dengan className lain yang mungkin diberikan
      className={`${className} ${isVisible ? 'typewriter' : 'opacity-0'}`}
    >
      {children}
    </p>
  );
};

export default TypewriterOnScroll;
