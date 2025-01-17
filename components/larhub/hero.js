"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

const TituloLandLarHub = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-white pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 relative">
        {/* Decorative Elements */}
        <motion.div
          className="absolute -right-40 top-0 w-96 h-96 bg-primary-100/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute -left-40 bottom-0 w-[500px] h-[500px] bg-secondary-100/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Main Container */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative group"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4 },
          }}
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            className="relative h-[550px] md:h-[750px] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/assets/hero.jpg"
              alt="Casa"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <motion.div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-secondary-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1 bg-secondary-100 mb-8"
                />
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-6xl leading-tight font-extrabold text-white mb-4 md:mb-6 px-4 sm:px-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Sua plataforma de{" "}
                  <span className="text-secondary-100">
                    gerenciamento imobiliário
                  </span>
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-2xl mb-6 md:mb-12 px-4 sm:px-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Gerencie seus imóveis de forma eficiente e fácil com LarHub.
                  Encontre tudo que você precisa em um só lugar.
                </motion.p>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-[1px] w-12 bg-white/50" />
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaArrowDown className="text-white/50" />
                  </motion.div>
                  <span className="text-white/50 text-sm font-medium">
                    Role para descobrir mais
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TituloLandLarHub;
