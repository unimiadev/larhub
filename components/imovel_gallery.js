import React, { useEffect, useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImovelImageGallery = ({ imagens }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [images, setImages] = useState([]);
  const imageGalleryRef = useRef(null);

  useEffect(() => {
    const imageItems = imagens.map((imagem) => ({
      original: imagem,
      thumbnail: imagem,
      description: "",
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    }));
    setImages(imageItems);
  }, [imagens]);

  const renderItem = (item) => {
    return (
      <div className="image-gallery-image relative w-full h-[340px] overflow-hidden">
        <img
          src={item.original}
          alt={item.description}
          className="w-full h-full object-cover shadow-lg transition-transform transform hover:scale-105"
        />
        {item.description && (
          <span className="image-gallery-description">{item.description}</span>
        )}
      </div>
    );
  };

  const renderThumb = (item) => {
    return (
      <div className="thumb-wrapper flex items-center justify-center p-1">
        <img
          src={item.thumbnail}
          alt={item.description}
          className="w-[140px] h-[140px] object-cover transition-transform transform hover:scale-110"
        />
      </div>
    );
  };

  const handleScreenChange = (isFullScreenActive) => {
    setIsFullscreen(isFullScreenActive);
  };

  return (
    <section className="pt-[70px]">
      <ImageGallery
        ref={imageGalleryRef}
        items={images}
        onScreenChange={handleScreenChange}
        showFullscreenButton
        showPlayButton={false}
        showThumbnails
        showIndex
        showNav
        thumbnailPosition="left"
        slideDuration={450}
        slideInterval={2000}
        renderItem={renderItem}
        renderThumb={renderThumb}
      />
    </section>
  );
};

export default ImovelImageGallery;
