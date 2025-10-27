'use client';

import { useState } from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { BOL, Earth } from "../../svg";

export default function First() {
  const [count, setCount] = useState(0);

  return (
    <section 
      className="flex flex-col items-center w-1/2 p-4 mx-auto bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-2xl transition-transform duration-300" 
      style={{
        backgroundImage: "url('/4872987.jpg')", // Update the image path if needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl font-extrabold text-center mb-2 text-black drop-shadow-lg">
        <Typewriter 
          words={['Qui sommes-nous ?', 'Hello in ctime']} 
          loop={0} 
          cursorStyle='|' 
          cursorBlinking={true}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <p className="text-black text-sm mb-2 leading-relaxed text-left px-2">
        Le CTIME est une entreprise spécialisée dans la métrologie de haute précision et essais mécaniques, intervenant en Algérie.
        <br />
        Forts de notre expertise et d&apos;une technologie de pointe, nous utilisons des outils avancés tels que :
      </p>

      <div className="grid grid-cols-2 gap-4 text-black text-sm mb-2 leading-relaxed text-left px-2">
        {/* Colonne de gauche */}
        <div>
          <ul className="list-disc list-inside">
            <li>MMT de haute précision  </li>
            <li>Bras de mesure 7 axes avec scanner </li>
            <li>Laser tracker </li>
            <li>Interféromètre laser </li>
            <li>Bancs d&apos;étalonnage d&apos;ESM </li>
          </ul>
        </div>
        
        {/* Colonne de droite */}
        <div>
          <ul className="list-disc list-inside">
            <li>Machine d&apos;essais 600 KN avec four (1200°c)</li>
            <li>Duromètre (HB, HV et HRC)</li>
            <li>Pendule de charpy</li>
            <li>Machine de fatique</li>
            <li>Machine universel 5 KN</li>
          </ul>
        </div>
      </div>

      <p className="text-black text-sm mb-2 leading-relaxed text-left px-2">
        Notre engagement envers la qualité, la réactivité et l&apos;innovation nous permet de fournir des services fiables et performants, adaptés aux besoins spécifiques de chaque client. Avec CTIME, bénéficiez d&apos;une expertise reconnue pour :
      </p>

      <ul className="text-black text-sm mb-2 leading-relaxed text-left px-2 list-disc list-inside">
        <li>Des mesures exigeantes</li>
        <li>Des essais mécaniques de précision</li>
      </ul>

      <div className="flex flex-wrap justify-center mt-2 gap-4">
        <div className="flex items-center gap-2 p-2 border-l-4 border-red-600 rounded-lg shadow-lg transition-shadow duration-300 bg-white hover:shadow-xl transform hover:scale-105">
          <Earth size={40} color={'red'} />
          <div>
            <h2 className="font-semibold text-sm text-black">0660 64 05 32.</h2>
          
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 border-l-4 border-red-600 rounded-lg shadow-lg transition-shadow duration-300 bg-white hover:shadow-xl transform hover:scale-105">
          <BOL size={40} color={'red'} />
          <div>
            <h2 className="font-semibold text-sm text-black">contact@ctime.dz</h2>
            
          </div>
        </div>
      </div>

      
    </section>
  );
}
