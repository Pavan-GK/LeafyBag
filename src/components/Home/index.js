import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import "./index.css";
import { apidata, getProduct } from "../../CommonData";
import Jumbotron from "../Jumbotron";
import axios from "axios";
import { connect } from "react-redux";
import { setdata } from "../../actions";

const Home = ({ setOriginalData, getproddata }) => {
  const [allProducts, setallProducts] = useState([]);
  const [getData, updategetData] = useState([]);
  const [NumberOfProds, setNumberOfProds] = useState(8);
  const [buttonsBool, setbuttonsBool] = useState(false);
  //let idmab = 1;

  useEffect(() => {
    setTimeout(() => {
      setallProducts(apidata);

      setbuttonsBool(true);
      axios(getProduct).then((res) => {
        setOriginalData(res.data);
        // updategetData(res.data.slice(0, 8));
        //updategetData(getproddata.slice(0, 8));
      });
    }, 2000);
  }, []);

  const addMoreProducts = () => {
    getproddata.length &&
      updategetData(getproddata.slice(0, NumberOfProds + 8));
    setNumberOfProds(NumberOfProds + 8);
  };

  const addLessProducts = () => {
    const num = NumberOfProds - 8;
    getproddata.length && updategetData(getproddata.slice(0, num));
    setNumberOfProds(num);
  };

  console.log("original data", getproddata);
  return (
    <div>
      <Jumbotron />
      <h2>Welcome to Shopping..</h2>

      <div className="ArrangeCards">
        {/* updategetData(getproddata.slice(0, 8)); */}
        {getproddata.length ? (
          getproddata
            .slice(0, NumberOfProds)
            .map((item) => <Cards item={item} />)
        ) : (
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {buttonsBool ? (
          <button
            style={{ marginRight: "10px" }} //, backgroundColor: "lightblue" }}
            className="btn btn-primary btn-dark m-10"
            onClick={NumberOfProds < 20 ? addMoreProducts : ""}
          >
            Show More
          </button>
        ) : (
          ""
        )}

        {buttonsBool ? (
          <button
            style={{ marginLeft: "10px" }} //, backgroundColor: "lightblue" }}
            className="btn btn-primary btn-dark ms-10"
            onClick={NumberOfProds > 10 ? addLessProducts : ""}
          >
            Show Less
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapDischargeToProps = (discharge) => ({
  setOriginalData: (data) => discharge(setdata(data)),
});

const mapStateToProps = (store) => ({
  getproddata: store.Products,
});

export default connect(mapStateToProps, mapDischargeToProps)(Home);
