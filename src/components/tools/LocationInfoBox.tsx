import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";
import { format, parseISO } from "date-fns";
import {
  RiFeedbackLine,
  RiTimeLine,
  RiAlarmWarningLine,
  RiFocus2Line,
  RiDatabase2Line,
} from "react-icons/ri";

import EventIcon from "../EventIcon";
import { getEventColor } from "../../utils/functions";
import * as actionTypes from "../../store/actionTypes";

const LocationInfoBox = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { selectedEvent, infoBoxActive } = useSelector(
    (state: ReduxState) => state
  );

  if (!selectedEvent) return null;

  return (
    <div
      className={`
      location-info-box absolute z-10 bottom-0 inset-x-1/2 transform -translate-x-1/2 translate-y-2
      bg-white py-1 px-4 rounded-2xl rounded-b-none border shadow-2xl  text-gray-700
      transition-all duration-300 ease-in-out
      ${infoBoxActive ? "max-h-full" : "max-h-0"}
      `}
    >
      <div className="py-4 border-b-2 flex items-start">
        <EventIcon
          category={selectedEvent.categoryId}
          customClass="text-3xl"
          style={{ color: getEventColor(selectedEvent.categoryId) }}
        />
        <h3 className="text-xl font-bold flex-1 px-1">{selectedEvent.title}</h3>
        <button
          className={`
          text-3xl
          transform rotate-0
          transition-transform duration-300 hover:rotate-90
          `}
          onClick={() => dispatch({ type: actionTypes.CLOSE_INFO_BOX })}
        >
          <RiCloseCircleLine />
        </button>
      </div>

      <div className="pt-2 pb-4">
        <ul className="">
          <li className="info-list-item">
            <RiFeedbackLine className="info-list-icon" />
            <div className="info-list-content">{selectedEvent.id}</div>
          </li>

          <li className="info-list-item">
            <RiTimeLine className="info-list-icon" />
            <div className="info-list-content">
              {format(
                parseISO(selectedEvent.date),
                "dd MMMM, yyyy |  HH:mm:ss"
              )}
            </div>
          </li>

          <li className="info-list-item">
            <RiAlarmWarningLine className="info-list-icon" />
            <div className="info-list-content">{selectedEvent.category}</div>
          </li>

          <li className="info-list-item">
            <RiFocus2Line className="info-list-icon" />
            <div className="info-list-content">
              <div>{`Latitude: ${selectedEvent.coordinate.lat}`}</div>
              <div>{`Longitude: ${selectedEvent.coordinate.lng}`}</div>
            </div>
          </li>

          <li className="info-list-item">
            <RiDatabase2Line className="info-list-icon" />
            <div className="info-list-content">
              <div className="font-bold">Source:</div>
              {selectedEvent.sources.map((source, index) => (
                <div key={`${index}-${source.id}`}>
                  <a href={source.url} target="_blank">
                    {source.id}
                  </a>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationInfoBox;
