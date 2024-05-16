import { useState } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { House } from "phosphor-react";
import { UseShelterData } from "./UseShelterData";
import { InfoWindowComponent } from "./InfoWindowComponent";

export interface Shelter {
  id: string;
  name: string;
  phone: string;
  isAvailable: boolean;
  petFriendly: boolean;
  latitude: string;
  longitude: string;
}

export interface Need {
  id: string;
  name: string;
  created_at: Date;
  shelterId: string;
}

export interface ShelterData {
  shelters: Shelter[];
  needs: Need[];
  error?: string;
}

export function MapPoa() {
  const { shelters, needs, error }: ShelterData = UseShelterData();

  //Para controlar a InfoWindow
  const [selectedShelterId, setSelectedShelterId] = useState<string | null>(
    null
  );

  const position = {
    lat: -30.037716071175552,
    lng: -51.18157744911894,
  };

  const handleMarkerClick = (shelterId: string) => {
    setSelectedShelterId(shelterId);
  };

  return (
    <APIProvider apiKey="AIzaSyBVdx6OG7n6BVqe_QTIiY6zuBuNmPSkkiY">
      <div className="w-100 h-100">
        {error && (
          <h2 style={{ color: "#DA251E" }} className="fw-light">
            Erro: {error}
          </h2>
        )}
        <Map
          defaultZoom={12}
          defaultCenter={position}
          mapId={"87c6df435d61e2eb"}
        >
          {shelters.map((shelter) => (
            <AdvancedMarker
              position={{
                lat: parseFloat(shelter.latitude),
                lng: parseFloat(shelter.longitude),
              }}
              key={shelter.id}
              onClick={() => handleMarkerClick(shelter.id)}
            >
              <House weight="fill" color="#DA251E" size={32} />
            </AdvancedMarker>
          ))}
        </Map>
      </div>

      <InfoWindowComponent
        shelters={shelters}
        needs={needs}
        selectedShelterId={selectedShelterId}
        onClose={() => setSelectedShelterId(null)}
      />
    </APIProvider>
  );
}
