'use client';

import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const detailsLink = "/Actualites";

export function ModernCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const slides = [
    {
      "image": "/porte_ouvert_journe.png",
      "title": " ",
      "shortText": "Le CTIME vous invite à participer à sa Journée Portes Ouvertes, une occasion unique de découvrir ses services, ses démonstrations techniques et les métiers du contrôle de la qualité et de la métrologie.",
      "fullText": "Cette journée est dédiée aux professionnels de l’industrie, de la qualité et de la métrologie. Elle comprend la présentation des services du centre, des démonstrations techniques en conditions réelles, des échanges autour des métiers du contrôle de la qualité, de la métrologie et des essais, ainsi que la découverte des opportunités de collaboration. Public cible : chefs d’entreprise industriels, professionnels de l’automobile et de la mécanique de précision, responsables Qualité, Production et Maintenance, ingénieurs Méthodes et Bureau d’Études, techniciens métrologie et contrôle, responsables R&D. Une journée d’échanges techniques, de networking et de partage d’expertise pour renforcer vos démarches qualité et performance industrielle. ⚠️ Nombre de places limité afin de favoriser des échanges qualitatifs."
    },

    {
      "image": "/visite_ministre.png",
      "title": "Visite de Monsieur le Ministre de l’Industrie au CTIME",
      "shortText": "Visite officielle de Monsieur le Ministre de l’Industrie au centre industriel des industries mécaniques et de transformation des métaux, avec présentation de ses capacités et de son rôle dans le soutien du secteur industriel.",
      "fullText": "Monsieur le Ministre de l’Industrie a effectué une visite au centre industriel des industries mécaniques et de transformation des métaux, où une présentation détaillée lui a été faite concernant le centre, ses capacités actuelles ainsi que ses perspectives de développement futur et son rôle dans le soutien du secteur industriel. Cette visite a constitué une opportunité d’échange et de discussion autour des moyens de renforcer les capacités industrielles et de développer ce secteur stratégique. Nos sincères remerciements à tous ceux qui ont contribué à la réussite de cette rencontre."
    },
    {
      "image": "/Salon mechanica 2026.png",
      "title": "Salon MECHANICA 2026",
      "shortText": "La participation du CTIME s’inscrit pleinement dans sa mission de soutien au développement de l’industrie mécanique nationale, en particulier au service de la filière automobile, de la sous-traitance industrielle et du marché de la pièce de rechange (PDR)...",
      "fullText": "À travers sa présence, le centre met en avant son expertise en essais, métrologie dimensionnelle, mesure 3D et accompagnement technique des industriels. Cette participation constitue également une opportunité de renforcer les échanges avec les acteurs de l’écosystème automobile et de promouvoir des solutions techniques contribuant à l’amélioration de la qualité, de la conformité et de la compétitivité des produits industriels.."
    },
    {
      image: "/visite.png",
      title: " Visite pédagogique de l’Institut d’Optique et de Mécanique de Précision au CTIME",
      shortText: "Nous avons eu le plaisir d’accueillir au CTIME un groupe d’étudiants accompagnés de leurs professeurs pour une visite technique immersive...",
      fullText: "Au programme : démonstrations d’essais mécaniques, étalonnage d’instruments de précision, métrologie appliquée et rétro-ingénierie. Une journée riche en échanges et en découvertes, qui illustre parfaitement notre engagement à rapprocher le monde académique de l’univers industriel."
    },

    {
      image: "/1730887992495-imageonline.co-merged.jpg",
      title: "Inauguration du complexe FONDERIE EURO MOTEUR",
      shortText: "En date du 30 Octobre 2024 le CTIME a pris part en tant que partenaire technique, à l'inauguration du complexe FONDERIE EURO MOTEUR. Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins...",
      fullText: "En date du 30 Octobre 2024 le CTIME a pris part en tant que partenaire technique à l'inauguration du complexe FONDERIE EURO MOTEUR au niveau de la zone industrielle de la commune de MAGRA - Wilaya de M'SILA. Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins, d'une capacité de 10 000 T/An et compte 200 salariés en majorité des jeunes. Le complexe est équipé de machines de production de dernière génération et d'un personnel technique."
    },
    {
      image: "/ALGEST 2024.jpg",
      title: "ALGEST 2024",
      shortText: "",
      fullText: ""
    },
    {
      image: "/437523900_416316127824869_7814901483781890104_n-imageonline.co-merged.jpg",
      title: "Programme PADICA",
      shortText: "Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l'Union Européenne accompagnée par la Directrice Nationale du Programme.",
      fullText: "Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l'Union Européenne accompagnée par la Directrice Nationale du Programme."
    },
    {
      image: "/IMG_3436-imageonline.co-merged.jpg",
      title: "Formation Introduction à la science des matériaux organisée",
      shortText: "Première session de formation intitulée: Introduction à la science des matériaux organisée par le CTIME dans le cadre du programme PADICA au niveau de l'INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023.",
      fullText: "Première session de formation intitulée: Introduction à la science des matériaux organisée par le CTIME dans le cadre du programme PADICA au niveau de l'INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023."
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowFullText(false);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowFullText(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowFullText(false);
  };

  const toggleText = () => setShowFullText(!showFullText);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPreviousSlide();
    }
  };

  return (
    <>
      {/* Font declaration in the head */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .carousel-container * {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      {/* Centered carousel container with increased width */}
      <div className="flex justify-center w-full px-4 my-8">
        <div
          className="carousel-container relative overflow-hidden rounded-xl shadow-lg h-[300px] bg-gray-900 w-full max-w-5xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Main carousel slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                {slide.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                    {slide.shortText && (
                      <div className={`transition-all duration-300 ${showFullText && currentSlide === index ? 'max-h-[300px]' : 'max-h-[80px] overflow-hidden'}`}>
                        <p className="text-lg">
                          {showFullText && currentSlide === index ? slide.fullText : slide.shortText}
                        </p>
                        {slide.fullText !== slide.shortText && (
                          <button
                            onClick={() => router.push('/Actualites')}
                            className="mt-2 text-blue-300 hover:text-blue-100 transition-colors"
                          >
                            Voir plus
                          </button>

                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
            onClick={goToPreviousSlide}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}


          </div>

        </div>



        {/* Button Under the Carousel (Left-Aligned) */}


      </div>
      <div className="w-full flex justify-start px-4 mt-4">
        <Link href="/Actualites">
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
          >
            En savoir plus
          </button>
        </Link>
      </div>
    </>


  );
}

// For backward compatibility
export const CarouselDefault = ModernCarousel;
export default ModernCarousel;
