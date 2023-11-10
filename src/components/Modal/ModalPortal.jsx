// @src/components/Modal.tsx
import { useState, Dispatch, SetStateAction } from 'react';
import { ReactPortal } from "../ReactPortal/ReactPortal";
// import { Loader } from "components/Loader/Loader";
import { MdClose } from 'react-icons/md';

// style
import { Overlay, BoxModal, ModalButtonClose, ModalImage, ModalTitle, } from "./Modal.styled";



// Define the props of Modal.
// type ModalProps = {
//    isOpen        : boolean,
//    setOn         : Dispatch<SetStateAction<boolean>>,
//    title?        : string,
//    promptText?   : string,
//    handleDelete? : Function
// }
// Modal component.

const ModalPortal = (
    { children, isOpen, setOn, title, promptText, handleDelete } ) => {
    
    // Manage button enabled/disabled state.
    const [ disabled, setDisabled ] = useState(false);
    
    // Return null if isOpen props from parent is false.
    if (!isOpen) return null;
    
    // Run when delete is confirmed.
    const confirmDelete = () => {
        // Disable the buttons (this could also be anything).
        setDisabled(true);
        // Execute delete comment or reply.
        if (handleDelete) handleDelete();
    }

    return (
      //  <ReactPortal wrapperId="react-portal-modal-container">
      //     <div className="modal">
      //         {/* Modal Heading */}
      //         <div className="modal__modal-heading">
      //           <h3 className="modal__modal-title">{title}</h3>
      //         </div>
      //         {/* Modal Prompt Text */}
      //         <div className="modal__modal-body">
      //           <p>{promptText}</p>
      //         </div>
      //         {/* Modal CTA */}
      //         <div className="modal__modal_flex_row modal__modal_justify_between">
      //            <button
      //               className="modal__modal-btn-close"
      //               onClick={ () => setOn(false) }
      //               disabled={disabled}
      //            >
      //               NO, CANCEL
      //            </button>
      //            <button
      //               className="modal__modal-btn-confirm-delete"
      //               onClick={confirmDelete}
      //               disabled={disabled}
      //            >
      //               YES, DELETE
      //            </button>
      //          </div>
      //     </div>
      //  </ReactPortal>
      <ReactPortal wrapperId="react-portal-modal-container">
        <Overlay onClick={ this.handleBackdropClick }>

        <BoxModal>
          { title && 
            <ModalTitle>
              { title }
            </ModalTitle>
          }

          { children }

          {/* { src && (<ModalImage onLoad={  this.onLoadedLargeImage } src={ src } alt={ title } /> )} */}

          <ModalButtonClose type="button" onClick={ this.handleCloseButtonClick }>
            <MdClose size={12} />
          </ModalButtonClose>


        </BoxModal>
        
        </Overlay>
      </ReactPortal>
    );
}
export default ModalPortal;