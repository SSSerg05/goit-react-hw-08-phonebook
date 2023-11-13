import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

// import { Loader } from "components/Loader/Loader";
import { MdClose } from 'react-icons/md';

// style
import { Overlay, BoxModal, ModalButtonClose, ModalTitle, } from "./Modal.styled";
import { useDispatch } from "react-redux";


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({children, title, src, onClose}) => {
  
  // const [loaded, setLoaded] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    // document.body.style.overflow = 'hidden';

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, onClose]);

  // useEffect(() => {
  //   // close modal for press in ESC
  //   const handleKeyDown = e => {
  //     if (e.code === 'Escape') {
  //       onClose();
  //     }
  //   }

  //   window.addEventListener('keydown', handleKeyDown);
  //   setLoaded(true)
    
  //   return window.removeEventListener('keydown', handleKeyDown)
  // }, [loaded, onClose  ]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  // close modal for click in backdrop || button
  const handleBackdropClick = e => { 
    if (e.currentTarget === e.target) { 
       onClose();
    }
  }

  // close modal for click in button
  const handleCloseButtonClick = e => { 
    onClose();
  }

  return createPortal(
    <Overlay onClick={ handleBackdropClick }>
     
      <BoxModal>
        { title && 
          <ModalTitle>
            { title }
          </ModalTitle>
        }
        
        { children }

        <ModalButtonClose type="button" onClick={ handleCloseButtonClick }>
          <MdClose size={12} />
        </ModalButtonClose>
      </BoxModal>
    
    </Overlay>
  , modalRoot)
}

Modal.propTypes = {
  src : PropTypes.string,
  title: PropTypes.string,
  onClose : PropTypes.func.isRequired,
};