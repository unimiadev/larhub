import { motion } from "framer-motion";
import { FaBed, FaBath, FaCar, FaRuler } from "react-icons/fa";

const ImovelCardDetails = ({ imovel }) => {
  const details = [
    {
      icon: <FaBed className="text-2xl text-secondary-100" />,
      label: "Quartos",
      value: imovel.detalhes.total_dormitorios || "N/A",
    },
    {
      icon: <FaBath className="text-2xl text-secondary-100" />,
      label: "Banheiros",
      value: imovel.detalhes.total_suites || "N/A",
    },
    {
      icon: <FaCar className="text-2xl text-secondary-100" />,
      label: "Vagas",
      value: imovel.detalhes.vagas_garagem || "N/A",
    },
    {
      icon: <FaRuler className="text-2xl text-secondary-100" />,
      label: "Área",
      value: imovel.detalhes.area_total
        ? `${imovel.detalhes.area_total}m²`
        : "N/A",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-secondary-100/10 rounded-xl">
          <FaRuler className="text-2xl text-secondary-100" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Detalhes do Imóvel</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {details.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="p-4 bg-secondary-100/5 rounded-full">
              {detail.icon}
            </div>
            <span className="text-sm text-gray-500">{detail.label}</span>
            <span className="text-lg font-semibold text-gray-800">
              {detail.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImovelCardDetails;
