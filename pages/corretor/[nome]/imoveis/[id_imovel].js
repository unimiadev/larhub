import { useEffect, useState } from "react";
import Head from "next/head";
import { db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import HeaderCorretor from "@/components/header_corretor";
import ImovelImageGallery from "@/components/imovel_gallery";
import ImovelMap from "../../../../components/imovel/imovel_map";
import ImovelCardDetails from "../../../../components/imovel/imovel_card_Details";
import FooterLandCorretor from "@/components/footer_corretor";
import CaracteristicasLista from "@/components/imovel/imovel_caracteristicas";
import ImovelHeader from "@/components/imovel/imovel_header";
import PrecoImovel from "@/components/imovel/preco_imovel";
import ImovelDescricao from "@/components/imovel/imovel_desc";
import SimilarImoveisComponent from "@/components/imovel/similarImoveisComponent";
import MetaTagsImovel from "@/components/imovel/meta_tags_imovel";
import "../../../../app/globals.css";
import CorretorDescSection from "@/components/corretorDescSection";
import { motion } from "framer-motion";

const ImovelInfoPage = ({
  nomeCorretor,
  idImovel,
  corretor,
  imovelSelecionado,
  logo,
  imoveisSemelhantes,
}) => {
  const formattedName = nomeCorretor?.toLowerCase().replace(/\s+/g, "-");
  const imoveisUrl = `/corretor/${formattedName}/imoveis`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !imovelSelecionado) {
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
    <div className="bg-white font-roboto min-h-screen">
      <Head>
        <title>
          {imovelSelecionado
            ? `${imovelSelecionado.detalhes["nome_imovel"]} - ${corretor.name}`
            : "Imóvel"}
        </title>
        <MetaTagsImovel
          imovel={imovelSelecionado}
          corretor={corretor}
          logo={logo}
        />
      </Head>

      <HeaderCorretor
        logoUrl={logo}
        nomeCorretor={corretor.name}
        contato={corretor.contato}
        imoveisUrl={imoveisUrl}
      />

      {/* Main Content */}
      <main className="pt-20">
        {/* Gallery Section */}
        {imovelSelecionado.imagens && (
          <section className="w-full bg-white">
            <div className="mx-auto w-full xl:w-[85%] 2xl:w-3/4">
              <ImovelImageGallery imagens={imovelSelecionado.imagens} />
            </div>
          </section>
        )}

        {/* Price and Basic Info Section */}
        <section className="bg-white shadow-sm">
          <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-8">
            <PrecoImovel imovelSelecionado={imovelSelecionado} />
            <ImovelHeader
              imovelSelecionado={imovelSelecionado}
              idImovel={idImovel}
            />
          </div>
        </section>

        {/* Details Grid Section */}
        <section className="bg-white py-16">
          <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ImovelCardDetails imovel={imovelSelecionado} />
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white py-16">
          <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ImovelDescricao imovelSelecionado={imovelSelecionado} />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CaracteristicasLista imovelSelecionado={imovelSelecionado} />
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        {imovelSelecionado.localizacao && (
          <section className="bg-white py-16">
            <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className=" overflow-hidden shadow-lg">
                  <ImovelMap location={imovelSelecionado.localizacao} />
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Similar Properties Section */}
        <section className="bg-white py-16">
          <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SimilarImoveisComponent
                imoveisSemelhantes={imoveisSemelhantes}
                nomeCorretor={nomeCorretor}
              />
            </motion.div>
          </div>
        </section>

        {/* Agent Info Section */}
        <section className="bg-white py-16">
          <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CorretorDescSection
                description="Estou dedicado a ajudar você a encontrar a casa dos seus sonhos. Seja na compra, venda ou investimento, ofereço um serviço personalizado e orientação especializada em cada etapa do processo. Vamos transformar seus sonhos em realidade!"
                name={corretor.name}
                imageUrl={logo}
                contato={corretor.contato}
                redesSociais={corretor.contato?.redes_sociais}
              />
            </motion.div>
          </div>
        </section>
      </main>

      <FooterLandCorretor
        logoUrl={logo}
        nomeCorretor={corretor.name}
        contato={corretor.contato}
        redesSociais={corretor.contato?.redes_sociais}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { nome, id_imovel } = context.query;

  let corretor = null;
  let imovelSelecionado = null;
  let imoveisSemelhantes = [];

  try {
    const formattedName = nome
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");

    const corretoresQuery = query(
      collection(db, "corretores"),
      where("name", "==", formattedName)
    );
    const querySnapshot = await getDocs(corretoresQuery);

    if (!querySnapshot.empty) {
      const corretorDoc = querySnapshot.docs[0];
      const corretorData = corretorDoc.data();
      corretor = {
        ...corretorData,
        id: corretorDoc.id,
      };

      const landingRef = collection(
        db,
        "corretores",
        corretorDoc.id,
        "landing"
      );
      const landingSnapshot = await getDocs(landingRef);

      if (!landingSnapshot.empty) {
        const landingDoc = landingSnapshot.docs[0];
        const landingData = landingDoc.data();
        corretor.landing = landingData;
      } else {
        corretor.landing = null;
      }

      const imoveisRef = collection(
        db,
        "corretores",
        corretorDoc.id,
        "imoveis"
      );
      const imovelQuery = query(
        imoveisRef,
        where("id_imovel", "==", id_imovel)
      );
      const imovelSnapshot = await getDocs(imovelQuery);

      if (!imovelSnapshot.empty) {
        const imovelDoc = imovelSnapshot.docs[0];
        imovelSelecionado = {
          id: imovelDoc.id,
          ...imovelDoc.data(),
        };
      }

      const todosImoveisSnapshot = await getDocs(imoveisRef);
      const todosImoveis = todosImoveisSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((imovel) => imovel.id_imovel !== id_imovel);

      if (todosImoveis.length > 0) {
        imoveisSemelhantes = todosImoveis
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      nomeCorretor: nome,
      idImovel: id_imovel,
      corretor: corretor || null,
      imovelSelecionado: imovelSelecionado || null,
      imoveisSemelhantes: imoveisSemelhantes || [],
    },
  };
}

export default ImovelInfoPage;
