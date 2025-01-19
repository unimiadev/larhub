import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import HeaderCorretor from "@/components/header_corretor";
import BannerPrincipal from "@/components/banner_corretor";
import FavoritosCorretor from "@/components/favoritos_corretor";
import FilterBar from "@/components/filter_bar";
import FooterLandCorretor from "@/components/footer_corretor";
import CorretorDescSection from "@/components/corretorDescSection";
import MetaTagsCorretor from "@/components/corretor/MetaTagsCorretor";
import { motion } from "framer-motion";
import "../../app/globals.css";

const Corretor = ({ corretor, imoveis, logo, landingTitle }) => {
  const [filteredImoveis, setFilteredImoveis] = useState(imoveis);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    applyFilters(filters);
  }, [filters, imoveis]);

  const applyFilters = (filters) => {
    const { tipo, precoMin, precoMax, aluguel, nomeImovel } = filters;

    const filtered = imoveis.filter((imovel) => {
      const matchesTipo = tipo ? imovel.tipo === tipo : true;
      const matchesPrecoMin = precoMin
        ? imovel.preco && imovel.preco.preco_original >= parseFloat(precoMin)
        : true;
      const matchesPrecoMax = precoMax
        ? imovel.preco && imovel.preco.preco_original <= parseFloat(precoMax)
        : true;
      const matchesAluguel = aluguel ? imovel.aluguel === aluguel : true;
      const matchesNomeImovel = nomeImovel
        ? imovel.detalhes.nome_imovel
            .toLowerCase()
            .includes(nomeImovel.toLowerCase())
        : true;

      return (
        matchesTipo &&
        matchesPrecoMin &&
        matchesPrecoMax &&
        matchesAluguel &&
        matchesNomeImovel
      );
    });

    setFilteredImoveis(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({});
  };

  if (!corretor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <MetaTagsCorretor corretor={corretor} logo={logo} />

      <HeaderCorretor
        logoUrl={logo}
        nomeCorretor={corretor.name}
        contato={corretor.contato}
      />

      {landingTitle && <BannerPrincipal titulo={landingTitle} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-16"
      >
        <FavoritosCorretor
          nomeCorretor={corretor.name}
          imoveis={filteredImoveis}
          isMostrarMais={true}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-16"
      >
        <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
          <CorretorDescSection
            description="Estou dedicado a ajudar você a encontrar a casa dos seus sonhos. Seja na compra, venda ou investimento, ofereço um serviço personalizado e orientação especializada em cada etapa do processo. Vamos transformar seus sonhos em realidade!"
            name={corretor.name}
            imageUrl={logo}
            contato={corretor.contato}
            redesSociais={corretor.contato.redes_sociais}
          />
        </div>
      </motion.div>

      <FooterLandCorretor
        logoUrl={logo}
        nomeCorretor={corretor.name}
        contato={corretor.contato}
        redesSociais={corretor.contato.redes_sociais}
        className="bg-white"
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { nome } = context.query;
  let corretor = null;
  let imoveis = [];
  let logo =
    "https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/logo_lar.png?alt=media&token=094a92ce-704c-4df1-b657-65bd85225875";
  let landingTitle = "";

  try {
    const formattedName = nome
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

    const q = query(
      collection(db, "corretores"),
      where("name", "==", formattedName)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const corretorData = doc.data();
      corretor = corretorData;

      const imoveisRef = collection(doc.ref, "imoveis");
      const imoveisQuery = query(imoveisRef, where("visibilidade", "==", 1));
      const imoveisSnapshot = await getDocs(imoveisQuery);
      imoveis = imoveisSnapshot.docs.map((imovelDoc) => ({
        id: imovelDoc.id,
        ...imovelDoc.data(),
      }));

      const landingRef = collection(doc.ref, "landing");
      const landingSnapshot = await getDocs(landingRef);

      if (!landingSnapshot.empty) {
        const landingDoc = landingSnapshot.docs[0];
        const landingData = landingDoc.data();
        logo = landingData.appBar?.logo || logo;
        landingTitle = landingData.titulo || "";
      }
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }

  return {
    props: {
      corretor,
      imoveis,
      logo,
      landingTitle,
    },
  };
}

export default Corretor;
