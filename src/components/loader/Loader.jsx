import React from "react";
import "../../loader.styles.css";
import loadingGif from "../../assets/loading.gif";
const Loader = () => {
  return (
    <div className="text-loader font-monoton flex flex-col gap-1 items-center">
      <span>
        <img
          width={100}
          src={loadingGif}
          alt="loading..."
        />
      </span>
      <div className="text-container">
        <span className="letter">L</span>
        <span className="letter">E</span>
        <span className="letter">A</span>
        <span className="letter">F</span>
        <span className="letter">Y</span>
      </div>
    </div>
  );
};

export default Loader;
