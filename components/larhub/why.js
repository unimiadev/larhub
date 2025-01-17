"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@mui/material";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const PorqueLandLarHub = () => {
  const benefits = [
    "Plataforma intuitiva e fácil de usar",
    "Suporte técnico especializado",
    "Atualizações constantes",
  ];

  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 relative">
        {/* Decorative Elements */}
        <motion.div
          className="absolute -right-40 top-0 w-80 h-80 bg-primary-100/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute -left-40 bottom-0 w-96 h-96 bg-secondary-100/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Content Container */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-10 -left-10 text-8xl font-black text-primary-100/10"
              >
                WHY
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 relative z-10 mb-6">
                Por que escolher{" "}
                <span className="text-primary-100 relative inline-block">
                  LarHub
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-primary-100"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </span>
                ?
              </h2>
              <p className="text-xl font-medium text-gray-600 mb-8">
                Descubra por que tantos corretores de imóveis estão escolhendo
                LarHub como sua plataforma de gerenciamento preferida.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-secondary-100 rounded-full p-2">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg font-medium text-gray-700">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-block"
              >
                <Link
                  href="/"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-100 to-secondary-100 px-8 py-3 text-white font-semibold no-underline transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Saber Mais
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <img
                  src="https://img.freepik.com/fotos-gratis/vista-da-cidade-com-predios-de-apartamentos-e-vegetacao-verde_23-2150439367.jpg"
                  alt="LarHub Platform"
                  className="w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-secondary-100/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueLandLarHub;
