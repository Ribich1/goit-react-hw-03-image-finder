import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <div>
        <img
          src="https://pixabay.com/get/g7355e53dbe2f2363d7607743b7bd05ebcb8cb628b34ca4c4a3d2bde66ac8abb8c1101266f36a629000c493c1f0348e1826bfae2f5fb7740bca1538303c3c98a5_1280.jpg"
          alt="cat"
        />
        {/* <img src={this.props.dataForModal.src} alt={`${this.props.dataForModal.alt}`} /> */}
      </div>,
      modalRoot
    );
  }
}
