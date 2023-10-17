import React, { Component } from "react";
import { createPortal } from "react-dom";
// import PropTypes from 'prop-types';

// import { Loader } from "components/Loader/Loader";
import { MdClose } from 'react-icons/md';

// style
import { Overlay, BoxModal, ModalButtonClose, ModalImage, ModalTitle, } from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  
  state = {
    loaded: false,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    this.setState({ loaded: true });
  }

  onLoadedLargeImage = () => {
    this.setState({ loaded: false });
  }


  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }


  // close modal for press in ESC
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log("You press ESC");
      this.props.onClose();
    }
  }

  
  // close modal for click in backdrop || button
  handleBackdropClick = e => { 
    if (e.currentTarget === e.target) { 
       this.props.onClose();
    }
  }

  handleCloseButtonClick = e => { 
    this.props.onClose();
  }

  render() {
    const { children, src='', title='' } = this.props;
    const { loaded } = this.state;
    
    return createPortal(
      <Overlay onClick={ this.handleBackdropClick }>
       
        <BoxModal>

          {/* {loaded && <Loader /> } */}

          { children }
          { src && (<ModalImage onLoad={  this.onLoadedLargeImage } src={ src } alt={ title } /> )}

            <ModalButtonClose type="button" onClick={ this.handleCloseButtonClick }>
              <MdClose size={12} />
            </ModalButtonClose>

          { !loaded && 
            <ModalTitle>
              { title }
            </ModalTitle>
          }
        </BoxModal>
      
      </Overlay>
    , modalRoot)
  };
}

// Modal.propTypes = {
//   src : PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   onClose : PropTypes.func.isRequired,
// };