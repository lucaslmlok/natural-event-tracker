import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import { format, parseISO } from "date-fns";

import * as ReduxActions from "../store/actionCreator";

const LocationInfoBox = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { selectedEvent } = useSelector((state: ReduxState) => state);

  if (!selectedEvent) return null;

  return (
    <div className="location-info">
      <button
        className="location-info-close"
        onClick={() => {
          dispatch(ReduxActions.unselectEvent());
        }}
      >
        <Icon icon={closeIcon} />
      </button>

      <h2 className="mb-2 font-bold text-2xl">{selectedEvent.title}</h2>

      <ul>
        <li>ID: {selectedEvent.id}</li>
        <li>
          Date: {format(parseISO(selectedEvent.date), "dd MMM yyyy HH:mm:ss")}
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
