'use client';

import SendEmail from "../../src/app/api/sendEmail";
import { useState } from "react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";

export default function Cantact_Two() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    number: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [btnText, setBtnText] = useState('Envoyer');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnText('Envoi en cours...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values, attachment }),
      });

      if (response.ok) {
        setAttachment(null);
        console.log('Email envoyé avec succès');
        setBtnText('Envoyé');
      } else {
        console.error('Erreur lors de l\'envoi de l\'email:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target.result.split(',')[1];
        setAttachment({ name: file.name, type: file.type, data: fileData });
      };
      reader.readAsDataURL(file);
    }
    setBtnText('Envoyer');
  };

  const handleValues = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumber = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setValues(prev => ({ ...prev, number: e.target.value }));
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen px-6">
      <form
        className="w-full max-w-[600px] p-6 bg-white/10 shadow-lg rounded-lg border border-transparent h-full min-h-[500px] flex flex-col justify-between overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 w-full flex-col sm:flex-row">
            <div className="w-full">
              <label className="mb-2 text-sm font-bold block text-white">Prénom :</label>
              <input
                type="text"
                name="firstname"
                className="rounded border-2 px-3 py-2 outline-none w-full border-gray-300"
                placeholder="Entrez votre prénom"
                value={values.firstname}
                onChange={handleValues}
              />
            </div>
            <div className="w-full">
              <label className="mb-2 text-sm font-bold block text-white">Nom :</label>
              <input
                type="text"
                name="lastname"
                className="rounded border-2 px-3 py-2 outline-none w-full border-gray-300"
                placeholder="Entrez votre nom"
                value={values.lastname}
                onChange={handleValues}
              />
            </div>
          </div>

          <div className="flex gap-4 w-full flex-col sm:flex-row">
            <div className="w-full">
              <label className="mb-2 text-sm font-bold block text-white">Email :</label>
              <input
                type="email"
                name="email"
                className="rounded border-2 px-3 py-2 outline-none w-full border-gray-300"
                placeholder="Entrez votre email"
                value={values.email}
                onChange={handleValues}
              />
            </div>
            <div className="w-full">
              <label className="mb-2 text-sm font-bold block text-white">Numéro :</label>
              <input
                type="text"
                name="number"
                className="rounded border-2 px-3 py-2 outline-none w-full border-gray-300"
                placeholder="Entrez votre numéro"
                value={values.number}
                onChange={handleNumber}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-bold block text-white">Message :</label>
            <textarea
              name="message"
              className="border border-gray-300 rounded-md h-[120px] px-3 py-2 text-black w-full resize-none"
              placeholder="Entrez votre message"
              value={values.message}
              onChange={handleValues}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-bold block text-white">Fichier :</label>
            <input type="file" id="ff" onChange={handleFileChange} className="hidden" />
            <label htmlFor="ff" className="cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-md w-fit hover:bg-gray-600 transition duration-300">
              Choisir un fichier
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-gray-900 font-bold rounded w-full mt-6 text-white px-4 py-2 hover:bg-gray-600 transition duration-300 ease-in-out"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}
