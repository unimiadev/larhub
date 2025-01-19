import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FooterLandCorretor = ({
  logoUrl,
  nomeCorretor,
  contato,
  redesSociais,
}) => {
  const [imgError, setImgError] = useState(false);

  // Use default logo if no logo provided or on error
  const finalLogoUrl =
    imgError || !logoUrl ? "/assets/logo_larhub_semfundo.png" : logoUrl;

  console.log("Footer Props:", {
    logoUrl,
    finalLogoUrl,
    hasError: imgError,
  });

  // Only create social links that exist in Firebase
  const socialLinks = [
    contato?.celular && {
      icon: <FaWhatsapp size={20} />,
      href: `https://wa.me/55${contato?.celular?.replace(
        /\D/g,
        ""
      )}?text=Olá ${nomeCorretor}, gostaria de mais informações sobre os imóveis.`,
      label: "WhatsApp",
    },
    redesSociais?.instagram && {
      icon: <FaInstagram size={20} />,
      href: redesSociais.instagram,
      label: "Instagram",
    },
    redesSociais?.facebook && {
      icon: <FaFacebook size={20} />,
      href: redesSociais.facebook,
      label: "Facebook",
    },
    redesSociais?.linkedin && {
      icon: <FaLinkedin size={20} />,
      href: redesSociais.linkedin,
      label: "LinkedIn",
    },
  ].filter(Boolean); // Remove undefined entries

  console.log("Filtered Social Links:", socialLinks);

  return (
    <footer className="bg-white">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={finalLogoUrl}
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                onError={() => {
                  console.log("Logo load error, using default logo");
                  setImgError(true);
                }}
                unoptimized
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600"
            >
              Encontre o imóvel dos seus sonhos com {nomeCorretor}. Oferecemos
              um serviço personalizado e profissional para ajudá-lo em cada
              etapa da sua jornada imobiliária.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-gray-900"
            >
              Links Rápidos
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col space-y-3"
            >
              <Link
                href="#imoveis"
                className="text-gray-600 hover:text-primary-100 transition-colors duration-300"
                scroll={true}
              >
                Imóveis
              </Link>
              <Link
                href="#sobre"
                className="text-gray-600 hover:text-primary-100 transition-colors duration-300"
              >
                Sobre
              </Link>
              <Link
                href="#contato"
                className="text-gray-600 hover:text-primary-100 transition-colors duration-300"
              >
                Contato
              </Link>
            </motion.div>
          </div>

          {/* Social Links - Only show if there are any */}
          {socialLinks.length > 0 && (
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-semibold text-gray-900"
              >
                Redes Sociais
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex space-x-4"
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="text-gray-600 hover:text-primary-100 transition-colors duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </motion.div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm"
        >
          © {new Date().getFullYear()} LarHub. Todos os direitos reservados.
          <br />
          Desenvolvido por Expert Vision
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterLandCorretor;
