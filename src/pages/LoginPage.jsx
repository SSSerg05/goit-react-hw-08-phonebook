// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import { FormLogin } from "components/Forms/FormLogin/FormLogin"
// import {selectAuthetification} from 'redux/selectors';
import { Section } from "components/Section/Section"

export const LoginPage = () => { 
  
  // const authetificated = useSelector(selectAuthetification);
  // if(authetificated) return <Navigate to='/contacts' />


  return(
    <Section title={'Login Into Your Account'}>
      <FormLogin />
    </Section>
  )
}

export default LoginPage