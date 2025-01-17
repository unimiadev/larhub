"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/firebase";
import PreLaunchModal from "../auth/PreLaunchModal";

const HeaderLandLarHub = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Soluções", href: "#solution" },
    { label: "Benefícios", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
    { label: "Planos", href: "#plans" },
    { label: "Contato", href: "#contact" },
  ];

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <motion.img
            src="https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/logo_larhub_semfundo.png?alt=media&token=e539ef33-1e3b-4adb-948d-287dadaaaf58"
            alt="Logo LarHub"
            className="h-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-secondary-100 transition-colors duration-300`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-secondary-100"
                  initial={{ width: 0 }}
                  variants={{
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            {/* Auth Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="#"
                onClick={handleLoginClick}
                className="flex items-center gap-2 bg-secondary-100 text-white px-6 py-3 rounded-xl hover:bg-primary-100 transition-all duration-300"
              >
                <FaUserCircle className="text-lg transition-transform duration-300 group-hover:scale-110" />
                <span>Login</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="rounded-full p-2 md:hidden"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuToggled ? (
              <FaTimes
                className={isScrolled ? "text-gray-800" : "text-white"}
                size={24}
              />
            ) : (
              <FaBars
                className={isScrolled ? "text-gray-800" : "text-white"}
                size={24}
              />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuToggled && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuToggled(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="py-4 text-gray-800 hover:text-secondary-100 transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuToggled(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <Link
                  href="#"
                  onClick={handleLoginClick}
                  className="mt-4 flex items-center gap-2 bg-secondary-100 text-white px-6 py-3 rounded-xl hover:bg-primary-100 transition-all duration-300"
                  onClick={() => setIsMenuToggled(false)}
                >
                  <FaUserCircle />
                  <span>Login</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add modal */}
      <PreLaunchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planType="login"
      />
    </header>
  );
};

export default HeaderLandLarHub;
