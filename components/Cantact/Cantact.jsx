import Cantact_One from "./Cantact_One";
import Cantact_Two from "./Cantact_Two";

export default function Cantact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery px-6">
      <h1 className="mt-20 mb-6 text-center text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">
        <span className="text-[#C04040] italic drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] mr-3">
          N&apos;hésitez pas
        </span> 
        à nous contacter !
      </h1>
      <div className="flex gap-6 flex-col lg:flex-row w-full max-w-5xl">
        <Cantact_One />
        <Cantact_Two />
      </div>
    </div>
  );
}
