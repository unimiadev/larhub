import React from "react";
import { MdLocationOn } from "react-icons/md";

const ImovelHeader = ({ imovelSelecionado, idImovel }) => (
  <section className="gap-16 bg-white md:h-full">
    <div className="mx-auto w-5/6 flex flex-col py-2">
      <div className="w-full flex items-center justify-between gap-4">
        <h2 className="text-black text-xl font-semibold">
          {imovelSelecionado.detalhes["nome_imovel"]}
        </h2>
        <p className="text-gray-500 font-semibold m-0">Cód. {idImovel}</p>
      </div>

      {imovelSelecionado.localizacao.endereco.isRestrito === 1 && (
        <p className="text-black flex items-center m-0 flex-wrap text-base break-words">
          <MdLocationOn className="text-blue-600 mr-2" />
          {imovelSelecionado.localizacao.endereco.logradouro},{" "}
          {imovelSelecionado.localizacao.endereco.bairro},{" "}
          {imovelSelecionado.localizacao.endereco.cidade} -{" "}
          {imovelSelecionado.localizacao.endereco.estado}
        </p>
      )}
    </div>
  </section>
);

export default ImovelHeader;
