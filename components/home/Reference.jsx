'use client';
import { useState } from 'react';

export default function NosClients() {
  const logos = [
    "/sn.png",
    "/pt.png",
    "/tassili.png",
    "/somemi.png",
    "/chaoui.png",
    "/Euromoteur.png",
  ];

  return (
    <section className="flex justify-center py-20 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-6xl w-full px-6 sm:px-10 py-16 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" />

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-16 tracking-wide z-10 relative">
          Nos Clients
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 z-10 relative">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="aspect-square w-full max-w-[120px] mx-auto bg-white/5 backdrop-blur-md rounded-2xl grid place-items-center p-4 shadow-md hover:shadow-purple-400/40 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
