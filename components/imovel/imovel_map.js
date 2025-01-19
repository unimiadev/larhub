import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const ImovelMap = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && location?.latitude && location?.longitude) {
      const lat = parseFloat(location.latitude);
      const lng = parseFloat(location.longitude);

      if (!isNaN(lat) && !isNaN(lng)) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 15,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        new window.google.maps.Marker({
          position: { lat, lng },
          map,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#F2CD00",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });
      }
    }
  }, [location]);

  if (!location?.latitude || !location?.longitude) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-secondary-100/10 rounded-xl">
            <FaMapMarkerAlt className="text-2xl text-secondary-100" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Localização</h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[400px]"
      >
        <div ref={mapRef} className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default ImovelMap;
