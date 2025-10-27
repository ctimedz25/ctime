'use client';



export default function ithan1() {
  

  return (

    <div className="flex flex-col items-center w-1/2" >
    <div className="image-accordion-container">
      <div className="image-item" style={{ backgroundImage: 'url("https://www.lebon.pro/wp-content/uploads/2024/06/TRIDIM-OUTIL-1.png")' }}>
        <div className="overlay">
          <h3 className="img-title">Bras de mesure FARO QUANTUM</h3>
          <p>
            Capacité de contrôle : sphère de 3500 mm et plus, avec une répétabilité (2 sigma) de +/- 0,055 mm pour le test cône.
          </p>
        </div>
      </div>

      <div className="image-item" style={{ backgroundImage: 'url("https://www.lebon.pro/wp-content/uploads/2024/06/TRIDIM-OUTIL-2.png")' }}>
        <div className="overlay">
          <h3 className="img-title">Laser Tracker FARO VANTAGE</h3>
          <p>
            Enveloppe de travail : 70m (rayon : 35m), mesure en Xtreme ADM.
          </p>
        </div>
      </div>

      <style jsx>{`
        .image-accordion-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
        }
        .image-item {
          width: 300px; /* Adjust the width as needed */
          height: 200px; /* Adjust the height as needed */
          background-size: cover;
          background-position: center;
          position: relative;
          transition: flex 0.3s ease;
          cursor: pointer;
        }
        .image-item:hover {
          flex: 1.2; /* Scale the item on hover */
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .image-item:hover .overlay {
          opacity: 1; /* Show overlay on hover */
        }
        .img-title {
          margin: 0;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
    </div>
  
  );
}