const DetailsSection = ({ nomeImovel, localizacao, preco }) => {
  return (
    <div>
      <p className="text-black text-3xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        {preco ? `R$ ${preco}` : "Preço não informado"}
      </p>
      <p className="text-xl font-semibold mt-2 text-black line-clamp-2">
        {nomeImovel}
      </p>
      <p className="text-base mt-2 text-gray-500 font-medium">
        {localizacao || "Localização não compartilhada"}
      </p>
    </div>
  );
};

export default DetailsSection;
