import { useState, useEffect, Dispatch, useRef } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Map from "./components/map/Map";
import * as ReduxActions from "./store/actionCreator";

function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const [loading, setLoading] = useState(false);
  const [navInfo, setNavInfo] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      await dispatch(ReduxActions.fetchEvents());
      setLoading(false);
    };
    fetchEvent();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navInfo &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setNavInfo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [headerRef, navInfo]);

  return (
    <>
      <header ref={headerRef}>
        <Navbar navInfo={navInfo} setNavInfo={setNavInfo} />
      </header>
      <main>
        {!loading ? <Map /> : <Loader />}
        <ToastContainer
          position="bottom-center"
          transition={Slide}
          limit={1}
          hideProgressBar
        />
      </main>
    </>
  );
}

export default App;
