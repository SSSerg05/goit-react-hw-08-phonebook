import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {selectAuthetification} from 'redux/selectors';
import { Section } from "components/Section/Section"

import { FormRegister } from "components/Forms/FormRegister/FormRegister"


export const RegisterPage = () => { 
  
  const authetificated = useSelector(selectAuthetification);
  if(authetificated) return <Navigate to='/contacts' />

  return(
    <Section title='Register Your Account'>
      <FormRegister />
    </Section>
  )
}

export default RegisterPage