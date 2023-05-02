import React from "react";
import { Link } from "react-router-dom";
function Cards(props) {
  return (
    <div className="card1">
      <img src={props.image} alt="" />
      <div className="card1-body">
        <div className="row">
          <div className="card1-title">
            <h4>{props.name}</h4>
            <h3>$120</h3>
          </div>
          <div className="view-btn">
            <Link to="">View Details</Link>
          </div>
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          dignissimos.
        </p>
        <div className="btn-group">
          <div className="btn">
            <Link to="">Buy Now</Link>
          </div>
          <Link to=""> Cancel</Link>
        </div>
      </div>
    </div>
  );
}
export default Cards;
