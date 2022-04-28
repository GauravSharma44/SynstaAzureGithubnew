import React from "react";
import ReactPlayer from "react-player";
import logo2 from "../../../img/logo.jpg";
import logo from "../../../img/synsta-svg.svg";
import ContactForm from "../../ContactUs/ContactForm";
import GoogleFacebookLogin from "../../LogIn/GoogleFacebookLogin";
import { Link } from "react-router-dom";
import section_1_image from "../../../img/background.jpg";
import section_3_image from "../../../img/meeting.jpg";
import section_2_image from "../../../img/grow.jpg";
import "./home.css";
import Modal from "./videoModal";


const Home = () => (
  <div className="home-section1">
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        {/* <h1 className="gradient__text">Synsta Solutions</h1> */}
        <p className="homepage-text">
          Spending too much time on building the solutions and not enough time
          on your business?
          <br />
          We can fix that.
          <br />
          <h5>
            Make stunning digital experiences. We make building <br />
            applications fun for you.
          </h5>
        </p>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          {/* <button type="button" className="how-it-works">
            <span style={{ textDecoration: "underline" }}>How It Works</span>
          </button> */}

          <input
            type="email"
            className="email-homepage"
            placeholder="Enter your email"
          />
          <Link className="try-free" to="/log_in">
            <button type="button" className="start-free">
              TRY FOR FREE ↠
            </button>
          </Link>
        </div>
        <div className="below-email-homepage">
          <p>
            No registration &emsp;&emsp;&emsp;&ensp; No credit card required
            &emsp;&emsp;&emsp;&emsp; Free Support
          </p>
        </div>
      </div>
      {/* <Modal/> */}
      <div className="gpt3__header-image">
        <ReactPlayer
          className="modal-video"
          url="https://youtu.be/EXuZyDG5Lso"
          poster="/src/img/synsta-logo.jpg"
          controls="true"
          loop="true"
          light={logo}
          playbackRate={1}
          autoplay={1}
          modalVideo="modal-video"
          width="560px"
          height="400px"
          
          
        />
      </div>
    </div>
    <div>
      <div className="section">
        <div className="section-image">
          <img
            src={section_1_image}
            height={450}
            
            alt="GenesisXpert"
          />
        </div>
        <div className="section-text">
          <p>
            Allow your imagination to go wild while creating the ideal digital
            experience for your ideas.
          </p>
          <h4>
            While creating your online presence, the last thing you want to be
            concerned about is if your code syntax is proper. You can develop
            your applications visually using our tools, and we will handle the
            difficult coding for you.
          </h4>
        </div>
</div>
        {/* section 2 */}
        <div className="new-section">
        <div className="section">

        <div className="section-text">
          <p>
            Grow with us
          </p>
          <h4>
            Manage, promote, and grow your business with us.<br/>
            Create an app with our smart app builder and market and
            manage your business with our built-in professional business
            suite - all in one location.

          </h4>
        </div>
        <div className="section-image">
          <img
            src={section_2_image}
            height={450}
            
            alt="GenesisXpert"
          />
        </div>
        </div>
        
        
      </div>

      {/* section 3 */}
      <div className="new-section">
      <div className="section">
        <div className="section-image">
          <img
            src={section_3_image}
            height={450}
            
            alt="GenesisXpert"
          />
        </div>
        <div className="section-text">
          <p>
          And so much more...
          </p>
          <h4>
          Low Code Platform with Artificial Intelligence and Machine Learning (AIML).<br/>
          Create your applications with AI-powered technology and automate the workflow to speed up the process.3
          </h4>
        </div>
</div>
</div>

 

 {/* section 4 */}
 <div className="new-section">
        <div className="section">

        <div className="section-text-contact">
          <p>
            Let's talk
          </p>
          <h4>
           Please provide your contact information and a brief description <br/>
            of your problem, and we will contact you as soon as  possible to<br/> assist you

          </h4>
        </div>
        <div className="section-image-contact">
        <ContactForm />
        </div>
        </div>
        
        
      </div>

      {/* <ContactForm /> */}
      {/* <GoogleFacebookLogin/> */}
    </div>
    
  </div>
);

export default Home;
