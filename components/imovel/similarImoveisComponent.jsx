import ImovelGridItem from "../imovei_grid_item";

const SimilarImoveisComponent = ({ imoveisSemelhantes, nomeCorretor }) => {
  if (!imoveisSemelhantes.length) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
        <p className="text-gray-500 text-center">
          Nenhum imóvel semelhante encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Imóveis <span className="text-secondary-100">Semelhantes</span>
          </h2>
          <p className="mt-4 mb-8 text-gray-600">
            Confira abaixo os imóveis semelhantes mais relevantes do
            gerenciamento imobiliário.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {imoveisSemelhantes.map((imovel) => (
            <ImovelGridItem
              key={imovel.id_imovel}
              imovel={imovel}
              nomeCorretor={nomeCorretor}
              id_imovel={imovel.id_imovel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarImoveisComponent;
