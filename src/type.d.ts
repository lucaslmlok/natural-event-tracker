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
  sources: {
    id: string;
    url: string;
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
  categoryId: number;
  category: string;
  sources: {
    id: string;
    url: string;
  }[];
  coordinate: {
    lat: number;
    lng: number;
  };
};

type ReduxState = {
  allEvents: Event[];
  filteredEvents: Event[];
  eventCategories: EventCategory[];
  selectedCategory: EventCategory | null;
  selectedEvent: LocationInfo | null;
  infoBoxActive: boolean;
  myLocation: { lat: number; lng: number } | null;
};

type ReduxAction = {
  type: string;
  payload?: any;
};

type DispatchType = (args: ReduxAction) => ReduxAction;
