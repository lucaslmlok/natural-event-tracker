import { Icon } from "@iconify/react";
import React, { MouseEventHandler } from "react";

import locationIcon from "@iconify/icons-mdi/fire-alert";

type Props = {
  lat: number;
  lng: number;
  onClick: MouseEventHandler;
};

const LocationMarker = ({ lat, lng, onClick }: Props) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
