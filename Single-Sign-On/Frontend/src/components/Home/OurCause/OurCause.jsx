import React, { useEffect } from "react";
import "./ourcause.css";
import sliderImage from "../../assests/images/sliderimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
const OurCause = () => {
  // useEffect(() => {
  //   $(document).ready(function () {
  //     $(".card").slick();
  //   });
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="">
            <span className="text-emergency">
              We will create a UK without the need for emergency food
            </span>
            <p className="text-content">
              We support a nationwide network of food banks and together we
              provide emergency food and support to people locked in poverty,
              and campaign for change to end the need for food banks in the UK.
            </p>
            <div>
              <a
                className="schedule-button"
                href="https://www.trusselltrust.org/what-we-do/"
              >
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="arrow"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default OurCause;
