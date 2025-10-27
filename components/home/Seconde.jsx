import { CarouselDefault } from "../Carasoul";

export default function Second() {
  return (
    <section className="w-full flex flex-col items-center mt-10 px-6">
      {/* Titre avec animation uniquement sur la phrase */}
      <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mb-10 leading-snug">
        <span className="animate-fadeUp">
          Votre <span className="text-red-500">Compagnon</span> vers{" "}
          <span className="text-red-500">la Qualité</span>
        </span>
      </h1>

      {/* Titre de section */}
      <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mt-0 mb-0 leading-snug">
        Actualités <br />
      </h4>

      {/* Carousel */}
      <div className="max-w-full">
        <CarouselDefault />
      </div>
    </section>
  );
}
