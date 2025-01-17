const PrecoImovel = ({ imovelSelecionado }) => {
  const originalPrice = imovelSelecionado.preco["preco_original"];
  const promotionalPrice = imovelSelecionado.preco["preco_promocional"];

  return (
    <section className="gap-16 bg-white md:h-full">
      <div className="mx-auto w-5/6 flex flex-col mt-4">
        <p
          className={`text-black text-4xl font-bold ${
            promotionalPrice ? "line-through" : ""
          }`}
        >
          R$ {originalPrice}
        </p>
        {promotionalPrice && (
        <div>
          <p className="m-0 font-medium">Preço promocional:</p>
          <h1 className="text-blue-600 m-0 text-2xl">{promotionalPrice}</h1>
        </div>
      )}
      </div>
    </section>
  );
};

export default PrecoImovel;
