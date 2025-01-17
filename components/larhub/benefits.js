"use client";

import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "@mui/material";

const BeneficioLandLarHub = () => {
  return (
    <section className="bg-white pt-16 md:pt-24 overflow-hidden">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 relative">
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-16 pb-24">
          {/* IMAGE */}
          <div className="flex justify-center md:w-1/2">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              alt="Benefícios LarHub"
              src="https://img.freepik.com/fotos-premium/um-monte-de-chaves-que-estao-em-uma-mesa_972324-110599.jpg?w=740"
              className="rounded-2xl w-full object-cover shadow-lg"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="md:w-1/2">
            {/* TITLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative">
                <motion.span
                  className="absolute -left-8 -top-8 text-8xl text-primary-100/10 font-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  01
                </motion.span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black relative">
                  Gerencie seus imóveis com{" "}
                  <span className="text-secondary-100 relative">
                    facilidade
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-secondary-100"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </span>
                </h2>
              </div>
              <p className="my-5 text-xl font-medium text-gray-600">
                Gerencie seus imóveis de maneira eficiente, acompanhe suas
                vendas em tempo real e mantenha o controle total de suas
                oportunidades para um negócio imobiliário mais lucrativo.
              </p>
            </motion.div>

            {/* BENEFITS LIST */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ul className="space-y-4 mt-8">
                {[0, 1, 2].map((index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-4 text-lg font-medium bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="bg-secondary-100 p-2 rounded-lg">
                      <FaCheckSquare className="text-black text-xl" />
                    </div>
                    <span className="text-gray-700">
                      {index === 0 &&
                        "+5,000 corretores já estão utilizando LarHub."}
                      {index === 1 &&
                        "Aumente sua produtividade e feche mais negócios."}
                      {index === 2 &&
                        "Gerencie seus clientes e imóveis de forma organizada."}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-16 py-24">
          {/* DESCRIPTION */}
          <div className="md:w-1/2">
            {/* TITLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative">
                <motion.span
                  className="absolute -left-8 -top-8 text-8xl text-primary-100/10 font-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  02
                </motion.span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black relative">
                  Controle total do seu negócio{" "}
                  <span className="text-secondary-100 relative">
                    imobiliário
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-secondary-100"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </span>
                </h2>
              </div>
              <p className="my-5 text-xl font-medium text-gray-600">
                Chega de complicações na gestão imobiliária. Você tem todas as
                ferramentas necessárias para gerenciar seus imóveis de forma
                eficiente. Acompanhe suas vendas em tempo real e tome decisões
                informadas para um negócio mais lucrativo.
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/"
                className="inline-block rounded-xl bg-secondary-100 px-10 py-3 hover:bg-primary-100 hover:text-white text-base font-semibold no-underline transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Saber Mais
              </Link>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:w-1/2">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              alt="Benefícios LarHub"
              src="https://img.freepik.com/fotos-premium/um-edificio-amarelo-com-o-numero-2-nele_1217673-52547.jpg?w=360"
              className="rounded-2xl w-full object-cover shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeneficioLandLarHub;
