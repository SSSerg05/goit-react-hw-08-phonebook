import { useDispatch } from 'react-redux';
import { FormikProvider, Form } from 'formik';
// import { useFormik, FormikProvider, Form } from 'formik';
// import * as Yup from 'yup';

import { InitForm } from "../InitForm"
import { TextInputLiveFeedback } from 'components/TextInputLiveFeedback/TextInputLiveFeedback';
import { registerUserThunk } from '../../../redux/operations'

export const FormRegister = () => {
  const dispatch = useDispatch()


  const handleSubmit = async (values) => {
    const {userName:name, userEmail:email, userPassword:password} = values
    
    const finalUserData = {
      name,
      email,
      password,
    }
    dispatch(registerUserThunk(finalUserData))
    console.log(finalUserData);
    
  }
  const formik = InitForm();
 
  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback
          label="Username"
          id="userName"
          name="userName"
          placeholder="Enter your name" 
          helpText="Must be 3-40 characters and cannot contain special characters."
          type="text"
        />
        <TextInputLiveFeedback
          label="Email"
          id="userEmail"
          name="userEmail"
          placeholder="mister@gmail.com" 
          helpText=""
          type="email"
        />
        <TextInputLiveFeedback
          label="Password"
          id="userPassword"
          name="userPassword"
          placeholder="Enter password" 
          helpText="Must be more 7 characters"
          type="password"
        />

        <div>
          <button type="submit" onSubmit={(values) => handleSubmit(values) }>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );

}