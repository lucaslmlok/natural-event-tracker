import * as actionTypes from "./actionTypes";

const initialState: ReduxState = {
  allEvents: [],
  eventCategories: [],
  selectedCategory: null,
  filteredEvents: [],
  selectedEvent: null,
};

export default (state = initialState, { type, payload }: ReduxAction) => {
  switch (type) {
    case actionTypes.FETCH_EVENTS:
    case actionTypes.SELECT_EVENT:
    case actionTypes.GET_ALL_EVENT_CATEGORIES:
    case actionTypes.SELECT_CATEGORY:
      return { ...state, ...payload };
    case actionTypes.UNSELECT_EVENT:
      return { ...state, selectedEvent: null };
    default:
      return state;
  }
};
