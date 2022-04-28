import React, { Component } from "react";

import "../../App.css"

import "./pricing.css"
// import img1 from "../img/image2.jpg";
// import img2 from "../img/image3.jpg";
// import img3 from "../img/image1.jpg";
import PricingTables from "./PricingTables";
// import "../../containers/Pricing/pricingtable.css";

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <div className="pricing-header">
          <h1 className="heading1">Synsta Solutions Premium Plans</h1>
          <h1 className="heading2">
          Synsta Solutions gives you unlimited Applications, Online Support,Cloud
            Deploy and many more features.
          </h1>
          <h3>Upgrade to Premium and get even more.</h3>
        </div>

        {/* <div className="pricing-category">
          <div className="freemium">
            <h1 className="price-category-headers">Freemium</h1>
          </div>
          <div className="premium">
            <h1 className="price-category-headers">Premium</h1>
            <p className="premium-price">$499/Month</p>
          </div>
          <div className="standard">
            <h1 className="price-category-headers">Standard</h1>
            <p className="standard-price">$299/Month</p>
          </div>
        </div> */}
        
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            
            
          </div>
        </div>
        <div>
          <PricingTables />
        </div>
      </div>
    );
  }
}
