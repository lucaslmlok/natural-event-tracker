import { MouseEventHandler } from "react";
import { Icon } from "@iconify/react";

import Wildfires from "@iconify/icons-mdi/fire-alert";
import Storms from "@iconify/icons-mdi/weather-tornado";
import Unknown from "@iconify/icons-mdi/map-marker-question";

type Props = {
  lat: number;
  lng: number;
  category: number;
  onClick: MouseEventHandler;
};

const getIcon = (category: number): { icon: any; color: string } => {
  switch (category) {
    case 8:
      return { icon: Wildfires, color: "red" };
    case 10:
      return { icon: Storms, color: "#257adb" };
    default:
      return { icon: Unknown, color: "grey" };
  }
};

const LocationMarker = ({ lat, lng, category, onClick }: Props) => {
  const { icon, color } = getIcon(category);

  if (icon === Unknown) {
    console.log("here");
  }

  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={icon} className="location-icon" style={{ color: color }} />
    </div>
  );
};

export default LocationMarker;
