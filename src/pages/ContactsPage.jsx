// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import {selectAuthetification, } from 'redux/selectors';
import { Container } from "components/App/App.styled";
import { Phonebook } from 'components/Phonebook/Phonebook';

export const ContactsPage = () => { 

  const authetificated = useSelector(selectAuthetification);
  if (!authetificated) return;

  return(
    <Container>
      <Phonebook />
    </Container>
  )
}

export default ContactsPage