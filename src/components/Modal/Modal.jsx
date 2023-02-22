import { ModalBox, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = element => {
    if (element.code === 'Escape' || element.currenTarget !== element.target) {
      this.props.closeModal();
      return;
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalBox>
          <img src={largeImageURL} alt={tags} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes={
  largeImageURL:PropTypes.string.isRequired,
  tags:PropTypes.string.isRequired
}