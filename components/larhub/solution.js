"use client";

import React from "react";
import { FaHome, FaChartLine, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    title: "Gerenciamento simplificado",
    subtitle:
      "LarHub oferece todas as ferramentas necessárias para corretores de imóveis gerenciarem seus negócios de forma eficiente e lucrativa.",
    icon: <FaHome size={40} color="#000" />,
  },
  {
    title: "Acompanhamento em tempo real",
    subtitle: "Aumente sua produtividade e feche mais negócios com LarHub.",
    icon: <FaChartLine size={40} color="#000" />,
  },
  {
    title: "Controle total dos seus imóveis",
    subtitle: "Mantenha-se organizado e nunca perca uma oportunidade de venda.",
    icon: <FaTasks size={40} color="#000" />,
  },
];

const SolucaoLandLarHub = () => {
  return (
    <section id="solution" className="bg-white pt-16 md:pt-24 overflow-hidden">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 relative">
        {/* Decorative Elements */}
        <motion.div
          className="absolute -right-40 top-0 w-80 h-80 bg-primary-100/5 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute -left-40 bottom-0 w-96 h-96 bg-secondary-100/5 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* HEADER */}
        <div className="relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl font-black text-primary-100"
            >
              SOLUÇÕES
            </motion.span>
            <h2 className="text-4xl font-extrabold text-black relative z-10">
              Solução completa para{" "}
              <span className="text-secondary-100 relative inline-block">
                corretores
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-secondary-100"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </h2>
            <p className="mt-6 text-xl font-medium text-gray-600 max-w-3xl mx-auto">
              Gerencie seus imóveis de maneira eficiente, acompanhe suas vendas
              em tempo real e mantenha o controle total de suas oportunidades.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20 relative z-10 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`group ${
                items.length % 2 !== 0 && index === items.length - 1
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="bg-primary-100 rounded-2xl px-8 py-10 text-center transition-all duration-300 h-full relative">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      className="rounded-full bg-white/60 p-5 group-hover:rotate-12 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-extrabold mb-3 text-white">
                    {item.title}
                  </h4>
                  <p className="text-lg font-semibold text-white/90 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolucaoLandLarHub;
