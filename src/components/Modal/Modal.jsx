import React, { useCallback, useEffect, useState, } from "react";
import { createPortal } from "react-dom";
import { MdClose } from 'react-icons/md';

// import PropTypes from 'prop-types';
// import { Loader } from "components/Loader/Loader";

// style
import { Overlay, BoxModal, ModalButtonClose, ModalImage, ModalTitle, } from "./Modal.styled";

const MODAL_CONTAINER_ID = document.querySelector('#modal-root');


export const Modal = ({children, src="", title="", onClose }) => {

  const [loaded, setLoaded ] = useState(false);

  // https://habr.com/ru/articles/736284/
  const handleClose = useCallback((e) => {

      onClose?.();
  }, [onClose]);

  useEffect(() => {
    setLoaded(true);
  }, [loaded])


  useEffect(() => {

    const handleKeyDown = e => {
      console.log('handleKeyDown', e.code);
      if (e.code === 'Escape') {
        onClose?.();
      }
    }

    const handleBackdropClick = e => { 
      console.log('handleBackdropClick', e);
      console.log(e.currentTarget === e.target);

      if (e.currentTarget === e.target) { 
         onClose?.();
      }
    }

    window.addEventListener('click', handleBackdropClick);
    window.addEventListener('keydown', handleKeyDown);


    return () => {
      window.removeEventListener('click', handleBackdropClick);
      window.removeEventListener('keydown', handleKeyDown)
    }

 }, [onClose])


  const onLoadedLargeImage = () => {
    setLoaded(false);
  }


  return createPortal(
    <Overlay onClick={ handleClose }>
       
        <BoxModal>

          {/* {loaded && <Loader /> } */}
          
          { children }
          { src && (<ModalImage onLoad={ onLoadedLargeImage } src={ src } alt={ title } /> )}
          
            <ModalButtonClose type="button" onClick={ handleClose }>
              <MdClose size={12}/>
            </ModalButtonClose>
          
          { !loaded && 
            <ModalTitle>
              { title }
            </ModalTitle>
          }
        </BoxModal>
        
    </Overlay>
  , MODAL_CONTAINER_ID)
}

// Modal.propTypes = {
//   src : PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClose : PropTypes.func.isRequired,
// };