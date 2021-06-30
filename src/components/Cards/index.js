import React from "react";
import "./index.css";
import { addProductsTocart, removecart } from "../../actions";
import { connect } from "react-redux";

const Cards = (props) => {
  return (
    // className="card"
    <div className="card m-2 p-4" style={{ width: "18rem" }} key={props.id}>
      <img
        className="card-img-top"
        src={props.item.preview}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text card_overflow a">{props.item.description}</p>

        <div className="button-pos">
          <button
            className="btn-New"
            onClick={() => props.addtocart(props.item)}
          >
            Add to Cart
          </button>
          <button
            className="btn-New"
            onClick={() => props.removeFromCart(props.item)}
          >
            Remove
          </button>
        </div>

        {/*  "btn btn-primary" */}
      </div>
    </div>
  );
};

const mapDischargeToProps = (discharge) => ({
  addtocart: (data) => discharge(addProductsTocart(data)),
  removeFromCart: (data) => discharge(data),
});
export default connect(null, mapDischargeToProps)(Cards);
