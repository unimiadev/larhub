import ImovelGridItem from "../imovei_grid_item";

const SimilarImoveisComponent = ({ imoveisSemelhantes, nomeCorretor }) => {
  if (!imoveisSemelhantes.length) {
    return (
      <p className="text-gray-500 text-center">
        Nenhum imóvel semelhante encontrado.
      </p>
    );
  }

  return (
    <section className="gap-16 bg-gray-20 md:h-full">
      <div className="mx-auto w-5/6 flex flex-col items-center justify-center py-24">
        <div className="text-center">
          <h2 className="text-black text-3xl font-bold">
            Imóveis <span className="text-secondary-100">Semelhantes</span>
          </h2>
          <p className="my-5 text-lg">
            Confira abaixo os imóveis semelhantes mais relevantes do
            gerenciamento imobiliário.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-8 gap-6">
          {imoveisSemelhantes.map((imovel, index) => (
            <>
              <ImovelGridItem
                imovel={imovel}
                nomeCorretor={nomeCorretor}
                id_imovel={imovel.id_imovel}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarImoveisComponent;
