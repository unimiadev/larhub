import Image from "next/image"; // Usando Image do Next.js para otimização
import React from "react";

const ImageComponent = ({ imagens, onClick, codigoImovel }) => {
  return (
    <button
      className="relative w-full h-full"
      onClick={onClick}
    >
      {imagens && imagens.length > 0 ? (
        <img
          alt="Imagem do Imóvel"
          src={imagens[0]}
          className="w-full h-full object-cover cursor-pointer rounded-s-md"
        />
      ) : (
        <img
          alt="Imagem não disponível"
          src="https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/sem-imagem-disponivel.png?alt=media&token=063ccd90-633f-4187-9c82-5430271d70f8"
          className="w-full h-full rounded-s-md object-cover cursor-pointer"
        />
      )}
      {codigoImovel && (
        <div className="absolute top-2 left-2 bg-secondary-100 text-white text-xs px-2 py-1 rounded shadow-md">
          {codigoImovel}
        </div>
      )}
    </button>
  );
};

export default ImageComponent;