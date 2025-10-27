'use client';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section style={{
            padding: '2rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}
            >
                Qui sommes-nous ?
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontSize: '1rem', marginBottom: '1rem', color: '#555' }}
            >
                Le CTIME est une entreprise spécialisée dans la métrologie de haute précision et essais mécanique, intervenant en Algérie.
            </motion.p>
            <motion.ul 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '1rem' }}
            >
                <li>Machine à Mesurer Tridimensionnelle de très haute précision</li>
                <li>Bras de mesure 7 axes avec scanner</li>
                <li>Laser tracker</li>
                <li>Interféromètre laser</li>
                <li>Divers bancs d’étalonnage d’ESM</li>
            </motion.ul>
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ fontSize: '1rem', marginBottom: '1rem', color: '#555' }}
            >
                Notre engagement envers la qualité, la réactivité et l’innovation nous permet de fournir des services fiables et performants, adaptés aux besoins spécifiques de chaque client.
            </motion.p>
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ fontSize: '1rem', marginBottom: '1rem', color: '#555' }}
            >
                Avec le CTIME, bénéficiez d’une rigueur professionnelle et d’une disponibilité optimale pour vos projets de :
            </motion.p>
            <motion.ul 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 1 }}
                style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '1rem' }}
            >
                <li>Mesures les plus exigeantes.</li>
                <li>Essais mécaniques.</li>
            </motion.ul>
        </section>
    );
};

export default AboutUs;
