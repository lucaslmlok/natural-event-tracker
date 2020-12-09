import cloneDeep from "lodash/cloneDeep";

import * as actionTypes from "./actionTypes";

const NASA_API = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";
const excludedCategories = Object.values({
  volcanoes: 12,
  sea_and_lake_ice: 15,
});

export const fetchEvents = () => {
  return async (dispatch: DispatchType) => {
    const res = await fetch(NASA_API);
    const { events } = await res.json();
    const filteredEvents = events.filter((ev) => {
      return !excludedCategories.includes(ev.categories[0].id);
    });
    dispatch({
      type: actionTypes.FETCH_EVENTS,
      payload: { allEvents: filteredEvents, filteredEvents },
    });
    dispatch(getAllEventCategories(filteredEvents));
  };
};

const getAllEventCategories = (events: Event[]) => {
  const eventCategories: EventCategory[] = [];
  events.forEach((ev) => {
    const { id, title } = ev.categories[0];
    if (!eventCategories.some((cat) => cat.id === id)) {
      eventCategories.push({ id, title });
    }
  });
  return {
    type: actionTypes.GET_ALL_EVENT_CATEGORIES,
    payload: { eventCategories },
  };
};

export const selectCategory = (category: EventCategory | null) => {
  return (dispatch: DispatchType, getState: () => ReduxState) => {
    const allEvents = cloneDeep(getState().allEvents);

    const filteredEvents = allEvents.filter((ev) => {
      if (!category) return true;
      const evCategory = ev.categories[0];
      return evCategory.id === category.id;
    });

    dispatch({
      type: actionTypes.SELECT_CATEGORY,
      payload: { selectedCategory: category, filteredEvents },
    });
  };
};

export const selectEvent = (info: LocationInfo) => {
  return {
    type: actionTypes.SELECT_EVENT,
    payload: {
      selectedEvent: info,
    },
  };
};

export const unselectEvent = () => {
  return {
    type: actionTypes.UNSELECT_EVENT,
  };
};
