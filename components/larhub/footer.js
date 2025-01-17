"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook size={20} />, href: "/" },
  { icon: <FaTwitter size={20} />, href: "/" },
  { icon: <FaInstagram size={20} />, href: "/" },
  { icon: <FaLinkedin size={20} />, href: "/" },
];

const FooterLandLarHub = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 overflow-hidden">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 relative">
        {/* Enhanced Decorative Elements */}
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

        {/* Content */}
        <div className="relative z-10">
          {/* Main Content */}
          <div className="border-t border-gray-100 pt-12 pb-8">
            <motion.div
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo with enhanced hover effect */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <motion.div
                  className="absolute inset-0 bg-secondary-100/20 blur-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/logo_larhub_semfundo.png?alt=media&token=e539ef33-1e3b-4adb-948d-287dadaaaf58"
                  alt="Logo LarHub"
                  className="h-16 relative z-10"
                />
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                className="flex gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-gray-50 p-3 rounded-full text-gray-600 hover:text-white hover:bg-primary-100 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {["Termos de Uso", "Política de Privacidade", "Contato"].map(
                  (text, index) => (
                    <motion.a
                      key={index}
                      href={text === "Contato" ? "#contact" : "/"}
                      className="text-gray-600 hover:text-secondary-100 font-medium relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      {text}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-100 group-hover:w-full transition-all duration-300"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.a>
                  )
                )}
              </motion.div>

              {/* Copyright Text */}
              <motion.div
                className="mt-12 border-t border-gray-100 pt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-base text-gray-600 font-medium">
                  © 2024 LarHub. Todos os direitos reservados.
                </p>
                <p className="text-base text-gray-500 mt-1">
                  Desenvolvido por{" "}
                  <span className="text-primary-100 font-semibold hover:text-secondary-100 cursor-pointer transition-colors duration-300">
                    Expert Vision
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLandLarHub;
