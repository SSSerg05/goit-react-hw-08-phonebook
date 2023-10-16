import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {selectAuthetification} from 'redux/selectors';
import { Section } from "components/Section/Section"
// import { Formik, Field, Form } from "formik"

import { FormRegister } from "components/Forms/FormRegister/FormRegister"


export const RegisterPage = () => { 
  
  const authetificated = useSelector(selectAuthetification);
  if(authetificated) return <Navigate to='/contacts' />

  return(
    <Section title='Register Your Account'>
      
      <FormRegister />
      
      {/* <Formik 
        initialValues={{ userName: "", userEmail: "", userPassword: "", }}
        onSubmit={ async (values) => handleSubmit(values) }
      >
        <Form>
          <Field name="userName" type="text" required minlenght={2} />
          <Field 
            name="userEmail" 
            type="email" 
            // pattern = "/^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,4}$/" 
            required 
          />
          <Field 
            name="userPassword" 
            type="password" 
            minlenght={7}
            required 
          />
          <button type="submit">Submit</button>
        </Form>

      </Formik> */}
    </Section>
  )
}

export default RegisterPage