import React from "react";
import "../styles/Sell.css";

const Donate = () => {
  return (
    <div>
      <>
        <div className="main-sell">
          <div className="side-left">
            <div className="box-left1">
              <h1 className="margin">Main image</h1>
              <div className="box1 margin">
                <h1>Drag and drop an image here or click to upload.</h1>
              </div>
            </div>
            <div className="box-right1 margin">
              <h1 className="margin">Main image</h1>
              <div className="box1 margin">
                <h1>Drag and drop an image here or click to upload.</h1>
              </div>
            </div>
          </div>
          <div className="right-side">
            <h1>Product Details</h1>
            <div className="rdiv">
              <label>Model</label>
              <input
                style={{ padding: "0rem 0.5rem" }}
                placeholder="P40 Warhawk"
                type="text"
              ></input>
            </div>
            <div className="rdiv">
              <label>Brand</label>
              <input
                style={{ padding: "0rem 0.5rem" }}
                placeholder="Curtiss"
                type="text"
              ></input>
            </div>
            <div className="rdiv">
              <label>Year</label>
              <input
                style={{ padding: "0rem 0.5rem" }}
                placeholder="1938"
                type="text"
              ></input>
            </div>
            <div className="rdiv">
              <label>Registeration</label>
              <input
                style={{ padding: "0rem 0.5rem" }}
                placeholder="1938"
                type="text"
              ></input>
            </div>
            <div className="rdiv">
              <label>Serial Number</label>
              <input
                style={{ padding: "0rem 0.5rem" }}
                placeholder="2011"
                type="text"
              ></input>
            </div>
            <div className="rdiv">
              <label>Location</label>
              <input
                style={{ padding: "0rem 0.5rem" }}
                placeholder="Chandigarh"
                type="text"
              ></input>
            </div>
            <div className="rdiv">
              <label>Description</label>
              <textarea></textarea>
            </div>
            <div className="rdiv">
              <label>Equipment</label>
              <textarea></textarea>
            </div>
            <div className="rdiv">
              <label>Airframe</label>
              <textarea></textarea>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Donate;
