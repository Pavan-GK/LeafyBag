import React from "react";
import { connect } from "react-redux";
import Corousel from "../Corousel";

const Cart = (props) => {
  return (
    <div style={{ margin: "30px" }}>
      {props.getcart.length ? (
        props.getcart.map((item) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              border: "1px solid green",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "400px",
                border: "1px solid black",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                padding: "20px",
              }}
            >
              <img
                src={item.preview}
                alt="cart img"
                width="300px"
                height="400px"
              />
              {/* <div style={{ width: "300px" }}> */}
              <div>
                <h2>{item.name}</h2>
              </div>

              <div>
                <h2>{item.brand}</h2>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
              <div>
                <h2>$-{item.price}</h2>
              </div>
              <div>
                <h2>Quantity -{item.quantity}</h2>
              </div>
            </div>

            <div className="my_corosoul">
              <Corousel item={item} />
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/* <h1>No items in Cart</h1> */}
          <img
            src="http://sripriyasilks.com/images/empty-cart.png"
            alt="No items in cart"
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  getcart: state.cartProducts,
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(Cart);
