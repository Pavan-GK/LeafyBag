import React from "react";
import { connect } from "react-redux";

const Jumbotron = ({ Creddata }) => {
  return (
    <div className="jumbotron ">
      <h1 className="display-4">
        Hello, {Creddata.loggedin ? Creddata.name : "world!"}
      </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classNamees for typography and spacing to space content
        out within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-dark" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

const mapStateToProps = (store) => ({
  Creddata: store.creadentials,
});

export default connect(mapStateToProps, null)(Jumbotron);
