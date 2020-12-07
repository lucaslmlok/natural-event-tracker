import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";

const LocationInfoBox = ({ info, onClick }) => {
  return (
    <div className="location-info">
      <Icon
        icon={closeIcon}
        className="location-info-close"
        onClick={onClick}
      />
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
