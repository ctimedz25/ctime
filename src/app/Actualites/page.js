'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Actualites() {
  const [articles, setArticles] = useState([
    {
      title: "Journée Portes Ouvertes - 27 Avril 2026",
      date: "Actualités / Par admin",
      img: "/porte_ouvert_journe.png",
      description: "Cette journée est dédiée aux professionnels de l’industrie, de la qualité et de la métrologie. Elle comprend la présentation des services du centre, des démonstrations techniques en conditions réelles, des échanges autour des métiers du contrôle de la qualité, de la métrologie et des essais, ainsi que la découverte des opportunités de collaboration. Public cible : chefs d’entreprise industriels, professionnels de l’automobile et de la mécanique de précision, responsables Qualité, Production et Maintenance, ingénieurs Méthodes et Bureau d’Études, techniciens métrologie et contrôle, responsables R&D. Une journée d’échanges techniques, de networking et de partage d’expertise pour renforcer vos démarches qualité et performance industrielle. Nombre de places limité afin de favoriser des échanges qualitatifs.",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd8NtyGIZ93wXmR_WaqkUYTQH7t4yY3qb4xOSO6l0ghig4Eaw/viewform?usp=dialog"
    },
    {
      title: "Visite de Monsieur le Ministre de l’Industrie au CTIME le 09 Avril 2026",
      date: "Actualités / Par admin",
      img: "/visite_ministre.png",
      description: "Monsieur le Ministre de l’Industrie a effectué une visite au centre industriel des industries mécaniques et de transformation des métaux, où une présentation détaillée lui a été faite concernant le centre, ses capacités actuelles ainsi que ses perspectives de développement futur et son rôle dans le soutien du secteur industriel. Cette visite a constitué une opportunité d’échange et de discussion autour des moyens de renforcer les capacités industrielles et de développer ce secteur stratégique. Nos sincères remerciements à tous ceux qui ont contribué à la réussite de cette rencontre."
    },
    {
      title: "Salon MECHANICA 2026",
      date: "Actualités / Par admin",
      img: "/Salon mechanica 2026.png",
      description: "À travers sa présence, le centre met en avant son expertise en essais, métrologie dimensionnelle, mesure 3D et accompagnement technique des industriels. Cette participation constitue également une opportunité de renforcer les échanges avec les acteurs de l’écosystème automobile et de promouvoir des solutions techniques contribuant à l’amélioration de la qualité, de la conformité et de la compétitivité des produits industriels.."
    },
    
    {
      title: "Visite pédagogique de l’Institut d’Optique et de Mécanique de Précision au CTIME",
      date: "Actualités / Par admin",
      img: "/visite.png",
      description: "Nous avons eu le plaisir d’accueillir au CTIME un groupe d’étudiants accompagnés de leurs professeurs pour une visite technique immersive. Au programme : démonstrations d’essais mécaniques, étalonnage d’instruments de précision, métrologie appliquée et rétro-ingénierie. Une journée riche en échanges et en découvertes, qui illustre parfaitement notre engagement à rapprocher le monde académique de l’univers industriel."
    },
    {
      title: "Inauguration du complexe FONDERIE EURO MOTEUR",
      date: "Actualités / Par admin",
      img: "/1730887992495-imageonline.co-merged.jpg",
      description: "En date du 30 Octobre 2024 le CTIME a pris part en tant que partenaire technique à l'inauguration du complexe FONDERIE EURO MOTEUR au niveau de la zone industrielle de la commune de MAGRA - Wilaya de M'SILA. Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins, d'une capacité de 10 000 T/An et compte 200 salariés en majorité des jeunes. Le complexe est équipé de machines de production de dernière génération et d'un personnel technique."
    },
    {
      title: "Salon international de la sous-traitance industrielle",
      date: "Actualités / Par admin",
      img: "/ALGEST 2024.jpg",
      description: ""
    },
    {
      title: "Programme PADICA",
      date: "Actualités / Par admin",
      img: "/437523900_416316127824869_7814901483781890104_n-imageonline.co-merged.jpg",
      description: "Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l'Union Européenne accompagnée par la Directrice Nationale du Programme."
    },
    {
      title: "Formation Introduction à la science des matériaux organisée",
      date: "Actualités / Par admin",
      img: "/IMG_3436-imageonline.co-merged.jpg",
      description: "Première session de formation intitulée: Introduction à la science des matériaux organisée par le CTIME dans le cadre du programme PADICA au niveau de l'INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023."
    },
    {
      title: "Participation à ALGEST 2023",
      date: "Actualités / Par admin",
      img: "/mo7b.jpg",
      description: "Le CTIME participera à la 8ème édition du salon international de la sous-traitance ALGEST 2023 qui se tiendra du 14 au 17 Novembre 2023 au niveau de la SAFEX (Pins Maritime) – ALGER."
    },
    {
      title: "Étude de cas sur l'étalonnage avancé",
      date: "Services : Métrologie dimensionnelle / Par admin",
      img: "/150.jpg",
      description: "En 2023, le CTIME a réalisé un projet d’étalonnage avancé des instruments de mesure pour un client majeur dans le secteur de l’énergie, garantissant des résultats précis et fiables."
    },
    {
      title: "Formation en métrologie",
      date: "Services : Métrologie dimensionnelle / Par admin",
      img: "/151.jpg",
      description: "Une série de formations sur les techniques modernes de métrologie a été organisée pour les professionnels du secteur. Le CTIME remercie tous les participants pour leur engagement."
    },
    {
      title: "Journées techniques 2023",
      date: "Actualités / Par admin",
      img: "/152.jpg",
      description: "Le CTIME a récemment participé aux journées techniques sur le développement des compétences locales organisées à Oran, mettant en avant les innovations dans le secteur industriel."
    },
    {
      title: "Journée d’étude sur l’IA dans l’industrie",
      date: "Actualités / Par admin",
      img: "/153.jpg",
      description: "Le 15 septembre 2023, le CTIME a participé à une journée d’étude sur l’utilisation de l’intelligence artificielle dans les processus industriels, organisée par le Ministère de l'Industrie."
    },
    {
      title: "Services de mesure et d'inspection",
      date: "Services : Métrologie dimensionnelle / Par admin",
      img: "/154.png",
      description: "Le CTIME continue d’offrir des services de mesure et d’inspection, avec des rapports détaillés pour toutes les tailles de pièces, que ce soit en laboratoire ou sur site."
    },
    {
      title: "Rencontre sur les innovations technologiques",
      date: "Actualités / Par admin",
      img: "/155.jpg",
      description: "Le 01 août 2023, le CTIME a participé à une rencontre sur les innovations technologiques organisée par l’Université de Constantine 3, favorisant les échanges entre chercheurs et industriels."
    }
  ]);

  useEffect(() => {
    const articlesElements = document.querySelectorAll('.article');
    articlesElements.forEach((article, index) => {
      article.style.opacity = 0;
      article.style.transform = 'translateY(20px)';
      setTimeout(() => {
        article.style.opacity = 1;
        article.style.transform = 'translateY(0)';
        article.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      }, index * 200);
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 p-10 min-h-screen mb-10">
      <Head>
        <title>Actualités - CTIME</title>
        <meta name="description" content="Actualités et événements du CTIME." />
      </Head>

      <main className="bg-white/10 shadow-xl rounded-lg p-6 border border-transparent max-w-3xl mx-auto">
        <h1 className="text-5xl text-center font-extrabold text-white drop-shadow-lg mb-6">Actualités</h1>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <article
              className="article bg-white/10 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-red-500/50"
              key={index}
            >
              <div className="relative w-full h-60">
                <Image
                  src={article.img}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">{article.title}</h2>
                <p className="text-gray-200 text-sm mb-4">{article.date}</p>
                <p className="text-gray-200">{article.description}</p>
                {article.registrationLink && (
                  <a
                    href={article.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                  >
                    S'inscrire
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <footer className="text-center mt-10 text-gray-200">
          <p className="text-lg font-semibold">CTIME - Centre Technique Industriel des Industries Mécaniques & Transformatrices des Métaux</p>
        </footer>
      </main>
    </div>
  );
}