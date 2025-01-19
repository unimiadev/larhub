import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const BannerPrincipal = ({ titulo }) => {
  const [imgError, setImgError] = useState(false);

  // Extract data from titulo object
  const bannerTitle = typeof titulo === "object" ? titulo.titulo_1 : titulo;
  const bannerSubtitle = typeof titulo === "object" ? titulo.subtitulo_1 : "";
  const bannerText = typeof titulo === "object" ? titulo.texto_1 : "";
  const bannerImage = typeof titulo === "object" ? titulo.link_imagem : "";

  const defaultText =
    "Explore nossa seleção exclusiva de imóveis cuidadosamente selecionados para você. Seja para comprar, vender ou investir, estamos aqui para ajudar você a encontrar a propriedade perfeita.";

  // Use default image if no image provided or on error
  const imageUrl =
    imgError || !bannerImage ? "/assets/corretor-default.jpg" : bannerImage;

  console.log("Banner Image Data:", {
    originalImage: bannerImage,
    hasError: imgError,
    finalImageUrl: imageUrl,
  });

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
          onError={() => {
            console.log("Image load error, using default image");
            setImgError(true);
          }}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-[95%] lg:w-[85%] xl:w-3/4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl"
        >
          {bannerTitle && (
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {bannerTitle}
            </motion.h1>
          )}

          {bannerSubtitle && (
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {bannerSubtitle}
            </motion.h2>
          )}

          <motion.p
            className="text-lg text-white/80 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {bannerText || defaultText}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
              Role para ver os imóveis
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerPrincipal;
