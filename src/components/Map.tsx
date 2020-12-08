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

const Map = ({ eventData, center, zoom }: Props) => {
  const [locationInfo, setLocationInfo] = useState<any>(null);

  const markers = eventData.map((ev) => {
    // is a wildfire?
    if (ev.categories[0].id === 8) {
      const [lng, lat] = ev.geometries[0].coordinates;
      return (
        <LocationMarker
          lat={lat}
          lng={lng}
          key={ev.id}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
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
