import React, { useState, useEffect } from "react";
import ImovelGridItem from "../components/imovei_grid_item";
import FilterBar from "./filter_bar";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FavoritosCorretor = ({
  imoveis,
  nomeCorretor,
  isMostrarMais,
  className,
}) => {
  const [filteredImoveis, setFilteredImoveis] = useState(imoveis);
  const [filters, setFilters] = useState({});
  const router = useRouter();

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

  const handleShowMore = () => {
    const formattedNomeCorretor = nomeCorretor.toLowerCase().replace(/ /g, "-");
    router.push(`/corretor/${formattedNomeCorretor}/imoveis/`);
  };

  if (!imoveis) {
    return <p>Carregando imóveis...</p>;
  }

  return (
    <section id="favorite-corretor" className="gap-16 bg-white md:h-full">
      <div className="mx-auto w-5/6 flex items-center justify-between py-16 gap-4">
        {filteredImoveis.length > 0 ? (
          <div className="w-full flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {filteredImoveis.map((imovel) => (
                <ImovelGridItem
                  key={imovel.id_imovel}
                  imovel={imovel}
                  nomeCorretor={nomeCorretor}
                  id_imovel={imovel.id_imovel}
                />
              ))}
            </div>
            {isMostrarMais && (
              <div className="w-full flex items-center justify-center mt-5">
                <button
                  onClick={handleShowMore}
                  className="rounded-md bg-secondary-100 px-10 py-3 hover:bg-primary-100 hover:text-white text-base font-normal no-underline transition-all duration-300 whitespace-nowrap"
                >
                  Ver Mais
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Nenhum imóvel encontrado para este corretor</p>
        )}
      </div>
    </section>
  );
};

FavoritosCorretor.propTypes = {
  imoveis: PropTypes.array.isRequired,
  nomeCorretor: PropTypes.string.isRequired,
  isMostrarMais: PropTypes.bool,
  className: PropTypes.string,
};

FavoritosCorretor.defaultProps = {
  isMostrarMais: false,
  className: "",
};

export default FavoritosCorretor;
