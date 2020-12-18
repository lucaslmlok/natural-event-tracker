import { MouseEventHandler } from "react";

import EventIcon from "../EventIcon";
import { getEventColor } from "../../utils/functions";
import { ReactComponent as MarkerLogo } from "./marker.svg";

type Props = {
  lat: number;
  lng: number;
  category: number;
  onClick: MouseEventHandler;
};

const LocationMarker = ({ lat, lng, category, onClick }: Props) => {
  return (
    <div className="marker" onClick={onClick}>
      <MarkerLogo className="absolute" fill={getEventColor(category)} />
      <EventIcon category={category} customClass="marker-icon" />
    </div>
  );
};

export default LocationMarker;
