import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { SearchForValue, UpdateCredData } from "../../actions";

const { Search } = Input;

const NavBar = (props) => {
  // const onSearch = value => console.log(value);

  const LogOut = () => {
    props.sendcreddata({});
    // name: userName, loggedin: true
  };

  return (
    <nav className="navbar fixed-top navbar navbar-expand-lg navbar-dark bg-dark p-2 myNavBar">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAM/UlEQVR4Xu2dC7SWUxrHf6Go3FWENTFRpERTRFiVhEpGTSrlfmIyZGaYYcb9Nhc0LsMY19w6lDQVFoMOU1GUW0XLpIky1UShJIqa9ff2rc45vnO+d+/vfPvd3/fuvVar+Pbez7P/z//d9/089cidWgIHAu2BzsBhwPa5i4UcCSCwCpgOzADeAWYDC2rTo14tP8rwNwADE2hIEFl3CIwBLquJCDURQAWuBBrUnR6hpgQRWAdcu+mDrqJGNgLMAdomqGwQXTgE5gLtKldfnQCTge6Fkx9q9gCBCuDojB6VCdAXmOiBgkGFwiNwIjBJYjIEaAZ8CDQsvOwgwQME1gJ7AcszBLgXKPNAsaCCOwTuA4aJAK2A993JDZI8QqC1CDAYKPdIqaCKOwROEQFuBi5yJzNI8giBkSLAS0BXj5QKqrhD4GURQPvH27mTGSR5hMBqEWCjRwoFVRwjEAjgGHDfxAUC+GYRx/oEAjgG3DdxgQC+WcSxPoEAjgH3TVwggG8WcaxPIIBjwH0TFwjgm0Uc6xMIkCfgux4A2+8RVbJhPSyeCeu+zLNSh8UDAQzA3qMDdDwLWnaDnfaC+o1qLrz+K1j7GXw8C+Y9DfMmwZfLDYQ5yhoIkAPoBtvCURfDIcNgu+ZQr7aL9LXU9e03sPg1mDoS3vv+MpYfKRCgBjtssRV0vxwO+wU0blJ3xtq4ARbNgAnnwVI93Ug4BQJkMUDz9jBgFDQ/yP6Lz2XXNZ/Cs7+FWaNy5Szs74EA1fA94lfQ4yrYZofCAq/aNUd45qJkSRAIsMnO6vL73Q0Hnwpb1i+88TMSPl8Ej5wE/33TnczKkgIBABl/yFhocyLU28K9Iea/AKN6wYZv3ctOPQGSNr5M/s0qGFcGc54IBHCOQN/bofPwqBdIMs0eA+WD3GuQ6h7gyF9Dz+uhvgfvoT6dD/cfA5995JYEqSVA237Q7x5otIs94N9+DV+tgFVLoh5kxxbQcEe7eYRWBKMHwAd6nuswpZIAO+8NZz4LTVubI71xI3z6b/jXjfDmwz+cuO1/AvS6ybxu7RQ+ewm8cpu5TvmUSCUBBo2G9oPNN3lkpOl3RoaqbcZuSzBtEz9zcT7mNC+bOgJ0KoMTboUGjc3AWrcGnr8cpt0ar1y330OPq832FAIB4mFrnWvbZjBsMuxq6P9k/drI+FP/El/0PkfDkCeg4U7xywQCxMfKKmfvkdBlhNmST2O+jnIf/ZnZRo3uCZzxDOzUIr6qgQDxsTLOqbP80ydtvrwRt4KV/4GH+sL/3o1bIspnSgARbcpN0fzCZUrNHKD/vdDxbLOJ33frYPK1UCFneYapdS/QZFPLwjgprALioGSZp8Xh0Xi8/e5mFSydDfd2j9b6pumku+CQc+MTLuwDmCJskN/UGKpaX//zV0TrfdNkQ7iwE2iKcsz8pmNxptoVH8D9PWHlwpiCNmXTSuOMp2HPTmblwlmAGV6xcx/3RzjqN7DFlrGLoAnZ63fDP4bHL6Ocuj84uBz26xO/61c5LTOfuhBel6sux6mkJ4Ha5x9WAc3l6tog2RzPavdvwEOw1xFmxpda+cw1DJqVNWtJE0A3eU+4zfy0T7dz7jw0/rpf+/+SIxKYpnxWGqaysuUvKgJ0OBX63BLd1/tqJSyaDtP/BvOfzw7FaROhjfyfGiST7l9dfp+R0OF02GprAyGVsuqq+KjedisNO4lVSxUVAbIZVNesl7wNL/+p6o0a242fb1bDk2Uwe2zN8MrwPa+NDN9oZ3szaHk5/hyYO96+jnxLFhUBRrwJux+cvckignbt5oyD1/4OBw0xP4xRzbUtx9SbdBoGLbtGE758kk4TX7k9uhWcZCoZAlQGUWQQwFtaRDvQhYz7ekQG1nq+VU9o2R2a7Ju/0TM6Sr/3JsLok+PPMwpFkqIigO05vgl4etOnm8FbbWNSKn5e28Ol+BLMchYVATSuDxlnN9s2g6UwudUrzX0SHh+a/JefaWFREUBK/6gzDCovPhLoQsmUm+HFqwtDLttai44Aaqh6gpMfjo5ciyFpO1k7ffOe8k/boiSAYNSeux5wtjrO7hauC1Noi1cXR3XPz1enEUVLgIwBj74Cuvwyv/V4XZNBhtfX/tyl5odJda1LrvqKngBqoLZgtUOoSxguH3ZWWXpuhNVL4Z3HoiNkH72BZCNDSRAg07ADB0L/e2BrR3FNtZ7XO3897nxjlPtHHbm+7ji/lxQB9LZfx7+2+/K5ANNLoFVLYdlsWDglWtK5fsqVS0fT30uKAHrqpRNAm7T2c1gxf3PJFQuir/uzhZErl2VziqdbN2l/SRFg+DRo0cWk+ZvzfvQK3HWEXdliLlUyBGjSCs56zn6DSJ67HlY4xZSlkiHAvj0jLx+2vn2SeJThA9dKhgBdLoTj/2w3AUzqUUYgQB0i0PtmONLybD2pRxl12HzrqkqmB7C5/pVBTUfAE89P1l2btQXzLFgyBKjttlAujL7+IrqcUdPdwlzli/n3kiBAviuApJ5l+UCckiDA3kfC0CehcVM7SLWb92Bv8xfAdtL8KlUSBNivd/Qix/YMIBDAL1Iaa5PPElDCdGHjgeMi509pSyXRA2j9r/d/tr78l7wFt3dIm+mj9pYEAfLZAxAIgQBFTv589gACAUogengggP0XXBJDQD6bQIIurSeBJTMHCARIcQ8gJ80XzALF+bFNoQewRc6DcrY+gCqrHgjggSFtVSh2AqgH00XWzj+H1cugfKDb+EFFPwksZgJ8H6jqHpDnE/1bF1Om3eLWZ0AgQIKrgGzhalwPR4EACRFA8QoUpm7r7aoOfoo1fIehj0Hb4dPLZaA8c+h0T25YdmsXhXRRzN7KSe/sFW9Pf+vZdSafLRBvjYYxQ21Lm5erzc9BxkOJea12JbzoATT+dTgtitMrY7p+3+fyRrCMf8oY2GWf7AZL3RCgcOzHXBO5cbc9zbPjflTqu/WR04aX/pBPLfHKxnEjK8dR8iXgKiXWA+irH/gItO3v/ouvDK6rC6Fq79BxsH/fmomexO3kRAgQBwxXX8CaT+DR/rBwamElxglQqfBziiO8+PXC6lK59kQIoGCNXS8xC91SKEgE+oTh0YFQoZLcyCo6aa65TRLvE50TwNaDZ6GMo3q1mvh4Jrxwdd1fDe91Ixw+IveLpXziE+SDjXMC9LwOuv7OzH17Pg00KVuXRNAwp/B0h5yT+8uXjp+8D6OOd+9SxjkByl4EhVTzOcnzh1y4a1tWTp5Mk/Yy5MDqgJ/GG+aS9BjulAAKoXb2C5Hb1ThJzpbeHg0V12/2xKGllJw0HzQ42jMoZNRv7c3L74+ieSikaxxvIHIdr0uqTfeLv6zV7p9uJdvEJoqDY215nBLA5OAmzlexZ0c4Zay9TwAT8DL+gFYugGVzQauHj16N9hE0uWvZDVodGxnehJRJewz3lgDa6n2wT+SapaakoWTw49C4iYkp/cmrOceMu2DSiOR08pYAcV7r2MQCTA7qqpJ9cRrtlAAmjzgVuGH8uZHfvWypbb/oLF2HRcWYtOxUD5e0P0GnBJChzp8JGrvjJA0Derdf2ceuxtdDz42CQRRr1y+vY48NhuXz4qBQ2DzOCWDqyk1d5fo1sOG7CAhNuOo3KiwohazdJ+Ornc4J0PFMOPEOt0b8fjm3BBo3i7cpUwgCSAc5lyw/Ofluv3L7nBPANpafrVEEvDx/jD0tOoPvdVMUc0BRQVwlnfLJlezEC/wJFJFpu3MCSHC+z7njGk7LrHcnwBNnVnXX3m4A9LgSmrUpPBF8jhWQyBAgoS6Og+NE6BARdCqpRyUmmzdxCCg3s6/dHYWz8zVWQGIEkOA4t2PiAF09j3bsFs2ACedFPn7jpGb7R/4FFBau4c7xt3CzyVboupn3w6t3+G34RIeAjPC6jPqhsV6OnStugFkPxDF79jzaXWw/CH7cFXbYM3f0MH3dijW4oALeLnf7qMO+lZtLJjIHqK64LoR2vRSatjYfkxXoWTdoXv1rYS516ACrSWvQ37sdGJ0BqIfZsB4WzyyOr7w2onhBgIyCArlTWRSBu6ZAjTqd0xMqGV0bRB9Oq4vvIL11eEWA9JohuZYHAiSHvReSAwG8MENySgQCJIe9F5IDAbwwQ3JKBAIkh70XkgMBvDBDckqIAF8AjkItJtfQIDkrAqtEgOeAYwNAqUTgnyKAItpflcrmh0ZfIwKcBIwPWKQSgX4iQEvgg1Q2PzR6HxFA6XFgYMAjVQiMAQZlCKBe4D2gQaogSG9j1wFtgAUZAgiKy4Dr04tJqlp+OXCDWlyZAPpvvcRrmyoo0tfYuUC7TLOrE0D/fzLQPX24pKLFFUAV7wzZCCAk+m6aGDZMBSyl38i1mvABP/CEVBMBBEmzTeNEWenjU9ItvG/T/G55tlbWRoBM/lbAT6r9qebhtqQBLKbGrQbeqPan1miI/wfWkxGwPhG/fwAAAABJRU5ErkJggg=="
        alt="image"
        width="30px"
        height="30px"
        style={{ marginRight: "20px" }}
      />
      <a className="navbar-brand titleClass" href="#">
        LEAFY BAG
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto ">
          {/* <li className="nav-item nav-link active">
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                // onSearch={onSearch}
                style={{
                  width: 400,
                  fontSize: "16",
                  color: "#1890ff",
                  border: "none",
                }}
              />
            </Space>
          </li> */}

          <li>
            <div
              style={{
                color: "black",
                padding: ".5rem",
                // paddingleft: ".5rem",
                height: "24px",
                // border: "1px solid black",
              }}
            >
              <input
                onChange={(e) => props.searchValue(e.target.value)}
                placeholder="Search here"
              ></input>
              {/* <button style={{ color: "black" }}>search</button> */}
            </div>
          </li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="nav-item nav-link active">Home</li>
          </Link>
          <Link to="Cart" style={{ textDecoration: "none" }}>
            <li className="nav-item nav-link active">
              Cart<sup>{props.cartCount}</sup>
            </li>
          </Link>
          {/* {props.Creddata.loggedin ? ( */}

          <Link to="SignIn" style={{ textDecoration: "none" }}>
            {props.Creddata.loggedin ? (
              ""
            ) : (
              <li className="nav-item nav-link active">Sign In</li>
            )}
          </Link>
          <Link to="SignUp" style={{ textDecoration: "none" }}>
            {props.Creddata.loggedin ? (
              ""
            ) : (
              <li className="nav-item nav-link active">Sign Up</li>
            )}
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            {props.Creddata.loggedin ? (
              <li onClick={LogOut} className="nav-item nav-link active">
                Sign Out
              </li>
            ) : (
              ""
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (store) => ({
  cartCount: store.cartProducts.length,
  Creddata: store.creadentials,
});

const mapDischargeToProps = (discharge) => ({
  searchValue: (data) => discharge(SearchForValue(data)),
  sendcreddata: (data) => discharge(UpdateCredData(data)),
});

export default connect(mapStateToProps, mapDischargeToProps)(NavBar);
