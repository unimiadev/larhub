import { motion } from "framer-motion";
import { FaCheck, FaList } from "react-icons/fa";

const CaracteristicasLista = ({ imovelSelecionado }) => {
  const caracteristicas =
    imovelSelecionado.caracteristicas?.["Caracteristicas Gerais"] || [];

  if (!caracteristicas.length) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-secondary-100/10 rounded-xl">
          <FaList className="text-2xl text-secondary-100" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Características Gerais
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caracteristicas.map((caracteristica, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 bg-secondary-100/10 rounded-full">
              <FaCheck className="text-sm text-secondary-100" />
            </div>
            <span className="text-gray-600 uppercase">{caracteristica}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaracteristicasLista;
