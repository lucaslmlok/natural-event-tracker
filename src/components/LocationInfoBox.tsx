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
    <div className="absolute top-20 right-5 w-96 bg-white bg-opacity-90 p-6 pt-7 border rounded-2xl shadow-xl">
      <button
        className="absolute top-2 right-2 text-2xl"
        onClick={() => {
          dispatch(ReduxActions.unselectEvent());
        }}
      >
        <Icon icon={closeIcon} />
      </button>

      <h2 className="mb-5 font-bold text-2xl">{selectedEvent.title}</h2>

      <ul className="text-gray-600">
        <li>ID: {selectedEvent.id}</li>
        <li>
          Date: {format(parseISO(selectedEvent.date), "dd MMM yyyy HH:mm:ss")}
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
