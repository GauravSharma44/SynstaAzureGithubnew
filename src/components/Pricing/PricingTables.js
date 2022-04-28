import React, { Component , useState} from 'react'

import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
 import "./pricingtable.css"
 






// export default class PricingTables extends Component {
  
  const PricingTables =props=>{
    const [visible, setVisible] = React.useState(false);
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 
     };
    
    var val="$ 499/Month";
     // delete
     // Pricing switch alternative
// const [test, setTest]=useState("50 per month");
// const [test2, setTest2]=useState("1 per day");

//    delete
    var val_year ="$ 399/Month"
    var valYearStrike="$ 499/Month";
    var standard_price="$ 299/Month"
    var standard_price_year="$ 199/Month"
    var standard_price_year_Strike="$ 299/Month"
    const[price, setPrice]=useState(val);
    
    const[price_standard, setPrice_standard]=useState(standard_price);
    const[price_standard_strike, setPrice_standard_strike]=useState(standard_price_year_Strike);

    const[priceYear, setPriceYear]=useState(val_year);
    const[priceYearStrike, setYearPriceStrike]=useState(valYearStrike);
    const[price_standardYear, setPrice_standardYear]=useState(standard_price_year);

    // const standard_Price_year_ref=useRef();
  
    const changePriceToYear=()=>{
      setPriceYear("$ 399/Month");
      setYearPriceStrike("$ 499/Month")
      
      
      // style={{text-decoration:line-through"}};
      
    }
  
    const changePriceToMonth=()=>{
     
      setPriceYear(val);
      setYearPriceStrike("")
  
    }

    const changePriceToYearStandard =()=>{
      setPrice_standard( "$ 199/Month");
      setPrice_standard_strike( "$ 299/Month");
      
      
    }
  
    const changePriceToMonthStandard=()=>{
     
      setPrice_standard(standard_price);
      setPrice_standard_strike("");
  
    }
    
    
  
  
      
     
        
  let content =(
            <div class="pricing-table is-comparative">



<div class="container">
    <div class="wrapper">
      <h1 class="title">Our Pricing</h1>

      {/* 
      Pricing Switch Alternative
      <>
      <h1>test pricing</h1>
      <button
        type="button"
        onClick={() => setTest("500 per year") || setTest2("5 per day")}
      >year</button>

<button
        type="button"
        onClick={() => setTest("50 per month") || setTest2("1 per day")}
      >month</button>
      </> */}

      <div class="pricing">
       
         <button className="btn2 btn-secondary"  onClick={()=>{
           changePriceToYear() ; changePriceToYearStandard();
           setVisible(false);
            }}>
        
         
            Annual
          </button>&emsp;

         
          <button className="btn2 btn-secondary" onClick={()=>{
           changePriceToMonth() ; changePriceToMonthStandard();
           setVisible(true);
            }}>
        
            Monthly
          </button> 
       
      </div>
      
      {/* <div>
        <button onClick={() => setVisible(true)}>Show</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        {visible && <div>My element</div>}
      </div> */}
      
      
</div>
</div>


  <div class="pricing-plan is-feature">
    
  
    <div class="plan-header">Features</div>
        <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"></span>{ }</span></div>
        

    <div class="plan-items">
      <div class="plan-item">Unlimited Applications</div>
      <div class="plan-item">Enhanced Team Work Environment</div>
      <div class="plan-item">Multi Language Support</div>
      <div class="plan-item">Unlimited Team Members</div>
      <div class="plan-item">Third Party Integration</div>
      <div class="plan-item">Cloud Deploy</div>
      <div class="plan-item">Online Support</div>
      
    </div>
    <div class="plan-footer">

    </div>
  </div>
  <div class="pricing-plan is-warning">
    <div class="plan-header">Single User</div>
    
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"></span>Try for Free</span></div>
    <div class="plan-items">
      <div class="plan-item" data-feature="Unlimited Application">✓</div>
      <div class="plan-item" data-feature="Enhanced Team Work Environment">1 Person Access</div>
      <div class="plan-item" data-feature="Language Support">X</div>
      <div class="plan-item" data-feature="Team Members">Single User</div>
      <div class="plan-item" data-feature="Third Party Integration">X</div>
      <div class="plan-item" data-feature="Cloud Deploy">X</div>
      <div class="plan-item" data-feature="Online Support">X</div>
      
      
    </div>
    
    <div class="plan-footer">
      <button class="button is-fullwidth">Try Now</button>
      
    </div> 


  </div>
  
  <div class=" pricing-plan is-active">
    <div class="plan-header-premium">Business</div>
    <p class="promo">Our most valuable package!</p>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency-strike">{priceYearStrike}</span>&nbsp;&nbsp;{priceYear}</span></div>
    <div class="plan-items">
      
    <div class="plan-item" data-feature="Unlimited Application">✓</div>
      <div class="plan-item" data-feature="Enhanced Team Work Environment">✓</div>
      <div class="plan-item" data-feature="Language Support">✓</div>
      <div class="plan-item" data-feature="Team Members">✓</div>
      <div class="plan-item" data-feature="Enhanced Team Work Environment">✓</div>
      <div class="plan-item" data-feature="Cloud Deploy">✓</div>
      <div class="plan-item" data-feature="Online Support">✓</div>
      
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div> 


  </div>

  <div class="pricing-plan is-warning">
    <div class="plan-header">Multi User</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency-strike">{price_standard_strike}</span>&nbsp;&nbsp;{price_standardYear}</span></div>
    <div class="plan-items">
    <div class="plan-item" data-feature="Unlimited Application">✓</div>
    <div class="plan-item" data-feature="Enhanced Team Work Environment">✓</div>
      <div class="plan-item" data-feature="Language Support">3 Language Support</div>
      <div class="plan-item" data-feature="Team Members">Upto 3 Team Members</div>
      <div class="plan-item" data-feature="Third Party Integration">✓</div>
      <div class="plan-item" data-feature="Cloud Deploy">X</div>
      <div class="plan-item" data-feature="Online Support">X</div>
      
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div> 


  </div>

  <div className="Custom-pricing">
  
  <h4>Get a Customized Plan</h4>
  <h6 className='custom-pricing-text'>We know choosing a plan can be complicated.
That’s why our Customer Care Team would love to walk you through a customised demo of Synsta Solutions and our other tools. <br/> <br/>Click below to set up a demo call.</h6>


      <button class="custom-priceButton">SCHEDULE A DEMO CALL</button>
      
  
</div>
</div>


  ); 
  return content;
  
};
export default PricingTables;