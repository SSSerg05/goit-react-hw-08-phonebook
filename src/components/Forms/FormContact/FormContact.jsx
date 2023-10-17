import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';

import { addContactThunk, updateContactThunk } from "redux/operations";
import { selectContacts, } from "redux/selectors";

// style
//import { FieldBox, FieldLabel, FieldPosition, FieldInput, } from "../Forms.styled"
import { ButtonSaveContact as ButtonReset, ButtonSaveContact, ButtonsBox, } from '../Buttons.styles';
import { TextInputLiveFeedback } from "../TextInputLiveFeedback/TextInputLiveFeedback";


export const FormContact = ({contact, onClose}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 
  // onSubmit
  const handleSubmit = values => {
    if(contact.id) {
      handleUpdate(values);
      return
    }

    handleNewSave(values);
  }

  // Update
  const handleUpdate = values => {
    const {contactName:name, contactNumber:number} = values;

    dispatch(updateContactThunk({
      id: contact.id,
      name, 
      number,
      selected: contact.selected,
    }));
    toast.success(`${name} - Update in phonebook`);
    onClose?.();
  }


  // Save New
  const handleNewSave = values => {
    const {contactName:name, contactNumber:number} = values;

    const isFound = (name) => {
      const findName = name.trim().toLowerCase();

      return contacts.some(item => item.name.toLowerCase() === findName)
    }
    
    if (isFound(name)) {
      toast.error(`${name} - find in phonebook base`);
      return;
    }

    dispatch(addContactThunk({
      name: name, 
      number: number
    }));

    toast.success(`${name} - Add in phonebook`);
    onClose?.();
  }

  // ==== configFormik
  const nameRegExp = "^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \\-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
  const phoneRegExp="\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}"
  
  const configFormik = useFormik({
    initialValues: { 
      contactName: contact.name, 
      contactNumber: contact.number, 
    },
    onSubmit: async (values) => handleSubmit(values),
    validationSchema: Yup.object({

      contactName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(40, 'Must be less than 40 characters')
        .matches( nameRegExp, "Wrong characters")
        .required('Username is required'),

      contactNumber: Yup.string()
        .matches( phoneRegExp, "Wrong number")
        .required('Phone number is required'),
    }),
  });

  return (
    <FormikProvider value={configFormik}>
      <Form>
      <TextInputLiveFeedback
          label="Contact Name"
          id="contactName"
          name="contactName"
          placeholder="Enter contact name" 
          helpText="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          type="text"
        />
        <TextInputLiveFeedback
          label="Phone number"
          id="contactNumber"
          name="contactNumber"
          placeholder="+380-67-111-11-11" 
          helpText="+380-67-111-11-11. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          type="tel"
        />

        <ButtonsBox>
          <ButtonSaveContact type="submit">
            {contact.id ? 'Update': 'Save' }
          </ButtonSaveContact>

          { !contact.id &&
            <ButtonReset type="reset">Reset</ButtonReset>
          }
        </ButtonsBox>

      </Form>
    </FormikProvider>
  );
}


