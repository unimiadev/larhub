import React, { useState, useEffect } from "react";
import ImovelGridItem from "../components/imovei_grid_item";
import FilterBar from "./filter_bar";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FavoritosCorretor = ({
  imoveis = [],
  nomeCorretor,
  isMostrarMais = false,
  titulo = "Imóveis",
  showAll = false,
  className,
}) => {
  const [filteredImoveis, setFilteredImoveis] = useState(imoveis);
  const [filters, setFilters] = useState({});
  const router = useRouter();

  useEffect(() => {
    applyFilters(filters);
  }, [filters, imoveis]);

  const applyFilters = (filters) => {
    const { tipo, precoMin, precoMax, nomeImovel } = filters;

    console.log("Applying filters:", filters); // Debug log

    const filtered = imoveis.filter((imovel) => {
      // Type filter - check detalhes.tipo_imovel instead of tipo
      const matchesTipo = !tipo || imovel.detalhes.tipo_imovel === tipo;

      // Price filters - ensure we're comparing numbers
      const imovelPreco = imovel.preco?.preco_original
        ? parseFloat(imovel.preco.preco_original)
        : 0;

      const matchesPrecoMin = !precoMin || imovelPreco >= precoMin;
      const matchesPrecoMax = !precoMax || imovelPreco <= precoMax;

      // Name filter
      const matchesNomeImovel =
        !nomeImovel ||
        imovel.detalhes.nome_imovel
          .toLowerCase()
          .includes(nomeImovel.toLowerCase());

      console.log("Filter matches for imovel:", imovel.id_imovel, {
        matchesTipo,
        matchesPrecoMin,
        matchesPrecoMax,
        matchesNomeImovel,
        imovelPreco,
        tipo: imovel.detalhes.tipo_imovel,
        filterTipo: tipo,
      }); // Debug log

      return (
        matchesTipo && matchesPrecoMin && matchesPrecoMax && matchesNomeImovel
      );
    });

    console.log("Filtered results:", filtered.length); // Debug log
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
    <section id="imoveis" className="bg-white">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Imóveis Disponíveis
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore nossa seleção de imóveis cuidadosamente escolhidos para você
          </motion.p>
        </div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <FilterBar
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
        </motion.div>

        {/* Properties Grid */}
        {filteredImoveis.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImoveis.map((imovel, index) => (
                <motion.div
                  key={imovel.id_imovel}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <ImovelGridItem
                    imovel={imovel}
                    nomeCorretor={nomeCorretor}
                    id_imovel={imovel.id_imovel}
                  />
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {isMostrarMais && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={handleShowMore}
                  className="bg-secondary-100 hover:bg-primary-100 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                >
                  Ver Mais Imóveis
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg mb-4">
              Nenhum imóvel encontrado com os filtros selecionados
            </p>
            <button
              onClick={handleResetFilters}
              className="text-secondary-100 hover:text-primary-100 font-medium transition-colors duration-300"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

FavoritosCorretor.propTypes = {
  imoveis: PropTypes.array.isRequired,
  nomeCorretor: PropTypes.string.isRequired,
  isMostrarMais: PropTypes.bool,
  titulo: PropTypes.string,
  showAll: PropTypes.bool,
  className: PropTypes.string,
};

export default FavoritosCorretor;
