import { Heading3 } from "lucide-react";
import { CarouselDefault } from "../Carasoul";

export default function Second() {
  return (
    <section className="w-full flex flex-col items-center mt-20 px-6">

      <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mb-10 leading-snug">
          Votre <span className="text-red-500">  Compagnon </span> vers 
      <span className="text-red-500"> la Qualité  </span>
      </h1>


<h4 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center mt-6 mb-6 leading-snug">
  Actualités <br />
</h4>


      

      {/* Carousel */}
      <div className="max-w-full">
        <CarouselDefault />
      </div>
    </section>
  );
}
