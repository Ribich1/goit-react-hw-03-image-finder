import { Component } from 'react';
import { createPortal } from 'react-dom';
import '../../components/styles.scss';

export class Modal extends Component {
  modalRoot = document.querySelector('#modal-root');

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img
            src={this.props.dataForModal.src}
            alt={`${this.props.dataForModal.alt}`}
            className="ImageGalleryItem-image"
          />
        </div>
      </div>,
      this.modalRoot
    );
  }
}
