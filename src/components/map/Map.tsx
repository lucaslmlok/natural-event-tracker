import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleMap from "google-map-react";
import { toast } from "react-toastify";

import Marker from "./Marker";
import LocationInfoBox from "../tools/LocationInfoBox";
import MyLocation from "./MyLocation";
import CategoryList from "../tools/CategoryList";
import * as ReduxActions from "../../store/actionCreator";

const googleApiKey: string = process.env.REACT_APP_GOOGLEP_API_KEY!;

const mapOptions = () => {
  return {
    fullscreenControl: false,
  };
};

type Props = {
  defaultCenter: GoogleMap.Coords;
  zoom: number;
};

const Map = ({ defaultCenter, zoom }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [mapObj, setMapObj] = useState<any>(null);
  const { filteredEvents, myLocation } = useSelector(
    (state: ReduxState) => state
  );

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        dispatch(ReduxActions.setMyLocation({ lat, lng }));
        mapObj.panTo({ lat, lng });
      }, getMyLocationError);
    } else {
      getMyLocationError();
    }
  };

  const getMyLocationError = () => {
    toast.dark("We aren't able to get your location.");
  };

  const markers = filteredEvents.map((ev) => {
    const category = ev.categories[0].id;

    return ev.geometries.map((geo, geoIndex) => {
      const [lng, lat] = geo.coordinates;
      return (
        <Marker
          key={`${ev.id}-${geoIndex}`}
          lat={lat}
          lng={lng}
          category={category}
          onClick={() =>
            dispatch(
              ReduxActions.selectEvent({
                id: ev.id,
                title: ev.title,
                categoryId: category,
                category: ev.categories[0].title,
                date: geo.date,
                sources: ev.sources,
                coordinate: { lng, lat },
              })
            )
          }
        />
      );
    });
  });

  return (
    <div className="map">
      <GoogleMap
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
        options={mapOptions}
        onGoogleApiLoaded={({ map }) => setMapObj(map)}
      >
        {markers}
        {myLocation && (
          <Marker
            lat={myLocation?.lat}
            lng={myLocation?.lng}
            category={0}
            onClick={() => {}}
          />
        )}
      </GoogleMap>
      <LocationInfoBox />
      <CategoryList />
      <MyLocation onClick={getMyLocation} />
    </div>
  );
};

Map.defaultProps = {
  defaultCenter: {
    lat: 22.3193,
    lng: 114.1694,
  },
  zoom: 1,
};

export default Map;
