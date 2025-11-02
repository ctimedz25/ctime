import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiMail, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  let timeoutId = useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 199);
  };

  const toggleSubmenu = (menu) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-3 text-white text-sm bg-gradient-to-br from-gray-600 to-gray-900">
        <p className="font-bold text-center md:text-left">
          Centre Technique Industriel des{" "}
          <span className="text-[#FF6B6B] font-bold">
            Industries Mécaniques et Transformatrices des Métaux
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-2 md:mt-0">
          <p className="font-bold">0660 64 05 32</p>
          <p className="font-bold">contact@ctime.dz</p>
        </div>
      </header>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md border-b border-gray-300 font-montserrat relative z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={120} height={50} />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-10">
            {["accueil", "services", "actualites"].map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="py-2 px-4 text-gray-800 font-semibold rounded-lg hover:text-white hover:bg-red-700 transition-all">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>

                {/* Desktop Dropdown */}
                {openDropdown === item && (
                  <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg mt-2 w-48">
                    <ul className="py-2 text-gray-800 text-sm">
                      {item === "accueil" && (
                        <>
                          <li>
                            <Link href="/missions" className="block px-4 py-2 hover:bg-gray-200">
                              Missions et visions
                            </Link>
                          </li>
                          <li>
                            <Link href="/quality-policy" className="block px-4 py-2 hover:bg-gray-200">
                              Politique Qualité
                            </Link>
                          </li>
                        </>
                      )}
                      {item === "services" && (
                        <>
                          <li><Link href="/etalo" className="block px-4 py-2 hover:bg-gray-200">Etalonnage Dimensionnel</Link></li>
                          <li><Link href="/services/labo2" className="block px-4 py-2 hover:bg-gray-200">Essais Mécaniques</Link></li>
                          <li><Link href="/services/labo1" className="block px-4 py-2 hover:bg-gray-200">Métrologie Dimensionnelle</Link></li>
                          <li><Link href="/Retro" className="block px-4 py-2 hover:bg-gray-200">Rétroconception</Link></li>
                          <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-200">Programmes de Formation</Link></li>
                        </>
                      )}
                      {item === "actualites" && (
                        <li>
                          <Link href="/Actualites" className="block px-4 py-2 hover:bg-gray-200">
                            Événements
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <Link href="/cart">
              <button className="py-2 px-4 text-gray-800 font-semibold rounded-lg hover:text-white hover:bg-red-700 transition-all">
                À Propos de Nous
              </button>
            </Link>

            <Link href="/Magazine">
              <button className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">
                Magazine
              </button>
            </Link>

            <Link href="/iso286">
              <motion.button
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 20px rgba(229, 57, 53, 0.5)",
                    "0 0 50px rgba(229, 57, 53, 0.9)",
                    "0 0 20px rgba(229, 57, 53, 0.5)",
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 60px rgba(229, 57, 53, 1)",
                }}
                className="py-2 px-6 font-bold text-white rounded-lg 
                           bg-[#E53935]
                           border-2 border-[#E53935]
                           transition-all duration-300 shadow-lg"
              >
                Outils
              </motion.button>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg border-t border-gray-200"
            >
              <ul className="flex flex-col text-gray-800 text-sm">
                {/* Accueil */}
                <li>
                  <button
                    onClick={() => toggleSubmenu("accueil")}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100 font-semibold"
                  >
                    Accueil
                    <FiChevronDown
                      className={`transition-transform ${
                        openMobileSubmenu === "accueil" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSubmenu === "accueil" && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 bg-gray-50"
                      >
                        <li>
                          <Link href="/missions" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                            Missions et visions
                          </Link>
                        </li>
                        <li>
                          <Link href="/quality-policy" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                            Politique Qualité
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Services */}
                <li>
                  <button
                    onClick={() => toggleSubmenu("services")}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100 font-semibold"
                  >
                    Services
                    <FiChevronDown
                      className={`transition-transform ${
                        openMobileSubmenu === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSubmenu === "services" && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 bg-gray-50"
                      >
                        <li><Link href="/etalo" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Etalonnage Dimensionnel</Link></li>
                        <li><Link href="/services/labo2" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Essais Mécaniques</Link></li>
                        <li><Link href="/services/labo1" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Métrologie Dimensionnelle</Link></li>
                        <li><Link href="/Retro" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Rétroconception</Link></li>
                        <li><Link href="/blog" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Programmes de Formation</Link></li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Actualités */}
                <li>
                  <button
                    onClick={() => toggleSubmenu("actualites")}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100 font-semibold"
                  >
                    Actualités
                    <FiChevronDown
                      className={`transition-transform ${
                        openMobileSubmenu === "actualites" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSubmenu === "actualites" && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 bg-gray-50"
                      >
                        <li>
                          <Link href="/Actualites" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                            Événements
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Other Pages */}
                <li>
                  <Link href="/cart" className="block px-4 py-3 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    À Propos de Nous
                  </Link>
                </li>
                <li>
                  <Link href="/Magazine" className="block px-4 py-3 hover:bg-gray-100 text-red-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
                    Magazine
                  </Link>
                </li>
                <li>
{/*
<Link 
  href="/iso286" 
  className="block px-4 py-3 hover:bg-gray-100 text-[#E53935] font-bold" 
  onClick={() => setMobileMenuOpen(false)}
>
  Outils
</Link>
*/}

                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      <Link href="/contact">
        <motion.button
          className="fixed bottom-16 right-6 md:bottom-10 md:right-4 bg-red-700 text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition-all z-[9999]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiMail className="text-2xl" />
        </motion.button>
      </Link>
    </>
  );
}
