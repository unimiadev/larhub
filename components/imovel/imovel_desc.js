import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const ImovelDescricao = ({ imovelSelecionado }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-secondary-100/10 rounded-xl">
          <FaHome className="text-2xl text-secondary-100" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Descrição do Imóvel
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg max-w-none text-gray-600"
      >
        <p className="whitespace-pre-line">
          {imovelSelecionado.descricao || "Descrição não disponível"}
        </p>
      </motion.div>
    </div>
  );
};

export default ImovelDescricao;
