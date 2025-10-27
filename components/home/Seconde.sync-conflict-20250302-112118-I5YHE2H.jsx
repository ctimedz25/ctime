import { CarouselDefault } from "../Carasoul";

export default function Second() {
  return (
    <section className="w-full flex flex-col items-center mt-20 px-6">
      {/* Slogan avec animation CSS */}
      <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mb-10 leading-snug">
        <span className="inline-block opacity-0 animate-fadeIn">
          Votre{" "}
          <span className="text-red-500 animate-zoomIn delay-500">Compagnon</span> vers{" "}
          <span className="text-red-500 animate-zoomIn delay-1000">la Qualité</span>
        </span>
      </h1>

      {/* Titre Actualités */}
      <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mt-6 mb-6 leading-snug opacity-0 animate-fadeIn delay-1500">
        Actualités
      </h4>

      {/* Carousel */}
      <div className="max-w-full">
        <CarouselDefault />
      </div>

      {/* Définition des animations CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 1s ease-out forwards;
        }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
      `}</style>
    </section>
  );
}
