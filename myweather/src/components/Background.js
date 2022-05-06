import React from "react";
import Getimg from "./Getimg";

function Background({ backplan }) {
  return (
    <div className="bg">
      <div className="overlay"></div>
      <Getimg durum={backplan} />
    </div>
  );
}

export default Background;
