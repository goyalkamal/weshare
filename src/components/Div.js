import React from "react";

function Div(props) {
  return (
    <div className="main-divs phead">
      <div className="div">
        <img className="img" src={props.img} alt="image"></img>
        <div className="text-container">
          <div className="paragraph">
            <h2>{props.heading}</h2>
            <p className="smallp">{props.para}</p>
          </div>
          <div className="learn">
            <h2 className="learnh2">Learn more </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Div;
