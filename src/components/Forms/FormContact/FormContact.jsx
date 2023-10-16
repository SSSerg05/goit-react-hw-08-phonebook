import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContactThunk } from "redux/operations";
import { FieldBox, FieldLabel, FieldPosition, FieldInput, } from "./FormContact.styled"
import { selectContacts, } from "redux/selectors";
import { Button, } from '../../Forms/Buttons.styles';

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  // onSubmit
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const {name, number} = form.elements;

    const isFound = (name) => {
      const findName = name.trim().toLowerCase();

      return contacts.some(item => item.name.toLowerCase() === findName)
    }
    
    if (isFound(name.value)) {
      toast.error(`${name.value} - find in phonebook base`);
      return;
    }


    dispatch(addContactThunk({
      name: name.value, 
      number: number.value
    }));

    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldBox>
        <FieldLabel>
          Name
          <FieldPosition>
            <FieldInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FieldPosition>
        </FieldLabel>
      </FieldBox>

      <FieldBox>
        <FieldLabel>
          Number
          <FieldPosition>
            <FieldInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FieldPosition>
        </FieldLabel>
      </FieldBox>

      <Button type="submit">Save</Button>
    </form>
  )
}


