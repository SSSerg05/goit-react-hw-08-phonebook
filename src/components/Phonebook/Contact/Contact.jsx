import { useDispatch } from 'react-redux';
import { MdClose, MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types'; // ES6'

import { deleteContactThunk, toggleCompletedThunk, editContactThunk, } from "redux/operations";

import { Card, Name, Checkbox } from './Contact.styled';
import { ButtonDelete, ButtonEdit } from '../../Forms/Buttons.styles';

export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const {id, name, number, selected=false} = contact;

  const handleEdit = () => dispatch(editContactThunk(id));
  const handleDelete = () => dispatch(deleteContactThunk(id));
  const handleToggle = () => dispatch(toggleCompletedThunk(contact));

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

      <ButtonEdit onClick={ handleEdit}>
        <MdEdit size={24} /> 
      </ButtonEdit>

      <ButtonDelete onClick={ handleDelete }>
        <MdClose size={24} />
      </ButtonDelete>
     
    </Card>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
}