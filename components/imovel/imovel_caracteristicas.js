import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CaracteristicasLista = ({ imovelSelecionado }) => {
    const caracteristicasGerais = imovelSelecionado.caracteristicas["Caracteristicas Gerais"];

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    return (
        <div className="mx-auto w-5/6 flex flex-col pt-2 pb-12">
            <p className="font-medium">Características Gerais</p>
            <div className="text-primary-100 text-xl">
                {Array.isArray(caracteristicasGerais) && caracteristicasGerais.length > 0 ? (
                    <ul className="p-0 list-none">
                        {caracteristicasGerais.map((caracteristica, index) => (
                            <li key={index} className="text-gray-600 flex items-center gap-4 text-lg font-normal my-1">
                                <FaCheck className="mr-2 text-[#F2CD00]" />
                                {capitalizeFirstLetter(caracteristica)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="m-0 text-black">Nenhuma característica disponível.</p>
                )}
            </div>
        </div>
    );
};

export default CaracteristicasLista;