import { useSelector } from 'react-redux';

import {selectAuthetification, } from 'redux/selectors';
import { Phonebook } from 'components/Phonebook/Phonebook';
// import { Section } from 'components/Section/Section';

export const ContactsPage = () => { 

  const authetificated = useSelector(selectAuthetification);
  if (!authetificated) return;

  return(
    // <Section> 
      <Phonebook />
    // </Section>
  )
}

export default ContactsPage