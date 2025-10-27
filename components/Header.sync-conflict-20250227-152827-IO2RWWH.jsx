import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi"; // Import de l'icône téléphone

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [showText, setShowText] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 text-white text-sm 
                     bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 
                 bg-gradient-lg animate-watery">
        <p className="font-bold">Zone Industrielle ENMTP – Ain Smara</p>
        <div className="flex items-center space-x-6">
          <p className="font-bold">+213660640532</p>
          <p className="font-bold">contact@ctime.dz</p>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white shadow-md border-b border-gray-300 font-montserrat relative">
        <div className="max-w-screen-xl flex items-center mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo CTIME" width={80} height={60} className="h-10 opacity-0 animate-slideInRight" />
          </Link>
          <div className="flex-grow text-center text-gray-700 text-sm font-bold">Votre Compagne vers la qualité</div>
          
          {/* Navbar Menu */}
          <div className="flex space-x-6 items-center" ref={dropdownRef}>
            <ul className="hidden md:flex space-x-6 font-medium">
              {["accueil", "services", "formations", "actualites", "a-propos"].map((item) => (
                <li key={item} className="relative">
                  {item === "a-propos" ? (
                  <Link href="/cart">
                  <button className="py-2 px-4 text-gray-800 font-semibold rounded-lg hover:text-white hover:bg-red-700 transition-all">
                    À Propos de Nous
                  </button>
                </Link>
                
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(item)}
                        className="py-2 px-4 text-gray-800 font-semibold rounded-lg hover:text-white hover:bg-red-700 transition-all"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </button>
                      {openDropdown === item && (
                        <div className="absolute left-0 top-full z-50 bg-white shadow-lg rounded-lg mt-2 w-48">
                          <ul className="py-2 text-gray-800 text-sm">
                            {item === "accueil" && (
                              <>
                               
                                <li><Link href="/missions" className="block px-4 py-2 hover:bg-gray-200">Missions et visions</Link></li>
                                <li><Link href="/quality-policy" className="block px-4 py-2 hover:bg-gray-200">Politique Qualité</Link></li>
                              </>
                            )}
                            {item === "services" && (
                              <>
                                <li><Link href="/services/labo2" className="block px-4 py-2 hover:bg-gray-200">Laboratoire d'Essais Mécaniques</Link></li>
                                <li><Link href="/services/labo1" className="block px-4 py-2 hover:bg-gray-200">Laboratoire de Métrologie</Link></li>
                                <li><Link href="/Retro" className="block px-4 py-2 hover:bg-gray-200">Rétroconception</Link></li>
                              </>
                            )}
                            {item === "formations" && (
                              <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-200">Programmes de Formation</Link></li>
                            )}
                            {item === "actualites" && (
                              <li><Link href="/Actualites" className="block px-4 py-2 hover:bg-gray-200">Événements</Link></li>
                            )}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Bouton flottant animé "Nous Contacter" */}
   

<motion.div
  className="fixed bottom-16 right-6 flex items-center justify-end z-50"
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  <Link href="/contact">
    <motion.button
      className="bg-[#C04040] text-white py-4 px-5 rounded-full shadow-lg flex items-center gap-2 
      hover:bg-[#ff4d4d] transition-all duration-300 ease-in-out relative"
      initial={{ width: "50px" }}
      animate={{ width: hover ? "180px" : "50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Icône de téléphone en blanc */}
      <motion.span
        className="flex items-center justify-center w-8 h-8"
        animate={{ left: hover ? "12px" : "50%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transform: hover ? "none" : "translateX(-50%)" }}
      >
        <FiPhone className="text-white text-xl" /> {/* Icône en blanc */}
      </motion.span>

      {/* Texte qui apparaît progressivement */}
      <span
        className={`overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out ${
          hover ? "opacity-100 ml-8" : "opacity-0 w-0"
        }`}
      >
        Nous Contacter
      </span>
    </motion.button>
  </Link>
</motion.div>



    </>
  );
}
