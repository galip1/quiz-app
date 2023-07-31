import React from "react";
import { Spinner } from "react-bootstrap";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <p>Loading ...</p>
      {/* <Spinner animation="border" /> */}
    </div>
  );
};

export default Loading;
