import { useMemo } from 'react';
import Head from 'next/head';

const MetaTagsImovel = ({ imovelSelecionado, corretor, idImovel }) => {
  const nomeImovel = useMemo(
    () => imovelSelecionado?.detalhes?.["nome_imovel"] || "Imóvel",
    [imovelSelecionado]
  );

  const corretorName = useMemo(
    () => corretor?.name || "Corretor",
    [corretor]
  );

  const firstImage = useMemo(
    () => imovelSelecionado?.imagens?.[0] || corretor?.landing?.appBar?.logo,
    [imovelSelecionado, corretor]
  );

  return (
    <Head>
      <title>{`${nomeImovel} - ${corretorName}`}</title>
      <meta property="og:title" content={`${nomeImovel} - ${corretorName}`} />
      <meta property="og:image" content={firstImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={`Confira o imóvel ${nomeImovel} com o corretor ${corretorName}`} />
      <meta property="og:url" content={`https://larhub.com.br/corretor/${corretor?.id}/imoveis/${idImovel}`} />
    </Head>
  );
};

export default MetaTagsImovel;