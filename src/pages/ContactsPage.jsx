import { useSelector } from 'react-redux';

import {selectAuthetification, } from 'redux/selectors';
import { Phonebook } from 'components/Phonebook/Phonebook';

export const ContactsPage = () => { 

  // const authetificated = useSelector(selectAuthetification);
  // if (!authetificated) return;

  return(
      <Phonebook />
  )
}

export default ContactsPage