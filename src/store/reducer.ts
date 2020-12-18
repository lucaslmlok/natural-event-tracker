import * as actionTypes from "./actionTypes";

const initialState: ReduxState = {
  allEvents: [],
  filteredEvents: [],
  eventCategories: [],
  selectedCategory: null,
  selectedEvent: null,
  infoBoxActive: false,
  myLocation: null,
};

export default (state = initialState, { type, payload }: ReduxAction) => {
  switch (type) {
    case actionTypes.FETCH_EVENTS:
    case actionTypes.GET_ALL_EVENT_CATEGORIES:
    case actionTypes.SELECT_CATEGORY:
      return { ...state, ...payload };
    case actionTypes.SELECT_EVENT:
      return { ...state, selectedEvent: payload };
    case actionTypes.OPEN_INFO_BOX:
      return { ...state, infoBoxActive: true };
    case actionTypes.CLOSE_INFO_BOX:
      return { ...state, infoBoxActive: false };
    case actionTypes.SET_MY_LOCATION:
      return { ...state, myLocation: payload };
    default:
      return state;
  }
};
