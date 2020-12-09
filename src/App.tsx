import { useState, useEffect, Dispatch } from "react";
import { useDispatch } from "react-redux";

import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import * as ReduxActions from "./store/actionCreator";

function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(ReduxActions.fetchEvents());
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map /> : <Loader />}
    </div>
  );
}

export default App;
