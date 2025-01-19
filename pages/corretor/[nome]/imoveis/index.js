import React from "react";
import HeaderCorretor from "../../components/HeaderCorretor";
import BannerPrincipal from "../../components/BannerPrincipal";

const ImoveisPage = ({ corretor, imoveis, logo }) => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderCorretor
        logoUrl={logo}
        nomeCorretor={corretor.name}
        contato={corretor.contato}
      />

      <BannerPrincipal
        titulo={`${corretor.name}`}
        subtitulo="Confira abaixo todos os imóveis disponíveis para você."
        alignment="left"
      />

      {/* ... rest of the component */}
    </div>
  );
};

export default ImoveisPage;
