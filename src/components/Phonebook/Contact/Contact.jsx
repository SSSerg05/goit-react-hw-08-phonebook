import { useDispatch } from 'react-redux';
import { MdClose, MdEdit, MdAccountBox, MdOutlinePhoneAndroid,} from 'react-icons/md';
import PropTypes from 'prop-types'; // ES6'

import { deleteContactThunk, } from "redux/contactsOperations";

import { Card, Name, Checkbox, Number, FieldContact, FieldName, FieldNumber } from './Contact.styled';
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

      <FieldContact>
        <FieldName>
          <MdAccountBox size={18} />
          <Name> { name } </Name>
        </FieldName>
    
        <FieldNumber>
          <MdOutlinePhoneAndroid size={18} />
          <Number> { number } </Number>
        </FieldNumber>
      </FieldContact>

      <ButtonEdit type="button" onClick={ handleEdit }>
        <MdEdit size={18} /> 
      </ButtonEdit>

      <ButtonDelete type="button" onClick={ handleDelete }>
        <MdClose size={18} />
      </ButtonDelete>

      { showModal && (
          <Modal
            title={'Edit/Update'}
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