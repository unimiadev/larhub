import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const HeaderCorretor = ({ logoUrl, nomeCorretor, contato }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = contato?.celular
    ? `https://wa.me/55${contato.celular.replace(
        /\D/g,
        ""
      )}?text=Olá ${nomeCorretor}, gostaria de mais informações sobre os imóveis.`
    : null;

  // Use default logo if no logo provided or on error
  const finalLogoUrl =
    imgError || !logoUrl ? "/assets/logo_larhub_semfundo.png" : logoUrl;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo with fallback */}
          <Link href="/" className="relative z-10">
            <Image
              src={finalLogoUrl}
              alt="Logo"
              width={120}
              height={40}
              className={`h-10 w-auto transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-90 hover:opacity-100"
              }`}
              priority
              unoptimized
              onError={() => {
                console.log("Logo load error, using default logo");
                setImgError(true);
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#imoveis"
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-primary-100"
                  : "text-white hover:text-secondary-100"
              }`}
              scroll={true}
            >
              Imóveis
            </Link>
            <Link
              href="#sobre"
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-primary-100"
                  : "text-white hover:text-secondary-100"
              }`}
            >
              Sobre
            </Link>
            {whatsappLink && (
              <Link
                href={whatsappLink}
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-secondary-100 px-6 py-2.5 text-white font-semibold transition-all duration-300 hover:bg-primary-100 hover:shadow-lg"
              >
                <FaWhatsapp />
                Contato
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10"
          >
            {isOpen ? (
              <FaTimes
                className={scrolled ? "text-gray-800" : "text-white"}
                size={24}
              />
            ) : (
              <FaBars
                className={scrolled ? "text-gray-800" : "text-white"}
                size={24}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <Link
                  href="#imoveis"
                  className="text-gray-700 hover:text-primary-100 font-medium"
                  onClick={() => setIsOpen(false)}
                  scroll={true}
                >
                  Imóveis
                </Link>
                <Link
                  href="#sobre"
                  className="text-gray-700 hover:text-primary-100 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </Link>
                {whatsappLink && (
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-xl bg-secondary-100 px-6 py-2.5 text-white font-semibold transition-all duration-300 hover:bg-primary-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaWhatsapp />
                    Contato
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default HeaderCorretor;
