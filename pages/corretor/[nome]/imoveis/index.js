import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import HeaderCorretor from "@/components/header_corretor";
import FavoritosCorretor from "@/components/favoritos_corretor";
import { useRouter } from "next/router";
import FooterLandCorretor from "@/components/footer_corretor";
import "../../../../app/globals.css";
import BannerPrincipal from "@/components/banner_corretor";
import CorretorDescSection from "@/components/corretorDescSection";
import { motion } from "framer-motion";

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
