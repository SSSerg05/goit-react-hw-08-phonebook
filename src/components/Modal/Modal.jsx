import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Loader } from "components/Loader/Loader";
import { Overlay, BoxModal, ModalButtonClose, ModalImage, ModalTitle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({children, src, tags, onClose}) => {
  
  const [loaded, setLoaded ] = useState(false);
  const [showModal, setShowModal] = useState(false);


// const handleClickOpen = useCallback((e) => {
//   setOpen(true)
// }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    setLoaded(true);
    return window.removeEventListener('keydown', handleKeyDown)
  }, [loaded])


  // flag loading img
  const onLoadedLargeImage = () => {
    setLoaded(false);
  }

  // close modal for press in ESC
  const handleKeyDown = useCallback(e => {
    if (e.code === 'Escape') {
      onClose();
      // toggleModal();
    }
  }, [])



  // відкриття / закриття модалки
  const toggleModal = () => {
    setShowModal( !showModal );
  }

  // close modal for click in backdrop || button
  const handleBackdropClick = e => { 
    if (e.currentTarget === e.target) { 
      onClose();
      // toggleModal();
    }
  }



  return createPortal(
    <Overlay onClick={ handleBackdropClick }>
       
        <BoxModal>

          {loaded && <Loader /> }
          
          { children }
          { src && (<ModalImage onLoad={ onLoadedLargeImage } src={ src } alt={ tags } /> )}
          
          {!loaded &&
            <ModalButtonClose type="button" onClick={handleBackdropClick}>
              <MdClose size={12}/>
            </ModalButtonClose>}
          
          { !loaded && 
            <ModalTitle>
              { tags }
            </ModalTitle>
          }
        </BoxModal>
        
    </Overlay>
  , modalRoot)
}

Modal.propTypes = {
  src : PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose : PropTypes.func.isRequired,
};