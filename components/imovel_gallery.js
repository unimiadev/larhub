import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaImages,
  FaExpand,
} from "react-icons/fa";

const ImovelImageGallery = ({ imagens }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % imagens.length);
  }, [imagens.length]);

  const previousImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imagens.length) % imagens.length
    );
  }, [imagens.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showLightbox) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          previousImage();
          break;
        case "Escape":
          setShowLightbox(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showLightbox, nextImage, previousImage]);

  if (!imagens?.length) {
    return (
      <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-100 rounded-2xl">
        <div className="text-center text-gray-500">
          <FaImages className="mx-auto text-4xl mb-4" />
          <p>Nenhuma imagem disponível</p>
        </div>
      </div>
    );
  }

  const remainingPhotos = imagens.length - 3;

  return (
    <>
      {/* Main Gallery Grid */}
      <div className="px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Featured Image */}
          <div className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            {imageErrors[0] ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center text-gray-500">
                  <FaImages className="mx-auto text-4xl mb-4" />
                  <p>Erro ao carregar a imagem</p>
                </div>
              </div>
            ) : (
              <div className="group relative h-full">
                <Image
                  src={imagens[0]}
                  alt="Imagem principal"
                  fill
                  className="object-cover"
                  onClick={() => setShowLightbox(true)}
                  onError={() => handleImageError(0)}
                  priority
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setShowLightbox(true)}
                    className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
                  >
                    <FaExpand className="text-sm" />
                    <span className="text-sm sm:text-base">
                      Ver todas as fotos ({imagens.length})
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Side Thumbnails - Now visible on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 relative">
            {imagens.slice(1, 3).map((imagem, index) => (
              <div
                key={index + 1}
                className="relative h-[150px] sm:h-[200px] md:h-full rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(index + 1);
                  setShowLightbox(true);
                }}
              >
                {imageErrors[index + 1] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center text-gray-500">
                      <FaImages className="mx-auto text-2xl mb-2" />
                      <p className="text-sm">Erro ao carregar</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full">
                    <Image
                      src={imagem}
                      alt={`Imagem ${index + 2}`}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(index + 1)}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FaExpand className="text-white text-xl" />
                    </div>
                  </div>
                )}
                {index === 1 && imagens.length > 3 && (
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <span className="text-white text-sm sm:text-lg font-medium">
                      +{imagens.length - 3} fotos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setShowLightbox(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 text-secondary-100 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                onClick={() => setShowLightbox(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaTimes size={24} />
              </motion.button>

              {/* Navigation buttons */}
              <motion.button
                className="absolute left-2 sm:left-8 text-secondary-100 p-2 sm:p-4 rounded-full hover:bg-white/10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                whileHover={{ scale: 1.1 }}
              >
                <FaArrowLeft size={20} className="sm:text-2xl" />
              </motion.button>

              {/* Image container */}
              <div className="relative w-full h-[70vh] sm:h-[80vh] max-w-5xl mx-auto px-12 sm:px-20">
                {imageErrors[currentImageIndex] ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <FaImages className="mx-auto text-6xl mb-4" />
                      <p>Erro ao carregar a imagem</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={imagens[currentImageIndex]}
                    alt={`Imagem ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    quality={90}
                    onError={() => handleImageError(currentImageIndex)}
                  />
                )}
              </div>

              <motion.button
                className="absolute right-2 sm:right-8 text-secondary-100 p-2 sm:p-4 rounded-full hover:bg-white/10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                whileHover={{ scale: 1.1 }}
              >
                <FaArrowRight size={20} className="sm:text-2xl" />
              </motion.button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm sm:text-base">
                {currentImageIndex + 1} / {imagens.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImovelImageGallery;
