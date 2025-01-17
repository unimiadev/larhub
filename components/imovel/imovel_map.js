import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ImovelMap = ({ location }) => {
    const isLocationValid = location && location.latitude && location.longitude;

    const mapCenter = isLocationValid
        ? {
            lat: parseFloat(location.latitude),
            lng: parseFloat(location.longitude),
        }
        : null;

    return (
        <div className="h-[380px] w-full overflow-hidden"> 
            {!isLocationValid ? (
                <div className="text-center p-5 text-lg text-gray-500">
                    Localização não informada
                </div>
            ) : (
                <LoadScript
                    googleMapsApiKey="AIzaSyBRXGOmSFDZJbCDZcr7sXCT4nYtAGMCfVQ"
                    loadingElement={<div>Carregando...</div>}
                    libraries={["places"]}
                >
                    <GoogleMap
                        mapContainerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={mapCenter}
                        zoom={15}
                    >
                        <Marker position={mapCenter} />
                    </GoogleMap>
                </LoadScript>
            )}
        </div>
    );
};

export default ImovelMap;