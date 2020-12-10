import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import * as ReduxActions from "../store/actionCreator";
import CategoryBadge from "./CategoryBadge";

const googleApiKey: string = process.env.REACT_APP_GOOGLEP_API_KEY!;

type Props = {
  center: GoogleMapReact.Coords;
  zoom: number;
};

const Map = ({ center, zoom }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { filteredEvents, selectedEvent, eventCategories } = useSelector(
    (state: ReduxState) => state
  );

  const markers = filteredEvents.map((ev) => {
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
            dispatch(
              ReduxActions.selectEvent({
                id: ev.id,
                title: ev.title,
                date: geo.date,
              })
            )
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
      {/* {categories} */}
      <div className="absolute top-16 left-0 w-full flex justify-start p-2">
        <CategoryBadge id={null} title="Show All" />
        {eventCategories.map((cat) => (
          <CategoryBadge id={cat.id} title={cat.title} />
        ))}
      </div>
      {selectedEvent && <LocationInfoBox />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 22.3193,
    lng: 114.1694,
  },
  zoom: 1,
};

export default Map;
