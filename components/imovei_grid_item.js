import React from "react";
import { useRouter } from "next/router";
import ImageComponent from "./imovel/cardImovel/imageComponent";
import DetailsSection from "./imovel/cardImovel/detailsSection";
import IconsSection from "./imovel/cardImovel/iconsSection";

const ImovelGridItem = ({ imovel, nomeCorretor, id_imovel }) => {
  const { preco, detalhes, imagens } = imovel;
  const router = useRouter();

  const formatNomeCorretor = (nome) => {
    if (typeof nome !== "string") {
      return "";
    }
    return nome.toLowerCase().replace(/\s+/g, "-");
  };

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleNavigation = () => {
    const formattedNomeCorretor = formatNomeCorretor(nomeCorretor);
    router.push(`/corretor/${formattedNomeCorretor}/imoveis/${id_imovel}`);
  };

  return (
    <div className="bg-white w-full cursor-pointer grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-md border-2 border-gray-100 hover:-translate-y-3 transition-all duration-300">
      <div className="w-full h-full">
        <ImageComponent
          codigoImovel={imovel.id_imovel}
          imagens={imagens}
          onClick={handleNavigation}
        />
      </div>

      <div className="col-span-2 flex flex-col justify-between p-4 w-full h-full">
        <DetailsSection
          nomeImovel={capitalizeFirstLetter(detalhes["nome_imovel"])}
          localizacao={detalhes["localizacao"]}
          preco={preco?.preco_original}
        />
        <IconsSection detalhes={detalhes} />
      </div>
    </div>
  );
};

export default ImovelGridItem;
