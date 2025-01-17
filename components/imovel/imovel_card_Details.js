import React, { useEffect } from "react";
import { FaBed, FaCar, FaExpand, FaVectorSquare } from "react-icons/fa";

const Card = ({ icon, value, description }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-secondary-100/20 flex justify-center items-center w-10 h-10 rounded-full">
        {icon}
      </div>
      <div className="text-gray-600 text-lg font-medium">{value}</div>
      <div className="text-gray-600 text-lg font-medium">{description}</div>
    </div>
  );
};

const ImovelCardDetails = ({ imovel }) => {
  useEffect(() => {
    const addHoverEffect = () => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          Object.assign(card.style, cardHoverStyle);
        });
        card.addEventListener("mouseleave", () => {
          Object.assign(card.style, cardStyle);
        });
      });
    };

    addHoverEffect();

    return () => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-8 my-8 w-5/6 mx-auto">
      <Card
        icon={<FaExpand size={22} style={{ color: "#F2CD00" }} />}
        value={`${imovel.detalhes["area_total"]} m²`}
        description="Área total"
      />
      <Card
        icon={<FaVectorSquare size={22} style={{ color: "#F2CD00" }} />}
        value={`${imovel.detalhes["area_privativa"]} m²`}
        description="Área privativa"
      />
      <Card
        icon={<FaBed size={22} style={{ color: "#F2CD00" }} />}
        value={`${imovel.detalhes["total_dormitorios"]} | ${imovel.detalhes["total_suites"]}`}
        description="Dormitórios | Suítes"
      />
      <Card
        icon={<FaCar size={22} style={{ color: "#F2CD00" }} />}
        value={imovel.detalhes["vagas_garagem"]}
        description="Vagas Garagem"
      />
    </div>
  );
};

export default ImovelCardDetails;
