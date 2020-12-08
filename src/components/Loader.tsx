import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader">
      <ClipLoader size={100} />
      <div className="loader-text">Loading</div>
    </div>
  );
};

export default Loader;
