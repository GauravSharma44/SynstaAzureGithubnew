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
import interface_icon from "../../img/icons8-documents-24.png"
import Code from "../../img/icons8-folder-24.png";
import Server from "../../img/icons8-server-24.png";
import structure from "../../img/icons8-statistic-document-24.png";
import ArrowUp from "../../img/arrow-up.png";
import ArrowDown from "../../img/arrow-down.png";
import ArrowLeft from "../../img/ArrowLeft.png";
import ArrowRight from "../../img/ArrowRight.png";



function WorkSpace() {
  const [showButton, setShowButton] = React.useState(true);
  const [showColor, setShowColor] = React.useState(true);
  const [showPages, setShowPages] = React.useState(true);
  const [showReccomendations, setShowReccomendations] = React.useState(false);



  return (
    <div className="main-workspace">
      <div className="workspace-header">
        <div className="workspace-header-left-icons">
          {/* right row */}
          {/* <button className="workspace-icons"> <img src={HomeIcon} height={25} width={25}/>Home</button> */}
          <div className="home-workspace">
              <div className="home-workspace-icon"><img src={HomeIcon} height={25} width={25}/></div>
              <div className="home-workspace-text">HOME</div>
          </div>
          <div className="undo-workspace">
              <div className="home-workspace-icon"><img src={Undo} height={25} width={25}/></div>
              <div className="home-workspace-text">Undo</div>
          </div>
          <div className="redo-workspace">
              <div className="home-workspace-icon"><img src={Redo} height={25} width={25}/></div>
              <div className="home-workspace-text">Redo</div>
          </div>
          <div className="zoomin-workspace">
              <div className="home-workspace-icon"><img src={Zoomin} height={25} width={25}/></div>
              <div className="home-workspace-text">Zoom in</div>
          </div>
          <div className="zoomout-workspace">
              <div className="home-workspace-icon"><img src={Zoomout} height={25} width={25}/></div>
              <div className="home-workspace-text">Zoom Out</div>
          </div>
          
        </div>

        {/* mid row */}
        <div className="workspace-header-center-icons">
          {/* <button className="workspace-icons">Export</button>
          <button className="workspace-icons">Preview</button>
          <button className="workspace-icons">Publish</button> */}
          <div className="export-workspace">
              <div className="home-workspace-icon"><img src={export_left}  height={24} width={17}/><img src={export_right}  height={24} width={17}/></div>
              <div className="home-workspace-text">Export</div>
          </div>
          <div className="preview-workspace">
              <div className="home-workspace-icon"><img src={play} height={25} width={25}/></div>
              <div className="home-workspace-text">Preview</div>
          </div>
          <div className="publish-workspace">
              <div className="home-workspace-publish-icon"><img src={publish} height={25} width={25}/></div>
              <div className="home-workspace-text">Publish</div>
          </div>
        </div>

        {/* right row */}
        <div className="workspace-header-right-icons">
          {/* <button className="workspace-icons">Interactions</button>
          <button className="workspace-icons">Interface</button>
          <button className="workspace-icons">Code</button>
          <button className="workspace-icons">Structure</button>
          <button className="workspace-icons">Server</button> */}
          <div className="interactions-workspace">
              <div className="home-workspace-icon"><img src={Interactions} height={25} width={25}/></div>
              <div className="home-workspace-text">Interactions</div>
          </div>
          <div className="interface-workspace">
              <div className="home-workspace-icon"><img src={interface_icon} height={25} width={25}/></div>
              <div className="home-workspace-text">Interface</div>
          </div>
          <div className="code-workspace">
              <div className="home-workspace-icon"><img src={Code} height={25} width={25}/></div>
              <div className="home-workspace-text">Code</div>
          </div>
          <div className="structure-workspace">
              <div className="home-workspace-icon"><img src={structure} height={25} width={25}/></div>
              <div className="home-workspace-text">Structure</div>
          </div>
          <div className="server-workspace">
              <div className="home-workspace-icon"><img src={Server} height={25} width={25}/></div>
              <div className="home-workspace-text">Server</div>
          </div>
          
        </div>
      </div>

      {/* Workspace Area Below header */}
      <div className="workspace-area">
        <div className="left-workspace">
          {/* dropdown options https://www.js-tutorials.com/react-js/how-to-create-react-dropdown-select/ */}

          <div className="Buttons-div" onClick={() => setShowPages(!showPages)}>
            <div className="Button">Pages- Contact Us </div>
            {showPages ? (
              <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
            ) : (
              <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
            )}
          </div>
          {showPages ? (
            <div className="Pages-contents">
              <button className="Pages-list">+ Add New Page</button>
              <button className="Pages-list">Bookings</button>
              <button className="Pages-list">Blogs 3</button>
              <button className="Pages-list">Contact Us</button>
              <button className="Pages-list">About Us</button>
            </div>
          ) : null}

          <div className="reccomendations">
            <div
              className="Reccomend-div"
              onClick={() => setShowReccomendations(!showReccomendations)}
            >
              <div className="Button">Reccomendations </div>
              {showReccomendations ? (
                <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
              ) : (
                <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
              )}
            </div>
            {showReccomendations ? (
              <div className="Pages-contents">
                {" "}
                <button className="reccomend-list">
                  •Learn Local Variable and how its used.
                </button>
                <button className="reccomend-list">
                  •What are Data Types? When to use it?
                </button>
              </div>
            ) : null}
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

        <div className="right-workspace">
          <div className="col-md-12">
            <div className="assets">
              <div className="asset-content">
                <div className="assets-text">Assets</div>
                <div   className="assets-arrow"><img src={ArrowUp} height={25} width={25}/></div>
              </div>
              <div className="assest-inner-content">
                <div className="Search-bar-worksapce">
                  <input placeholder="Search " />
                </div>

                <div className="blog-div">
                  <div className="blog-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                  <div className="blog-button">Blogs </div>
                </div>
                <div
                  className="Buttons-div"
                  onClick={() => setShowButton(!showButton)}
                >
                  {showButton ? (
                    <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                  ) : (
                    <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
                  )}
                  <div className="Button">Buttons </div>
                </div>
                {showButton ? (
                  <div className="Buttons-contents">
                    <button className="Buttons-list">Button 1</button>
                    <button className="Buttons-list">Button 2</button>
                    <button className="Buttons-list">Button 3</button>
                    <button className="Buttons-list">Button 4</button>
                    <button className="Buttons-list">Button 5</button>
                    <button className="Buttons-list">Button 6</button>
                  </div>
                ) : null}
              </div>

              <div class="accordion" id="accordionExample">
              <div class="accordion" id="accordionPanelsStayOpenExample">
  
  </div>
  </div>
              
               <div
                  className="Buttons-div"
                  onClick={() => setShowColor(!showColor)}
                >
                  {showButton ? (
                    <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                  ) : (
                    <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
                  )}
                  <div className="Button">Colours </div>
                  {showColor ? (
                  <div className="Buttons-contents">
                    <button className="Buttons-list">Red</button>
                    <button className="Buttons-list">Blue</button>
                    <button className="Buttons-list">Green</button>
                    <button className="Buttons-list">Orange</button>
                    <button className="Buttons-list">Yellow</button>
                    <button className="Buttons-list">Black</button>
                  </div>
                ) : null}
                </div> 

{/* <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Colors
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
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
  </div> */}

                <div
                  className="Buttons-div"
                //   onClick={() => setShowButton(!showButton)}
                >
                  {showButton ? (
                    <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                  ) : (
                    <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
                  )}
                  <div className="Button">Forms </div>
                </div>

                <div
                  className="Buttons-div"
                //   onClick={() => setShowButton(!showButton)}
                >
                  {showButton ? (
                    <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                  ) : (
                    <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
                  )}
                  <div className="Button">Iconography </div>
                </div>

                <div
                  className="Buttons-div"
                //   onClick={() => setShowButton(!showButton)}
                >
                  {showButton ? (
                    <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                  ) : (
                    <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
                  )}
                  <div className="Button">Input Fields </div>
                </div>

                <div
                  className="Buttons-div"
                //   onClick={() => setShowButton(!showButton)}
                >
                  {showButton ? (
                    <div className="Button-arrow"><img src={ArrowUp} height={25} width={25}/></div>
                    ) : (
                      <div className="Button-arrow"><img src={ArrowDown} height={25} width={25}/></div>
                  )}
                  <div className="Button">Tables </div>
                </div>

                <div className="asset-content">
                <div className="assets-text">Properties</div>
                <div className="assets-arrow"><img src={ArrowUp} height={25} width={25}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
