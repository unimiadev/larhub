import React from "react";

const FooterLandCorretor = ({ logoUrl, nomeCorretor }) => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 py-12">
      <div className="text-center">
        <div className="w-full flex items-center justify-center">
          <img src={logoUrl} alt="Logo LarHub" className="h-10 mr-8" />
          <p className="text-base font-medium">{nomeCorretor}</p>
        </div>
        <p className="text-sm md:text-base mt-8">
          © 2024 LarHub. Todos os direitos reservados. Desenvolvido por Expert
          Vision.
        </p>
      </div>
    </footer>
  );
};

export default FooterLandCorretor;
