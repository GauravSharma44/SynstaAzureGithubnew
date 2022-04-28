import React from "react";
import "./workspace.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./../ContactUs/ContactForm";

import HomeIcon from "../../img/icons8-home-24.png";
import Undo from "../../img/icons8-undo-24.png";
import Redo from "../../img/icons8-redo-24.png";
import Zoomin from "../../img/icons8-zoom-in-24.png";
import Zoomout from "../../img/icons8-zoom-out-24.png";
import export_left from "../../img/icons8-chevron-left-24.png";
import export_right from "../../img/icons8-chevron-right-24.png";
import play from "../../img/icons8-play-24.png";
import publish from "../../img/icons8-publish-24.png";

import Interactions from "../../img/icons8-link-24.png";
import interface_icon from "../../img/icons8-documents-24.png";
import Code from "../../img/icons8-folder-24.png";
import Server from "../../img/icons8-server-24.png";
import structure from "../../img/icons8-statistic-document-24.png";

function WorkSpace1() {
  const [showButton, setShowButton] = React.useState(true);
  const [showPages, setShowPages] = React.useState(true);
  const [showReccomendations, setShowReccomendations] = React.useState(false);

  return (
    <div className="main-workspace">
      <div className="workspace-header">
        <div className="workspace-header-left-icons">
          {/* right row */}
          {/* <button className="workspace-icons"> <img src={HomeIcon} height={25} width={25}/>Home</button> */}
          <div className="home-workspace">
            <div className="home-workspace-icon">
              <img src={HomeIcon} height={25} width={25} />
            </div>
            <div className="home-workspace-text">HOME</div>
          </div>
          <div className="undo-workspace">
            <div className="home-workspace-icon">
              <img src={Undo} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Undo</div>
          </div>
          <div className="redo-workspace">
            <div className="home-workspace-icon">
              <img src={Redo} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Redo</div>
          </div>
          <div className="zoomin-workspace">
            <div className="home-workspace-icon">
              <img src={Zoomin} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Zoom in</div>
          </div>
          <div className="zoomout-workspace">
            <div className="home-workspace-icon">
              <img src={Zoomout} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Zoom Out</div>
          </div>
        </div>

        {/* mid row */}
        <div className="workspace-header-center-icons">
          {/* <button className="workspace-icons">Export</button>
          <button className="workspace-icons">Preview</button>
          <button className="workspace-icons">Publish</button> */}
          <div className="export-workspace">
            <div className="home-workspace-icon">
              <img src={export_left} height={24} width={17} />
              <img src={export_right} height={24} width={17} />
            </div>
            <div className="home-workspace-text">Export</div>
          </div>
          <div className="preview-workspace">
            <div className="home-workspace-icon">
              <img src={play} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Preview</div>
          </div>
          <div className="publish-workspace">
            <div className="home-workspace-publish-icon">
              <img src={publish} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Publish</div>
          </div>
        </div>

        {/* right row */}
        <div className="workspace-header-right-icons">
          <div className="interactions-workspace">
            <div className="home-workspace-icon">
              <img src={Interactions} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Interactions</div>
          </div>
          <div className="interface-workspace">
            <div className="home-workspace-icon">
              <img src={interface_icon} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Interface</div>
          </div>
          <div className="code-workspace">
            <div className="home-workspace-icon">
              <img src={Code} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Code</div>
          </div>
          <div className="structure-workspace">
            <div className="home-workspace-icon">
              <img src={structure} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Structure</div>
          </div>
          <div className="server-workspace">
            <div className="home-workspace-icon">
              <img src={Server} height={25} width={25} />
            </div>
            <div className="home-workspace-text">Server</div>
          </div>
        </div>
      </div>

      {/* Workspace Area Below header */}
      <div className="workspace-area">
        <div className="left-workspace">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Pages- Contact Us
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <div className="Pages-contents">
                    <button className="Pages-list">+ Add New Page</button>
                    <button className="Pages-list">Bookings</button>
                    <button className="Pages-list">Blogs 3</button>
                    <button className="Pages-list">Contact Us</button>
                    <button className="Pages-list">About Us</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Reccomendations
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <div className="Pages-contents">
                    <button className="reccomend-list">
                      •Learn Local Variable and how its used.
                    </button>
                    <button className="reccomend-list">
                      •What are Data Types? When to use it?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="center-workspace">
          <div className="center-workspace-header">
            <div className="companyname">
              <h3>Urban Stay</h3>
            </div>
            <div className="center-header-items">
              <h6>Bookings </h6>
              <h6>Blogs</h6>
              <h6>Contact Us</h6>
              <h6>About Us</h6>
            </div>
          </div>
          <div className="Center-content">
            <ContactForm />
          </div>
        </div>

            {/* RIGHT SECTION */}

        <div className="right-workspace">
          <div className="col-md-12">
            
                <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingAssets">
                      <button
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseAssets"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseAssets"
                        
                      >
                        Assets
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseAssets"
                      class="accordion-collapse collapsed show "
                      aria-labelledby="panelsStayOpen-headingAssets"
                    >
                      <div class="accordion-body">

                      <div className="Search-bar-worksapce">
                  <input placeholder="Search " />
                </div>
                    
                  

                
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Blogs
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body"></div>
                    </div>
                  </div>
                  {/* Buttons div */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                      <button
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Buttons
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div class="accordion-body">
                        <div className="Buttons-contents">
                          <button className="Buttons-list">Button 1</button>
                          <button className="Buttons-list">Button 2</button>
                          <button className="Buttons-list">Button 3</button>
                          <button className="Buttons-list">Button 4</button>
                          <button className="Buttons-list">Button 5</button>
                          <button className="Buttons-list">Button 6</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Colors div */}
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFive"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Colors
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFive"
                    >
                      <div class="accordion-body">
                        <h6>Red</h6>
                        <h6>orange</h6>
                        <h6>Green</h6>
                        <h6>Blue</h6>
                        <h6>Yellow</h6>
                        <h6>Black</h6>
                      </div>
                    </div>
                  </div>
{/* Forms div */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        Forms
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSix"
                      class="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingSix"
                    >
                      <div class="accordion-body"></div>
                    </div>
                  </div>

                  {/* Iconography div */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSeven"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSeven"
                      >
                        Iconography
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSeven"
                      class="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingSeven"
                    >
                      <div class="accordion-body"></div>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseEight"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseEight"
                      >
                        Input Fields
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseEight"
                      class="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingEight"
                    >
                      <div class="accordion-body"></div>
                    </div>
                    
                  </div>
                  {/* Tables */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingNine">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseNine"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseNine"
                      >
                        Tables
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseNine"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingNine"
                    >
                      <div class="accordion-body"></div>
                    </div>
                  </div>
                  </div>
                    </div>
                  </div>
                  {/* aSSESTS DIV CLOSED */}
            {/* Properties */}
            <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTen"
                      >
                        Properties
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTen"
                      class="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingTen"
                    >
                      <div class="accordion-body"></div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    
  );
}

export default WorkSpace1;
