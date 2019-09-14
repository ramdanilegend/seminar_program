import React from "react";
import "./content.css";
import imgTest from "../logo.svg";

// const back_main = {
//   backgroundColor: "red",
//   width: "100%",
//   heigth: "100vh"
// };

const Content = () => {
  return (
    <div className="back">
      <div className="container">
        <div class="card">
          <img src={imgTest} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
