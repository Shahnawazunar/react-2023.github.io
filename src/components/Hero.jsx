import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-5">
            <h1 className="head">Web App Development</h1>
            <p className="pera">
              Web application development is the creation of application
              programs that reside on remote servers and are delivered to the
              user's device over the Internet. A web application (web app) does
              not need to be downloaded and is instead accessed through a
              network. perspiciatis.
            </p>
            <button type="button" class="btn btn-outline-dark">Learn More</button>
          </div>
          <div className="col-md-5">
            <img
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgahiqbdEecePCacI6K8YBbCYEvZvZVvE7DQ&usqp=CAU"} alt=""
              className="heroImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
