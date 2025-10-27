import React from "react";

export default function PresentationCTIME() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 px-6">
      {/* Section bannière avec animation */}
      <div className="relative mb-10 w-full max-w-5xl">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/Eprouvette-imageonline.co-merged.png"
            alt="Bannière CTIME"
            className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl text-white font-extrabold drop-shadow-lg">
            POLITIQUE QUALITÉ
          </h1>
        </div>
      </div>

      {/* Introduction avec background image */}
      <section className="bg-white/10 shadow-xl rounded-lg p-6 mb-10 w-full max-w-5xl">
        <p className="mb-4 text-gray-200">
          Le CTIME, confirmant son engagement pour une qualité de service d’un niveau international, s’attache à instaurer, dans toutes ses activités, un système de management conforme aux exigences des clients, de l’ISO/CEI 17025 : 2017, des exigences réglementaires et légales ainsi que celles des organisations fournissant la reconnaissance en se fixant comme objectif primordial l’obtention de sa reconnaissance par le biais de l’accréditation progressive de ses activités réalisées au sein de ses laboratoires.
        </p>
        <p className="mb-4 text-gray-200">
          Pour cela, la Direction Générale s’engage à apporter tout son appui ainsi que les ressources humaines et matérielles nécessaires à cette politique et à :
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>Mettre en œuvre et développer un SMQ efficace pour satisfaire les clients.</li>
          <li>Se conformer aux exigences des clients et fournir un niveau de services optimal pour toutes les prestations.</li>
          <li>Assurer la conformité aux exigences normatives ISO/CEI 17025, référentiels techniques et réglementaires.</li>
          <li>Appliquer une démarche d’amélioration continue.</li>
          <li>Diffuser et faire respecter la politique qualité à tous les niveaux du CTIME.</li>
          <li>Assurer le suivi des objectifs par des indicateurs de performance mesurables et analysés lors des revues de direction.</li>
        </ul>
        <p className="mb-4 text-gray-200">
          La Direction Générale comprend bien l’importance de l’impartialité dans ses activités et assure le respect de celle-ci en s’engageant à :
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>Structurer toutes les activités de manière à préserver l’impartialité et éviter les conflits d’intérêts.</li>
          <li>S’assurer que le personnel comprend l’importance de l’impartialité et la gestion des conflits d’intérêts.</li>
          <li>Garantir que le personnel est exempt de toute pression pouvant affecter son impartialité.</li>
          <li>Veiller à ne pas utiliser de personnel ayant des conflits réels ou potentiels dans les activités concernées.</li>
          <li>Préserver l’intégrité du SMQ lors de tout changement planifié.</li>
        </ul>
        <p className="mb-4 text-gray-200">
          Le CTIME s’engage également à ne fournir aucun renseignement confidentiel à aucune des organisations avec lesquelles il entretient des relations.
        </p>
        <p className="mb-4 text-gray-200">
          Nous sommes convaincus que le développement de notre centre passe par la satisfaction permanente de nos clients, l’amélioration de la compétence du personnel, et l’anticipation des risques et des opportunités d’amélioration.
        </p>
        <p className="mb-4 text-gray-200">
          Dans ce contexte, le CTIME s’engage à œuvrer pour mettre en place, entretenir et améliorer continuellement un système de management performant.
        </p>
        <p className="mb-4 text-gray-200">
          La Direction Générale s’assure, à travers cette politique qualité, de l’efficacité du SMQ et de l’atteinte des objectifs fixés.
        </p>

        {/* Nom du directeur */}
        <div className="mt-8 text-right text-lg font-semibold text-gray-200">
          Directeur Général
        </div>
      </section>
    </div>
  );
}
