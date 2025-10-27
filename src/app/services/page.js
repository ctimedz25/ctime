

// pages/resilience.js
"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0070f3;
  margin-bottom: 20px;
`;

const Section = styled.section`
  width: 66.67%; // Set width to 2/3 of the container
  max-width: 800px; // Keep max-width for larger screens
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #0070f3;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 20px 0;
`;

const ResiliencePage = () => {
  return (
    <Container>
      <Title>Qu&apos;est-ce qu&apos;un essai de compression ?</Title>
      <Section>
        <p>
        L&apos;essai de compression est une méthode d&apos;essai mécanique qui consiste à soumettre un matériau à une force de compression croissante jusqu&apos;à sa rupture ou à une déformation prédéfinie. Cette méthode permet d&apos;évaluer la résistance d&apos;un matériau à être écrasé ou à se déformer sous l&apos;effet d&apos;une charge appliquée perpendiculairement à sa surface.
        </p>
      </Section>
      <Section>
        <Subtitle>Pourquoi réaliser un essai de compression ?</Subtitle>
        <List>
        <li><strong>Déterminer la résistance à la compression :</strong> C&apos;est une propriété mécanique fondamentale de nombreux matériaux, notamment les bétons, les céramiques, les métaux et les polymères.</li>
          <li><strong>Évaluer la rigidité :</strong> La courbe contrainte-déformation obtenue lors de l&apos;essai permet de calculer le module d&apos;élasticité, qui est une mesure de la rigidité du matériau.</li>
          <li><strong>Vérifier la conformité aux normes :</strong> De nombreuses normes spécifient les exigences en matière de résistance à la compression pour différents matériaux et applications.</li>
          <li><strong>Optimiser la conception des structures :</strong> Les résultats des essais de compression permettent de dimensionner les éléments structuraux de manière à garantir leur sécurité et leur durabilité.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Comment se déroule un essai de compression ?</Subtitle>
        <List>
        <li>
            <strong>Préparation de l’échantillon :</strong>
            <ul>
              <li>L&apos;échantillon doit avoir une forme géométrique bien définie (cylindre, cube, etc.) et des dimensions précises.</li>
              <li>Les surfaces de l&apos;échantillon en contact avec les plateaux de la machine doivent être planes et parallèles.</li>
            </ul>
          </li>
          <li>
            <strong>Installation de l’échantillon :</strong>
            <ul>
              <li>L&apos;échantillon est placé entre les plateaux de la machine d&apos;essai.</li>
              <li>Il est important de s&apos;assurer que l&apos;échantillon est centré et qu&apos;il n&apos;y a pas de jeu entre lui et les plateaux.</li>
            </ul>
          </li>
          <li>
            <strong>Application de la charge :</strong>
            <ul>
              <li>La machine d&apos;essai applique une force de compression croissante à un débit de charge constant.</li>
              <li>La force et la déformation sont mesurées en continu.</li>
            </ul>
          </li>
          <li>
            <strong>Analyse des résultats :</strong>
            <ul>
              <li>La courbe contrainte-déformation est tracée.</li>
              <li>La résistance à la compression est déterminée à partir du point de rupture ou du point correspondant à une déformation spécifique.</li>
              <li>Le module d&apos;élasticité est calculé à partir de la partie linéaire de la courbe.</li>
            </ul>
          </li>
          
        </List>
        <Image src="/1.jpg" alt="Image d'un essai de résilience Charpy" />
      </Section>
      <Section>
        <Subtitle>Les facteurs influençant la compression</Subtitle>
        <List>
          <li>Amplitude de la contrainte.</li>
          <li>Rapport de charge.</li>
          <li>Fréquence de chargement.</li>
          <li>Température.</li>
          <li>Environnement.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Les applications de l&apos;essai de compression</Subtitle>
        <List>
        <li><strong>Le bâtiment et les travaux publics :</strong> Pour évaluer la résistance des bétons, des mortiers, des maçonneries, etc.</li>
          <li><strong>L&apos;industrie automobile :</strong> Pour tester la résistance des composants mécaniques.</li>
          <li><strong>L’aéronautique :</strong> Pour caractériser les matériaux composites utilisés dans la construction des avions.</li>
          <li><strong>L&apos;industrie des matériaux :</strong> Pour contrôler la qualité des matériaux et développer de nouveaux produits.</li>
        </List>
      </Section>
      <Section>
        <p>
        L&apos;essai de compression est une méthode d&apos;essai essentielle pour caractériser les matériaux et s&apos;assurer de leur aptitude à résister aux charges en compression. Il est largement utilisé dans de nombreux secteurs industriels.
        </p>
      </Section>
    </Container>
  );
};

export default ResiliencePage;
