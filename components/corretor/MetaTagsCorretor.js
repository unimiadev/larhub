import Head from 'next/head';

const MetaTagsCorretor = ({ corretor, logo }) => {
  const corretorName = corretor?.name || "Corretor";
  return (
    <Head>
      <title>{`${corretorName} - Imóveis`}</title>
      <meta property="og:title" content={`${corretorName} - Imóveis`} />
      <meta property="og:image" content={logo} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={`Confira os imóveis disponíveis com o corretor ${corretorName}`} />
      <meta property="og:url" content={`https://larhub.com.br/corretor/${corretorName}`} />
    </Head>
  );
};

export default MetaTagsCorretor;
