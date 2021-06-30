import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Corousel = (props) => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner" style={{ width: "450px", height: "500px" }}>
          {props.item.photos.length ? (
            props.item.photos.map((item, index) =>
              index === 2 ? (
                <div class="carousel-item active">
                  <img
                    src={item}
                    alt="Card image cap"
                    // width="250px"
                    // height="300px"
                    class="d-block w-100"
                  />
                </div>
              ) : (
                <div class="carousel-item">
                  <img src={item} class="d-block w-100" alt="Card image cap" />
                </div>
              )
            )
          ) : (
            <h1>No images</h1>
          )}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" style={{ color: "black" }}>
            Previous
          </span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only" style={{ color: "black" }}>
            Next
          </span>
        </a>
      </div>

      {/* {props.item.photos.length ? (
        props.item.photos.map((item) => (
          <img src={item} alt="Card image cap" width="250px" height="300px" />
        ))
      ) : (
        <h1>No images</h1>
      )} */}
    </div>
  );
};

export default Corousel;
