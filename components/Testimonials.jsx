// components/Testimonials.js

import { useEffect } from 'react';
import Script from 'next/script';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const Testimonials = () => {
  useEffect(() => {
    const initializeCarousel = () => {
      if (typeof window !== 'undefined') {
        const $ = require('jquery');
        require('owl.carousel');
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 2,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          },
        });
      }
    };

    initializeCarousel();
  }, []);

  return (
    <div>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        onLoad={() => console.log('jQuery loaded')}
      />
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Continues Testimonial</h2>
        <div className="owl-carousel owl-theme">
          {testimonials.map((testimonial, index) => (
            <div className="item" key={index}>
              <div className="card">
                <img src={testimonial.logo} alt="" className="card-logo" />
                <div className="card-body">
                  <p className="card-text text-center text-secondary">{testimonial.text}</p>
                  <div className="card-img-wrapper">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <h4 className="card-name text-uppercase text-center fs-5">{testimonial.name}</h4>
                  <p className="card-role text-center text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .card .card-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 10px;
          }

          .card-img-wrapper img {
            display: block;
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 50%;
            margin: 0 auto;
          }

          .card {
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 600px) {
            .card .card-logo {
              width: 60px;
              height: 60px;
            }
            .card-img-wrapper img {
              width: 40px;
              height: 40px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

const testimonials = [
  {
    logo: 'https://user-images.githubusercontent.com/78242022/268242274-808a779e-7026-487b-ae56-d2a0e9b5b192.png',
    text: 'Cannot recommend this plugin highly enough. Get the Pro version. Use the Slider and all your website dreams will come true.',
    image: 'https://user-images.githubusercontent.com/78242022/266013762-54201d6a-0923-4969-948c-790dec804253.png',
    name: 'Bliak Monk',
    role: 'React.JS Developer',
  },
  // Ajoutez d'autres témoignages ici
];

export default Testimonials;
