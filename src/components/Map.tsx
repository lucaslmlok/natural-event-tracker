import { useState } from "react";
import GoogleMapReact from "google-map-react";

import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const googleApiKey: string = process.env.REACT_APP_GOOGLEP_API_KEY!;

type Props = {
  eventData: any[];
  center: GoogleMapReact.Coords;
  zoom: number;
};

export type LocationInfo = {
  id: string;
  title: string;
  date: string;
};

const Map = ({ eventData, center, zoom }: Props) => {
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);

  const markers = eventData.map((ev) => {
    const category = ev.categories[0].id;

    return ev.geometries.map((geo, geoIndex) => {
      const [lng, lat] = geo.coordinates;
      return (
        <LocationMarker
          key={`${ev.id}-${geoIndex}`}
          lat={lat}
          lng={lng}
          category={category}
          onClick={() =>
            setLocationInfo({ id: ev.id, title: ev.title, date: geo.date })
          }
        />
      );
    });
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox
          info={locationInfo}
          onClick={() => setLocationInfo(null)}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 22.424945175584593,
    lng: 114.22878875230352,
  },
  zoom: 4,
};

export default Map;
