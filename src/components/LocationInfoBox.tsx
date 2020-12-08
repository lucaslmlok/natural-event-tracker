import React, { MouseEventHandler } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";

type Props = {
  info: { id: string; title: string };
  onClick: any;
};

const LocationInfoBox = ({ info, onClick }: Props) => {
  return (
    <div className="location-info">
      <button className="location-info-close" onClick={onClick}>
        <Icon icon={closeIcon} />
      </button>

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
