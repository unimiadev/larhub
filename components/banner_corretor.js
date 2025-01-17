import React from "react";

const BannerPrincipal = ({ titulo }) => {
  if (!titulo) {
    return (
      <div className="text-center py-5 text-xl text-gray-600">
        Dados do banner não encontrados
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-[340px] overflow-hidden relative bg-gray-100">
      <div className="relative w-full h-full">
        <img
          src={titulo.link_imagem}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100/50 to-black/70"></div>
        <div className="absolute bottom-5 left-5 text-white font-bold py-3 px-6 rounded-md bg-primary-100/40 backdrop-blur-md shadow-lg text-6xl">
          {titulo.titulo_1}
        </div>
      </div>
    </div>
  );
};

export default BannerPrincipal;
