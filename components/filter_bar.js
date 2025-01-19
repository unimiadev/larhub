import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaHome, FaDollarSign } from "react-icons/fa";

const FilterBar = ({ onFilterChange, onResetFilters }) => {
  const [tipo, setTipo] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [nomeImovel, setNomeImovel] = useState("");

  useEffect(() => {
    const filters = {
      tipo: tipo,
      precoMin: precoMin ? parseFloat(precoMin) : null,
      precoMax: precoMax ? parseFloat(precoMax) : null,
      nomeImovel: nomeImovel,
    };
    onFilterChange(filters);
  }, [tipo, precoMin, precoMax, nomeImovel]);

  const handleReset = () => {
    setTipo("");
    setPrecoMin("");
    setPrecoMax("");
    setNomeImovel("");
    onResetFilters();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {/* Tipo de Imóvel */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Imóvel
          </label>
          <div className="relative">
            <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 text-gray-800 outline-none focus:ring-2 focus:ring-secondary-100/20 appearance-none border border-gray-200 hover:border-secondary-100 transition-colors duration-300"
            >
              <option value="">Todos os Tipos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Terreno">Terreno</option>
              <option value="Comercial">Comercial</option>
              <option value="Rural">Rural</option>
            </select>
          </div>
        </div>

        {/* Preço Mínimo */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preço Mínimo
          </label>
          <div className="relative">
            <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              placeholder="Valor mínimo"
              value={precoMin}
              onChange={(e) => setPrecoMin(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 text-gray-800 outline-none focus:ring-2 focus:ring-secondary-100/20 border border-gray-200 hover:border-secondary-100 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Preço Máximo */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preço Máximo
          </label>
          <div className="relative">
            <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              placeholder="Valor máximo"
              value={precoMax}
              onChange={(e) => setPrecoMax(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 text-gray-800 outline-none focus:ring-2 focus:ring-secondary-100/20 border border-gray-200 hover:border-secondary-100 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Buscar Imóvel */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar Imóvel
          </label>
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Nome do imóvel"
              value={nomeImovel}
              onChange={(e) => setNomeImovel(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 text-gray-800 outline-none focus:ring-2 focus:ring-secondary-100/20 border border-gray-200 hover:border-secondary-100 transition-colors duration-300"
            />
          </div>
        </div>
      </motion.div>

      {/* Reset Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 flex justify-end"
      >
        <button
          onClick={handleReset}
          className="text-gray-600 hover:text-secondary-100 font-medium transition-colors duration-300 flex items-center gap-2"
        >
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Limpar Filtros
        </button>
      </motion.div>
    </div>
  );
};

export default FilterBar;
