import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import {selectAuthetification, } from 'redux/selectors';
import { Container } from "components/App/App.styled";
import { Phonebook } from 'components/Phonebook/Phonebook';

export const Contacts = () => { 
  
  // const authetification = useSelector(selectAuthetification);

  return(
    <Container>
      <Phonebook />
    </Container>
  )
}

export default Contacts