import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

// import { Loader } from "components/Loader/Loader";
import { MdClose } from 'react-icons/md';

// style
import { ModalBackDrop, ModalBox, ModalButtonClose, ModalTitle, } from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({children, title, src, modalClose}) => {
  
  // const [loaded, setLoaded] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        modalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, modalClose]);

  // close modal for click in backdrop || button
  const handleBackdropClick = e => { 
    if (e.currentTarget === e.target) { 
      modalClose();
    }
  }

  // close modal for click in button
  const handleCloseButtonClick = e => { 
    modalClose();
  }

  return createPortal(
    <ModalBackDrop onClick={ handleBackdropClick }>
     
      <ModalBox>
        { title && 
          <ModalTitle>
            { title }
          </ModalTitle>
        }
        
        { children }

        <ModalButtonClose type="button" onClick={ handleCloseButtonClick }>
          <MdClose size={12} />
        </ModalButtonClose>
      </ModalBox>
    
    </ModalBackDrop>
  , modalRoot)
}

Modal.propTypes = {
  src : PropTypes.string,
  title: PropTypes.string,
  onClose : PropTypes.func.isRequired,
};