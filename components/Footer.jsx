import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-2 text-sm font-montserrat">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold mb-3 mt-3">Adresse</h3>
            <p className="text-black-600">Zone Industrielle ENMTP, Ain Smara</p>
            <p className="text-black-600">Constantine, Algérie</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 mt-3">Contact</h3>
            <p className="text-black-600 flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-red-600" />
              <a href="mailto:contact@ctime.dz" className="hover:text-black">contact@ctime.dz</a>
            </p>
            <p className="text-black-600 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2 text-red-600" /> 0660 64 05 32
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 mr--2 mt-3 ml-6">Réseaux</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
  <Link href="https://www.facebook.com/CtimeAlgerie/" target="_blank">
    <FaFacebookF className="text-blue-600 text-2xl md:text-2xl hover:scale-110 transition-transform" />
  </Link>
  <Link href="https://www.youtube.com/@ctimealgerie5011" target="_blank">
    <FaYoutube className="text-red-600 text-2xl md:text-2xl hover:scale-110 transition-transform" />
  </Link>
  <Link href="https://www.linkedin.com/company/ctimedz" target="_blank">
    <FaLinkedinIn className="text-blue-700 text-2xl md:text-2xl hover:scale-110 transition-transform" />
  </Link>
</div>

          </div>
          <div>
            <h3 className="font-bold mb-3 mt-3">Lien utile</h3>
            <Link href="https://www.industrie.gov.dz/fr/" target="_blank" className="text-black-600 hover:text-black">
              Ministère de l&apos;Industrie
            </Link>
          </div>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-col md:flex-row items-center md:justify-center w-full">
  <Image src="/ctime.png" alt="Logo" width={60} height={60} className="object-contain md:mr-2" />
  <p className="text-black-600 text-center md:text-left">
    &copy; {new Date().getFullYear()} CTIME. Tous droits réservés.
  </p>
</div>


      </div>
    </footer>
  );
}
