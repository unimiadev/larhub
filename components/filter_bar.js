import React, { useState, useEffect } from "react";

const filters = [
  { label: "Terreno", value: "terreno" },
  { label: "Casa", value: "casa" },
];

const FilterBar = ({ onFilterChange, onResetFilters }) => {
  const [tipo, setTipo] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [aluguel, setAluguel] = useState("");
  const [nomeImovel, setNomeImovel] = useState("");

  useEffect(() => {
    onFilterChange({ tipo, precoMin, precoMax, aluguel, nomeImovel });
  }, [tipo, precoMin, precoMax, aluguel, nomeImovel]);

  const handleReset = () => {
    setTipo("");
    setPrecoMin("");
    setPrecoMax("");
    setAluguel("");
    setNomeImovel("");
    onResetFilters();
  };

  return (
    <section id="filter-corretor" className="gap-16 bg-white md:h-full">
      <div className="mx-auto w-5/6 grid sm:flex items-center justify-between pt-12 pb-0 gap-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Nome do Imóvel"
            value={nomeImovel}
            onChange={(e) => setNomeImovel(e.target.value)}
            className="w-full rounded-lg bg-gray-50 px-5 py-3 placeholder-primary-100 border border-gray-50 hover:border-primary-100 transition-all duration-300"
          />

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full rounded-lg bg-gray-50 px-5 py-3 placeholder-primary-100 border border-gray-50 hover:border-primary-100 transition-all duration-300"
          >
            <option value="" disabled>
              Tipo
            </option>
            {filters.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Preço mín."
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
            className="w-full rounded-lg bg-gray-50 px-5 py-3 placeholder-primary-100 border border-gray-50 hover:border-primary-100 transition-all duration-300"
          />
        </div>

        <button
          onClick={handleReset}
          className="rounded-md bg-secondary-100 px-10 py-3 hover:bg-primary-100 hover:text-white text-base font-normal no-underline transition-all duration-300 whitespace-nowrap"
        >
          Resetar Filtros
        </button>
      </div>
    </section>
  );
};

export default FilterBar;
