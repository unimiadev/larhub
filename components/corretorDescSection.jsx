import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CorretorDescSection = ({ description, name, imageUrl, contato, redesSociais }) => {
  console.log('CorretorDescSection Full Props:', { 
    contato, 
    redesSociais,
    nestedRedesSociais: contato?.redes_sociais,
    hasInstagram: redesSociais?.instagram || contato?.redes_sociais?.instagram,
    hasFacebook: redesSociais?.facebook || contato?.redes_sociais?.facebook,
    hasLinkedin: redesSociais?.linkedin || contato?.redes_sociais?.linkedin
  });

  const socialLinks = [
    contato?.celular && {
      icon: <FaWhatsapp size={24} />,
      url: `https://wa.me/55${contato?.celular?.replace(/\D/g, '')}?text=Olá ${name}, gostaria de mais informações sobre os imóveis.`,
      label: "WhatsApp",
    },
    redesSociais?.instagram && {
      icon: <FaInstagram size={24} />,
      url: redesSociais.instagram,
      label: "Instagram",
    },
    redesSociais?.facebook && {
      icon: <FaFacebook size={24} />,
      url: redesSociais.facebook,
      label: "Facebook",
    },
    redesSociais?.linkedin && {
      icon: <FaLinkedin size={24} />,
      url: redesSociais.linkedin,
      label: "LinkedIn",
    },
    contato?.email && {
      icon: <FaEnvelope size={24} />,
      url: `mailto:${contato.email}`,
      label: "Email",
    },
  ].filter(Boolean);

  console.log('Filtered Social Links:', socialLinks);

  return (
    <section id="sobre" className="bg-white pt-16 md:pt-24 overflow-hidden">
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

        {/* Content */}
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
              SOBRE
            </motion.span>
            <h2 className="text-4xl font-extrabold text-black relative z-10">
              Conheça seu{" "}
              <span className="text-secondary-100 relative inline-block">
                corretor
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-secondary-100"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={imageUrl || "/assets/corretor-contato-default.jpg"}
                  alt={name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/corretor-contato-default.jpg";
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full md:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900">{name}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>

              {/* Social Links - Only show if there are any */}
              {socialLinks && socialLinks.length > 0 && (
                <div className="flex items-center gap-6">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-100 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              )}

              {/* Contact Button - Only show if WhatsApp number exists */}
              {contato?.celular && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`https://wa.me/55${contato.celular.replace(/\D/g, '')}?text=Olá ${name}, gostaria de mais informações sobre os imóveis.`}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-secondary-100 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-100 transition-colors duration-300"
                  >
                    <FaWhatsapp size={20} />
                    Falar com {name.split(" ")[0]}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorretorDescSection;
