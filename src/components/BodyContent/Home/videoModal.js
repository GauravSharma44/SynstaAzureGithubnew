import React, { Component } from "react";
import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            theme="dark"
            wmode="black"
            autoplay="1"
            ratio="16:9"
            isOpen={this.state.isOpen}
            videoId="EXuZyDG5Lso"
            poster="/src/img/ai.png"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button onClick={this.openModal}>Open</button>
        </div>
      </div>
    );
  }
}

export default videoModal;