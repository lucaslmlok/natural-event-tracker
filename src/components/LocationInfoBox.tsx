import { MouseEventHandler } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import { format, parseISO } from "date-fns";

import { LocationInfo } from "./Map";

type Props = {
  info: LocationInfo;
  onClick: MouseEventHandler;
};

const LocationInfoBox = ({ info, onClick }: Props) => {
  return (
    <div className="location-info">
      <button className="location-info-close" onClick={onClick}>
        <Icon icon={closeIcon} />
      </button>

      <h2 className="mb-2 font-bold text-2xl">{info.title}</h2>

      <ul>
        <li>ID: {info.id}</li>
        <li>Date: {format(parseISO(info.date), "dd MMM yyyy HH:mm:ss")}</li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
