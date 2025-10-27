import Image from 'next/image';
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";

export default function Cantact_One() {
  return (
    <div className="w-full lg:w-1/2 mt-5 flex flex-col gap-3 bg-transparent p-6 rounded-lg mb-20">

      {/* Téléphone */}
      <div className="flex items-center gap-2.5 border border-transparent rounded-md px-4 py-2 bg-white/10 shadow-md hover:shadow-red-500/50 transition-transform duration-300 hover:scale-105">
        <Image
          src="/phone.png"
          alt="Aide d'entreprise"
          title="Aide d'entreprise"
          draggable="false"
          loading="lazy"
          width={40}
          height={40}
          className="inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover w-9 h-9 sm:w-10 sm:h-10"
          style={{ backgroundColor: 'rgb(171, 70, 210)' }}
        />
        <div>
          <h5 className="mb-0 font-bold"></h5>
          <p className="text-white mb-0 text-sm flex gap-1 font-montserrat font-bold">
            Tel : 0660 64 05 32
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2.5 border border-transparent rounded-md px-4 py-2 bg-white/10 shadow-md hover:shadow-red-500/50 transition-transform duration-300 hover:scale-105">
        <Image
          src="/communication.png"
          alt="Préoccupations RH"
          title="Préoccupations RH"
          draggable="false"
          loading="lazy"
          width={40}
          height={40}
          className="object-cover w-10 h-10"
        />
        <div>
          <p className="text-white mb-0 text-sm flex gap-1 font-montserrat font-bold">
            Email: contact@ctime.dz
          </p>
        </div>
      </div>

      {/* Adresse */}
      <div className="border border-transparent rounded-md px-4 py-2 bg-white/10 shadow-md hover:shadow-red-500/50 transition-transform duration-300 hover:scale-105 w-full">
        <div className="flex items-center gap-2.5">
          <Image
            src="/placeholder.png"
            alt="Soutien technique"
            title="Soutien technique"
            draggable="false"
            loading="lazy"
            width={40}
            height={40}
            className="object-cover w-10 h-10"
          />
          <div>
            <p className="text-white mb-0 text-sm font-montserrat font-bold">
              Zone Industrielle ENMTP – Ain Smara
            </p>
          </div>
        </div>

        {/* Carte Google Maps intégrée dans le cadre */}
        <div className="mt-4 w-full h-[300px] overflow-hidden rounded-md border border-transparent">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.887071427181!2d6.509229274926323!3d36.290789896250764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f17b410be45d25%3A0x13811453f5f719bf!2sCTIME!5e0!3m2!1sen!2sdz!4v1731311611023!5m2!1sen!2sdz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>
    </div>
  );
}
