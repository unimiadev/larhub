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

const ImovelInfoPage = ({
  nomeCorretor,
  idImovel,
  corretor,
  imovelSelecionado,
  logo,
  imoveisSemelhantes,
}) => {
  if (!imovelSelecionado) {
    return null;
  }

  return (
    <div className="bg-white font-roboto min-h-screen">
      <Head>
        <title>
          {imovelSelecionado
            ? `${imovelSelecionado.detalhes["nome_imovel"]} - ${corretor.name}`
            : "Imóvel"}
        </title>
        {imovelSelecionado && (
          <>
            <meta
              property="og:title"
              content={`${imovelSelecionado.detalhes["nome_imovel"]} - ${corretor.name}`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content={`Confira o imóvel ${imovelSelecionado.detalhes["nome_imovel"]} com o corretor ${corretor.name}`}
            />
            <meta
              property="og:url"
              content={`https://seusite.com/corretor/${corretor.name}/imoveis/${idImovel}`}
            />
            {imovelSelecionado.imagens &&
              imovelSelecionado.imagens.length > 0 && (
                <>
                  <meta
                    property="og:image"
                    content={imovelSelecionado.imagens[0]}
                  />
                  <meta property="og:image:width" content="300" />
                  <meta property="og:image:height" content="200" />
                </>
              )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={`${imovelSelecionado.detalhes["nome_imovel"]} - ${corretor.name}`}
            />
            <meta
              name="twitter:image"
              content={
                imovelSelecionado.imagens &&
                imovelSelecionado.imagens.length > 0
                  ? imovelSelecionado.imagens[0]
                  : corretor.landing.appBar.logo
              }
            />
            <meta name="twitter:image:width" content="300" />
            <meta name="twitter:image:height" content="200" />
            <meta
              name="twitter:description"
              content={`Confira o imóvel ${imovelSelecionado.detalhes["nome_imovel"]} com o corretor ${corretor.name}`}
            />
          </>
        )}
      </Head>

      <HeaderCorretor
        logoUrl={corretor.landing.appBar.logo}
        nomeCorretor={nomeCorretor}
      />

      {imovelSelecionado.imagens && (
        <ImovelImageGallery imagens={imovelSelecionado.imagens} />
      )}

      <PrecoImovel imovelSelecionado={imovelSelecionado} />
      <ImovelHeader imovelSelecionado={imovelSelecionado} idImovel={idImovel} />
      <ImovelCardDetails imovel={imovelSelecionado} />
      <ImovelDescricao imovelSelecionado={imovelSelecionado} />
      <CaracteristicasLista imovelSelecionado={imovelSelecionado} />

      {imovelSelecionado.localizacao && (
        <ImovelMap location={imovelSelecionado.localizacao} />
      )}

      <SimilarImoveisComponent
        imoveisSemelhantes={imoveisSemelhantes}
        nomeCorretor={nomeCorretor}
      />

      <CorretorDescSection
        description="Estou dedicado a ajudar você a encontrar a casa dos seus sonhos. Seja na compra, venda ou investimento, ofereço um serviço personalizado e orientação especializada em cada etapa do processo. Vamos transformar seus sonhos em realidade!"
        name={corretor.name}
        imageUrl={logo}
        socialLinks={[]}
      />

      <FooterLandCorretor
        logoUrl={corretor.landing.appBar.logo}
        nomeCorretor={corretor.name}
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
