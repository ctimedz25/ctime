"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const EtalonnagePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//static.anyflip.com/plugin/LightBox/js/anyflip-light-box-api-min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-700 to-gray-900 min-h-screen flex flex-col items-center justify-start text-center p-8 pt-20 overflow-hidden">
      {/* Title */}
<motion.h1
  initial={{ opacity: 0, y: -25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-lg"
>
  <span className="text-red-400">CTIME </span> for{" "}
  <span className="font-[cursive] italic text-5xl md:text-5xl">
    <span className="text-red-400">Metal </span>
    <span className="text-white">&amp;</span>{" "}
    <span className="text-red-400">Mechanics</span>
  </span>
</motion.h1>



      {/* Magazines Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex flex-wrap justify-center gap-10"
      >
        {/* ---- FRENCH ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative group transition-transform duration-500 ease-in-out hover:scale-105"
        >
          {/* Eye Icon */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white/80 opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Eye className="w-8 h-8 text-red-400 drop-shadow-lg" />
          </motion.div>

          {/* Card + Zoom Image */}
          <a
            data-rel="fh5-light-box-demo"
            data-width="700"
            data-height="425"
            data-title="Magazine CTIME Français"
            data-href="https://online.anyflip.com/gmcxh/uyyy/index.html"
            href="https://online.anyflip.com/gmcxh/uyyy/index.html"
            className="block overflow-hidden rounded-xl shadow-2xl border-4 border-white/20"
          >
            <img
              src="/fr.jpg"
              alt="Magazine CTIME Français"
              className="object-cover w-[350px] h-auto transform transition-transform duration-500 group-hover:scale-110"
            />
          </a>

          <p className="text-white mt-3 text-base font-semibold tracking-wide">
            First Edition
          </p>
        </motion.div>

        {/* ---- ENGLISH ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="relative group transition-transform duration-500 ease-in-out hover:scale-105"
        >
          {/* Eye Icon */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white/80 opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Eye className="w-8 h-8 text-red-400 drop-shadow-lg" />
          </motion.div>

          {/* Card + Zoom Image */}
          <a
            data-rel="fh5-light-box-demo"
            data-width="700"
            data-height="425"
            data-title="Magazine CTIME English"
            data-href="https://online.anyflip.com/gmcxh/lexc/index.html"
            href="https://online.anyflip.com/gmcxh/bpfq/index.html"
            className="block overflow-hidden rounded-xl shadow-2xl border-4 border-white/20"
          >
            <img
              src="/second_img.png"
              alt="Magazine CTIME English"
              className="object-cover w-[350px] h-auto transform transition-transform duration-500 group-hover:scale-110"
            />
          </a>

          <p className="text-white mt-3 text-base font-semibold tracking-wide">
            Second Edition
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EtalonnagePage;
