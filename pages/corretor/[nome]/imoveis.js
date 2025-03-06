import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import HeaderCorretor from "@/components/header_corretor";
import FavoritosCorretor from "@/components/favoritos_corretor";
import { useRouter } from "next/router";
import FooterLandCorretor from "@/components/footer_corretor";
import "../../../app/globals.css";
import BannerPrincipal from "@/components/banner_corretor";
import CorretorDescSection from "@/components/corretorDescSection";
import { motion } from "framer-motion";

const ImoveisCorretor = ({ filterType = "todos" }) => {
  const router = useRouter();
  const { nome: nomeCorretor } = router.query;
  const [items, setItems] = useState([]);
  const [logo, setLogo] = useState("");
  const [landingTitle, setLandingTitle] = useState("");
  const [imoveis, setImoveis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (!nomeCorretor) return;
        setIsLoading(true);

        const formattedName = nomeCorretor
          .replace(/-/g, " ")
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");

        const corretoresQuery = query(
          collection(db, "corretores"),
          where("name", "==", formattedName)
        );
        const corretoresSnapshot = await getDocs(corretoresQuery);

        if (!corretoresSnapshot.empty) {
          const corretorId = corretoresSnapshot.docs[0].id;

          const landingSnapshot = await getDocs(
            collection(db, "corretores", corretorId, "landing")
          );
          const landingData = landingSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          const imoveisSnapshot = await getDocs(
            collection(db, "corretores", corretorId, "imoveis")
          );
          const imoveisData = imoveisSnapshot.docs.map((doc) => doc.data());

          const corretores = [
            {
              ...corretoresSnapshot.docs[0].data(),
              id: corretorId,
              landing: landingData,
              imoveis: imoveisData,
            },
          ];

          if (corretores.length > 0 && corretores[0].landing.length > 0) {
            setLogo(
              corretores[0].landing[0].appBar.logo ||
                "https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/logo_lar.png?alt=media&token=094a92ce-704c-4df1-b657-65bd85225875"
            );
            setLandingTitle(corretores[0].landing[0].titulo || "");
          }

          setItems(corretores);
          setImoveis(corretores[0]?.imoveis || []);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (nomeCorretor) {
      fetchItems();
    }
  }, [nomeCorretor]);

  const filtrarImoveis = (imoveis, filterType) => {
    switch (filterType) {
      case "aluguel":
        return imoveis.filter((imovel) => imovel.tipo === "aluguel");
      case "compra":
        return imoveis.filter((imovel) => imovel.tipo === "compra");
      case "todos":
      default:
        return imoveis;
    }
  };

  const imoveisFavoritos = filtrarImoveis(
    imoveis.filter((imovel) => {
      if (items.length > 0 && items[0].imoveis_favoritos) {
        return imovel.visibilidade === 1;
      }
      return false;
    }),
    filterType
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-secondary-100 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <HeaderCorretor
        logoUrl={logo}
        nomeCorretor={nomeCorretor}
        contato={items[0]?.contato}
      />

      {landingTitle && (
        <div className="text-left">
          <BannerPrincipal titulo={landingTitle} />
        </div>
      )}

      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-16">
        {imoveisFavoritos.length > 0 ? (
          <FavoritosCorretor
            nomeCorretor={nomeCorretor}
            imoveis={imoveisFavoritos}
            isMostrarMais={false}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-lg text-gray-600">
              Nenhum imóvel encontrado para{" "}
              {filterType === "aluguel" ? "aluguel" : "compra"}.
            </p>
          </motion.div>
        )}
      </div>

      <section className="bg-white py-16">
        <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CorretorDescSection
              description="Estou dedicado a ajudar você a encontrar a casa dos seus sonhos. Seja na compra, venda ou investimento, ofereço um serviço personalizado e orientação especializada em cada etapa do processo. Vamos transformar seus sonhos em realidade!"
              name={items[0]?.name || nomeCorretor}
              imageUrl={logo}
              contato={items[0]?.contato}
              redesSociais={items[0]?.contato?.redes_sociais}
            />
          </motion.div>
        </div>
      </section>

      <FooterLandCorretor
        logoUrl={logo}
        nomeCorretor={nomeCorretor}
        contato={items[0]?.contato}
        redesSociais={items[0]?.contato?.redes_sociais}
      />
    </div>
  );
};

export default ImoveisCorretor;
