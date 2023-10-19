import { useDispatch } from 'react-redux';
import { MdClose, MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types'; // ES6'

import { deleteContactThunk, } from "redux/operations";

import { Card, Name, Checkbox } from './Contact.styled';
import { ButtonDelete, ButtonEdit } from '../../Forms/Buttons.styles';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormContact } from 'components/Forms/FormContact/FormContact';
import { toggleCompleted } from 'redux/contactsSlice';

export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const {id, name, number, selected=false} = contact;

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => dispatch(deleteContactThunk(id));
  // const handleToggle = () => dispatch(toggleCompletedThunk(contact));
  const handleToggle = () => dispatch(toggleCompleted(contact));
  const handleEdit = () => { toggleModal() };

  // відкриття / закриття модалки
  const toggleModal = () => {
    setShowModal( !showModal );
  }

  return (
    <Card>

      <label>
        <Checkbox 
          type="checkbox"
          checked={ selected }
          onChange={ handleToggle } 
        />
      </label>

      <Name>{ name + ': ' + number }</Name>

      <ButtonEdit type="button" onClick={ handleEdit }>
        <MdEdit size={24} /> 
      </ButtonEdit>

      <ButtonDelete type="button" onClick={ handleDelete }>
        <MdClose size={24} />
      </ButtonDelete>

      { showModal && (
          <Modal
            onClose={ toggleModal }
          >
            <FormContact 
              contact={contact} 
              onClose={ toggleModal }
            />
          </Modal> 
        )}
     
    </Card>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    }).isRequired
}