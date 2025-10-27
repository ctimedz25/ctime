"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EtalonnagePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Engrenage droit",
      définitions: [
        {
          subtitle: "Engrenage droit",
          items: [
            "Measurement of straight (cylindrical gears)",
            "Single points & scanning",
            "Internal and external gears",
            "With and without eccentricity",
            "Profile and helix and also pitch, runout and topography",
            "Graphical evaluation and report",
            "Reverse engineering: Generation of the CAD",
          ],
        },
      ],
      images: ["/droit.jpg"],
    },
    {
      title: "Engrenage hélicoïdal",
      définitions: [
        {
          subtitle: "Engrenage hélicoïdal",
          items: [
            "Measurement of helical gear",
            "Single points & scanning",
            "Internal and external gears",
            "With and without eccentricity",
            "Profile and helix and also pitch, runout and topography",
            "Graphical evaluation and report",
            "Reverse engineering: Generation of the CAD",
          ],
        },
      ],
      images: ["/téléchargement (6).jpg"],
    },
    {
      title: "Engrenage conique droit",
      définitions: [
        {
          subtitle: "Engrenage conique droit",
          items: [
            "Internal and external gear",
            "Gear geometry parameter definition via input or measurement",
            "Single points & Scanning",
            "Master grid generation (calculated, measured or CAD master)",
            "Best fit of the topography",
            "Graphical evaluation and report",
            "Reverse engineering: Generation of the CAD model based on the parameter set",
          ],
        },
      ],
      images: ["/images (1).jpg"],
    },
    {
      title: "Engrenage à chevrons",
      définitions: [
        {
          subtitle: "Engrenage à chevrons",
          items: [
            "Measurement and evaluation of the relative axial and radial position of two helical gears (internal and external gearings)",
            "Z-position of the apex",
          ],
        },
      ],
      images: ["/téléchargement (1).jpg"],
    },
    {
      title: "Engrenage conique à dentures spirales",
      définitions: [
        {
          subtitle: "Engrenage conique à dentures spirales",
          items: [
            "Measurement of involute spiral bevel gears and crown gears",
            "Gear geometry parameter definition via input or measurement",
            "Single point & scanning",
            "Measurement of the master flank",
            "Measurement and evaluation of topography incl. best fit, pitch and runout",
            "Pitch point definition based on the master grid or based on the radius & Z coordinate",
            "Evaluations of the runout: with eccentricity and/or eccentricity eliminated",
            "Special measurements like tip cone, root cone, tooth height and root scan",
            "Definition of the master flank (import or CAD based)",
            "Graphical evaluation and report",
          ],
        },
      ],
      images: ["/39_0509.JPG"],
    },
    {
      title: "Crémaillère à rapport constant et variable",
      définitions: [
        {
          subtitle: "Crémaillère à rapport constant",
          items: [
            "Measurement and evaluation of straight/helical racks with constant pitch incl. alignment",
            "Measurement and evaluation of pin holes",
            "The following evaluations are supported: width and height of the gear rack, Pitch, Tooth thickness and height, Size over ball, Helix line and angle, Profile line and angle",
            "Measurement in scanning mode",
            "Graphical evaluation and report",
          ],
        },
        {
          subtitle: "Crémaillère à rapport variable",
          items: [
            "Graphical evaluation of peripheral speed and the path deviation depending on the angle of rotation of the pinion.",
          ],
        },
      ],
      images: ["/téléchargement (2).jpg"],
    },
    {
      title: "Roue à chaîne",
      définitions: [
        {
          subtitle: "Roue à chaîne",
          items: [
            "Measurement and evaluation of sprockets according to DIN 606",
            "Continuous contact scanning",
            "With & without rotary table",
            "Gap types:",
            "Max/Min Profile with Radius and Angle (Typ A)",
            "Profile according to DIN 8186-1 (Typ B)",
            "Flank Angle Gamma (Typ C)",
            "Measurement and evaluation of the axial and flank profile, pitch and topography",
            "Evaluation of the tip, root and pitch circle and the ball size over balls",
            "CAD model generation",
            "Graphical evaluation and 3D-evaluation of the topography deviations with the CAD model",
          ],
        },
      ],
      images: ["/sproket.jpg"],
    },
    {
      title: "Hob cutter",
      définitions: [
        {
          subtitle: "Hob cutter",
          items: [
            "For single and multi-thread hobs with parallel or helical flutes",
            "All evaluations as required by DIN 3968:1960",
            "Radial/axial run-out upper & lower test collar and chucking face",
            "Shape/position cutting face",
            "Pitch of flutes-Form deviation of the cutting edge",
            "Tooth thickness-Hob lead over cutting edge etc",
            "Radial run-out at tooth tip",
            "Shape/position cutting face",
            "Pitch of flutes-Form deviation of the cutting edge",
            "Tooth thickness-Hob lead over cutting edge etc",
            "In addition to DIN:",
            "Axial pitch",
            "Tooth height for topping cutter",
          ],
        },
      ],
      images: ["/téléchargement (3).jpg"],
    },
    {
      title: "Shaving gear",
      définitions: [
        {
          subtitle: "Shaving gear",
          items: [
            "Measurement and evaluation of: Helix, Profile, Pitch, Runout",
            "Corrections adjustment parameters for shaper cutter",
            "The evaluations of shaving gears are similar to those of the cylindrical gears",
            "Single points and scan mode",
          ],
        },
      ],
      images: ["/téléchargement (4).jpg"],
    },
    {
      title: "Identification d'engrenage droit et hélicoïdal",
      définitions: [
        {
          subtitle: "",
          items: [
            "Inspection of straight and helical, external and internal gears or gear segments with unknown parameters",
            "All standard parameters are evaluated, i.e. module, pressure and helix angle, addendum modification, crowning of profile and helix, tip/root circle diameter etc.",
            "Reverse engineering: Generation of the CAD model based on the parameter set",
          ],
        },
      ],
      images: ["/téléchargement (6).jpg"],
    },
  ];




  

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/helical-gear-imageonline.co-merged.jpg"
          alt="Inspection d'engrenage"
          className="w-[850px] h-[250px] object-cover"
          width={1000}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"></div>
      </div>

      {/* Contenu principal */}
      <div
        className={`container mx-auto px-6 py-2 transition-opacity duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-center text-center mt-12 ">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            Inspection d&apos;Engrenage
          </h1>

          {/* Merged Card */}
          <div className="relative w-full max-w-xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Le CTIME propose d&apos;effectuer une inspection complète de vos engrenages en utilisant la MMT de haute précision. Cette technologie avancée permet de mesurer avec une grande précision les dimensions, la géométrie et les spécifications de vos engrenages, garantissant ainsi une qualité et une performance optimales.
            </p>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-3xl font-bold text-center text-white mt-16">Nos services</h2>
        <div className="flex justify-center mt-10 mb-10">
          <div className="grid grid-cols-1 gap-8 justify-center">
  {services.map(({ title, définitions, images }, index) => (
    <div
      key={index}
      className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${
        hoveredIndex === index ? "scale-105 shadow-red-500/50" : "scale-100"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex flex-col md:flex-row items-stretch max-w-[800px] mx-auto">
        {/* Section image */}
        <div className="w-full md:w-1/2 flex flex-col gap-2 p-4">
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-[250px] md:h-full relative">
              <Image
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                layout="fill"
              />
            </div>
          ))}
        </div>

        {/* Section texte */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2
            className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300 mb-2"
            dangerouslySetInnerHTML={{
              __html: title.replace(
                "Inspection",
                "<span class='text-red-500'>Inspection</span>"
              ),
            }}
          />
          {définitions.map((def, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-lg text-gray-300 mb-2">{def.subtitle}</h3>
              <ul className="list-disc list-inside text-gray-200 leading-relaxed">
                {def.items && def.items.length > 0 ? (
                  def.items.map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: item.replace(
                          "Inspection",
                          "<span class='text-red-500'>Inspection</span>"
                        ),
                      }}
                    />
                  ))
                ) : (
                  <li>No items available</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default EtalonnagePage;
