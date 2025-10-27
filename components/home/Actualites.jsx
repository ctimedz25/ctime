'use client';
import { CheckCircle } from "lucide-react";

export default function Actualites() {
  return (
    <section className="flex justify-center py-0">
      <div className="max-w-5xl w-full px-10 py-12 rounded-2xl shadow-xl bg-black/20 backdrop-blur-md border border-white/10 text-white text-center">
        
        {/* Title */}
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl mb-8 text-gray-100">
          À Propos de Nous
        </h2>

        {/* Content */}
        <p className="text-lg leading-normal text-gray-300">
          <span className="font-semibold text-white">CTIME</span> est une entreprise spécialisée dans la <span className="font-semibold text-white">métrologie de haute précision</span> et les <span className="font-semibold text-white">essais mécaniques.</span>
        </p>

        <p className="mt-6 text-lg leading-normal text-gray-300">
          Forts de notre expertise et d’une technologie de pointe, nous utilisons des équipements de dernière génération pour garantir des prestations de qualité.
        </p>

        {/* Equipment */}
        <div className="mt-8 text-left">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">
            Nos équipements avancés :
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"> {/* Réduction de l'espace entre les éléments */}
            {[
              "MMT de haute précision",   
              "Machine d’essais 600 KN avec four (1200°C)",     
              "Bras de mesure 7 axes avec scanner", 
              "Duromètre (HB, HV et HRC)",
              "Laser tracker",
              "Pendule de Charpy",
              "Interféromètre laser",
              "Machine de fatigue",
              "Bancs d’étalonnage d’ESM",
              "Machine universelle 5 KN",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2"> {/* Réduction de l'espace */}
                <CheckCircle className="text-green-400 w-5 h-5" />
                <p className="text-lg leading-normal text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement */}
        <p className="mt-10 text-lg leading-normal text-gray-300">
          Notre engagement envers la <span className="font-semibold text-white">qualité</span>, la <span className="font-semibold text-white">réactivité</span> et l’<span className="font-semibold text-white">innovation</span> nous permet d’offrir des services fiables et performants, adaptés aux exigences de nos clients.
        </p>

        {/* Services */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Nos services :
          </h3>
          <div className="flex flex-col items-center gap-3"> {/* Réduction de l'espace */}
            {["Des mesures exigeantes", "Des essais mécaniques de précision"].map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400 w-5 h-5" />
                <p className="text-lg leading-normal text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
