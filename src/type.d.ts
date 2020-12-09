interface Event {
  id: string;
  title: string;
  categories: {
    id: number;
    title: string;
  }[];
  geometries: {
    coordinates: any;
    date: string;
  }[];
}

type EventCategory = {
  id: number | null;
  title: string;
};

type LocationInfo = {
  id: string;
  title: string;
  date: string;
};

type ReduxState = {
  allEvents: Event[];
  eventCategories: EventCategory[];
  selectedCategory: EventCategory | null;
  filteredEvents: Event[];
  selectedEvent: LocationInfo | null;
};

type ReduxAction = {
  type: string;
  payload: any;
};

type DispatchType = (args: ReduxAction) => ReduxAction;
