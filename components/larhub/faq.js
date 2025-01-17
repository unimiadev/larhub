"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";

const PerguntasLandLarHub = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Como posso começar a usar LarHub?",
      answer:
        "Você pode começar criando uma conta em nosso site e explorando todas as funcionalidades.",
    },
    {
      question: "LarHub é compatível com dispositivos móveis?",
      answer:
        "Sim, LarHub é compatível com dispositivos móveis para que você possa gerenciar seus imóveis em qualquer lugar.",
    },
    {
      question: "Posso acompanhar as vendas em tempo real?",
      answer:
        "Sim, LarHub oferece recursos de acompanhamento de vendas em tempo real, permitindo que você esteja sempre atualizado sobre o status de seus imóveis.",
    },
    {
      question: "Como LarHub pode ajudar no controle de oportunidades?",
      answer:
        "LarHub organiza e monitora todas as oportunidades de venda ou locação, garantindo que você não perca nenhuma chance de fechar negócios.",
    },
    {
      question: "Há suporte para exportar relatórios?",
      answer:
        "Sim, LarHub permite que você exporte relatórios detalhados sobre suas vendas, locações e desempenho dos imóveis.",
    },
    {
      question: "Como LarHub garante a segurança dos meus dados?",
      answer:
        "Levamos a segurança a sério e utilizamos tecnologias de criptografia para proteger todas as informações relacionadas aos seus imóveis e negócios.",
    },
  ];

  return (
    <section id="faq" className="bg-white pt-16 md:pt-24">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
        <motion.div className="flex flex-col items-center justify-center pb-24">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-primary-100"
            >
              FAQ
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-extrabold text-black relative z-10"
            >
              Perguntas frequentes sobre{" "}
              <span className="text-secondary-100 relative">
                LarHub
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-secondary-100"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-xl font-medium text-gray-600 max-w-2xl mx-auto"
            >
              Encontre respostas para as perguntas mais comuns sobre nosso
              software de gerenciamento imobiliário.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="bg-gray-50 rounded-2xl p-6 cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary-100/20"
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-100 transition-colors duration-300">
                      {item.question}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                        scale: activeIndex === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-secondary-100 flex-shrink-0"
                    >
                      <ExpandMore />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      height: activeIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-lg font-medium text-gray-600 border-t border-gray-200 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute top-20 -left-20 w-40 h-40 bg-primary-100/5 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-60 h-60 bg-secondary-100/5 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PerguntasLandLarHub;
