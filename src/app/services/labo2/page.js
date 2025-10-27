"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaRulerCombined,
  FaCogs,
  FaDraftingCompass,
  FaCheckCircle,
  FaObjectGroup,
} from "react-icons/fa";
import Image from "next/image";

const LaboratoireDeMetrologie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaRulerCombined className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Essai de Traction",
      description: "Essais spécifiques",
      link: "/traction",
      imgSrc: "/IMG_4568.JPG",
    },
    {
      icon: <FaCogs className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Essai de Dureté",
      description: "Mesures spécifiques",
      imgSrc: "/IMG_4138.JPG",
      link: "/durete",
    },
    {
      icon: <FaDraftingCompass className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Essai de Charpy",
      description: "Analyse des performances sous chargement cyclique.",
      imgSrc: "/Capture4.PNG",
      link: "/resilience",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Essai de Fatigue",
      description: "Mesure de la ténacité à l'impact.",
      imgSrc: "/IMG_4413.JPG",
      link: "/nav",
    },
    {
      icon: <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Essai de Flexion",
      description: "Analyse de la résistance à la flexion.",
      link: "/flexion",
      imgSrc: "/Flexion.JPG",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 
                 bg-gradient-lg animate-watery">
      {/* Image de fond */}
      <div
          className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
        >
        <Image
          src="/canva.png"
          alt="Laboratoire d'essais mecaniques'"
          className="w-full h-[350px] object-cover"
            width={1000}
            height={250}

        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            
            </div>
      </div>

      {/* Contenu principal */}
      <div
  className={`container mx-auto px-6 py-16 transition-opacity duration-1000 delay-500 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Hero Section */}
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg ">
      Laboratoire d'essais <span className="text-red-500"> Mécaniques</span>
    </h1>
    <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto leading-relaxed">
      Vous souhaitez connaître les limites de vos matériaux ? Notre laboratoire vous propose une gamme complète de tests pour évaluer la résistance, la dureté, la fatigue et bien d'autres propriétés.
    </p>
</div>

  {/* Section Explication */}
  <div className="mt-12 flex flex-col items-center text-center">
  <div className="max-w-4xl">
    <h2 className="text-3xl font-bold text-white my-6">
       Les essais mécaniques : exploration des propriétés des matériaux
    </h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      Les essais mécaniques sont cruciaux pour évaluer la résistance, la déformabilité et le comportement d'un matériau lors de différentes sollicitations.
    </p>

    <h3 className="text-2xl font-semibold text-white mt-6">
  Pourquoi réaliser des essais mécaniques ?
</h3>
<ul className="flex flex-col items-center text-gray-200 mt-4 space-y-2">
  {[
    { emoji: "", text: "Sécurité :", desc: "Garantir la fiabilité des structures et produits." },
    { emoji: "", text: "Conception :", desc: "Optimiser la conception des pièces et structures." },
    { emoji: "", text: "Contrôle qualité :", desc: "Assurer la conformité des matériaux." },
    { emoji: "", text: "Recherche et développement :", desc: "Améliorer les performances des matériaux." }
  ].map(({ emoji, text, desc }, index) => (
    <li
      key={index}
      className="inline-flex w-fit py-3 px-4 bg-white/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
    >
      {emoji} <strong>{text}</strong> {desc}
    </li>
  ))}
</ul>

<h3 className="text-2xl font-semibold text-white mt-8"> Les paramètres mesurés</h3>
<ul className="flex flex-col items-center text-gray-200 mt-4 space-y-2">
  {[
    { emoji: "", text: "Limite élastique :", desc: "Contraintes maximales sans déformation permanente." },
    { emoji: "", text: "Résistance à la traction :", desc: "Contraintes maximales avant rupture." },
    { emoji: "", text: "Allongement à la rupture :", desc: "Augmentation de longueur à la rupture." },
    { emoji: "", text: "Module d'Young :", desc: "Rigidité du matériau." },
    { emoji: "", text: "Dureté :", desc: "Résistance à la pénétration." },
    { emoji: "", text: "Fatigue :", desc: "Rupture sous charge répétée." },
    { emoji: "", text: "Ténacité :", desc: "Résistance à la propagation d'une fissure." },
    { emoji: "", text: "", desc: "Sensibilité d'un matériau à la température." },
    { emoji: "", text: "", desc: "Propriétés d'un matériau composite ou d'un assemblage." }
  ].map(({ emoji, text, desc }, index) => (
    <li
      key={index}
      className="inline-flex w-fit py-3 px-4 bg-white/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
    >
      {emoji} <strong>{text}</strong> {desc}
    </li>
  ))}
</ul>

  </div>
</div>




  {/* Services */}
  <h2 className="text-3xl font-bold text-center text-white mt-16">Nos services</h2>
  <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-center">
    {services.map(({ icon, title, description, link, imgSrc }, index) => (
      <div
        key={index}
        className={`relative bg-white/10  shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${
          hoveredIndex === index ? "scale-105 shadow-red-500/50" : "scale-100"
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Image
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
          width={300}
          height={200}
        />
        <div className="p-6 text-center">
          {link ? (
            <Link href={link}>
              <h3 className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          )}
          {icon}
          <p className="text-gray-200 mt-3">{description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


</div>

    </div>
  );
};

export default LaboratoireDeMetrologie;
