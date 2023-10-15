import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { FormLogin } from "components/Forms/FormLogin/FormLogin"
import {selectAuthetification} from 'redux/selectors';


export const Login = () => { 
  
  const authetification = useSelector(selectAuthetification);
  if(authetification) return <Navigate to='/contacts' />


  return(
    <>
      <h2>Login Into Your Account</h2>
      <FormLogin />
    </>
  )
}

export default Login