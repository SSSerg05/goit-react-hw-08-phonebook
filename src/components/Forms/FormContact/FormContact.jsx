import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';

import { addContactThunk } from "redux/operations";
import { selectContacts, } from "redux/selectors";

// style
//import { FieldBox, FieldLabel, FieldPosition, FieldInput, } from "../Forms.styled"
import { ButtonSaveContact as ButtonReset, ButtonSaveContact, ButtonsBox, } from '../Buttons.styles';
import { TextInputLiveFeedback } from "../TextInputLiveFeedback/TextInputLiveFeedback";


export const FormContact = ({onClose}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  // onSubmit
  const handleSubmit = values => {
    // e.preventDefault();
    //const form = e.target;
    const {contactName:name, contactNumber:number} = values; //form.elements;

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
    // form.reset();
    onClose?.();
  }


// https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
// >. Update .<
// http://yup-phone.js.org/

// I've created a yup-phone module that uses google-libphonenumber which gives accurate validation checks and can be installed directly from github

// npm install --save yup yup-phone.

// Check Usage

// const Yup = require('yup');
// require('yup-phone');

// // validate any phone number (defaults to India for country)
// const phoneSchema = Yup.string().phone().required();
// phoneSchema.isValid('9876543210'); // → true

// ==== configFormik
const nameRegExp = "^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \\-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp="\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}"
const configFormik = useFormik({
  initialValues: { 
    contactName: "", 
    contactNumber: "", 
  },
  onSubmit: async (values) => handleSubmit(values),
  validationSchema: Yup.object({

    contactName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(40, 'Must be less than 40 characters')
      .matches(
        nameRegExp,
        "Wrong characters"
      )
      .required('Username is required'),

    contactNumber: Yup.string()
      .matches( 
        phoneRegExp, 
        "Wrong number"
      )
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
        <ButtonSaveContact type="submit">Save</ButtonSaveContact>
        <ButtonReset type="reset">Reset</ButtonReset>
      </ButtonsBox>

    </Form>
  </FormikProvider>
);





  // return (
  //   <form onSubmit={handleSubmit}>
  //     <FieldBox>
  //       <FieldLabel>
  //         Name
  //         <FieldPosition>
  //           <FieldInput
  //             type="text"
  //             name="name"
  //             pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
  //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //             required
  //           />
  //         </FieldPosition>
  //       </FieldLabel>
  //     </FieldBox>

  //     <FieldBox>
  //       <FieldLabel>
  //         Number
  //         <FieldPosition>
  //           <FieldInput
  //             type="tel"
  //             name="number"
  //             pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
  //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //             required
  //           />
  //         </FieldPosition>
  //       </FieldLabel>
  //     </FieldBox>

  //     <ButtonSaveContact type="submit">Save</ButtonSaveContact>
  //   </form>
  // )
}


