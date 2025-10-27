'use client';
import Image from 'next/image';

export default function Clients() {
  const clients = [
    { id: 1, name: "Client A", logo: "/ctime.png" },
    { id: 2, name: "Client B", logo: "/" },
    { id: 3, name: "Client C", logo: "/" },
    { id: 4, name: "Client D", logo: "/" },
    { id: 5, name: "Client E", logo: "/html.jpg" },
  ];

  return (
    <section className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-50 to-gray-200">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-red-600 drop-shadow-lg">Nos Clients</h1>

      <div className="overflow-hidden w-full max-w-6xl bg-white rounded-56 shadow-xl">
        <div className="flex py-2 items-center animate-marquee whitespace-nowrap">
          {clients.map((client) => (
            <div key={client.id} className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110 hover:shadow-xl border-2 border-gray-200 rounded-lg mx-4">
              <div className="relative w-40 h-40 rounded-full">
                  <img src={client.logo} alt="" className = 'w-full h-full rounded-full object-cover'  loading='lazy'/>
              </div>
              <p className="text-center text-gray-800 font-semibold text-lg mt-2">{client.name}</p>
            </div>
          ))}

          {/* Duplicate the clients for continuous scrolling */}
          {clients.map((client) => (
            <div key={client.id} className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110 hover:shadow-xl border-2 border-gray-200 rounded-lg mx-4">
            <div className="relative w-40 h-40 rounded-full">
                <img src={client.logo} alt="" className = 'w-full h-full rounded-full object-cover' loading='lazy'/>
            </div>
            <p className="text-center text-gray-800 font-semibold text-lg mt-2">{client.name}</p>
          </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 70s linear infinite; /* Smooth and extended animation */
        }
      `}</style>
    </section>
  );
}
