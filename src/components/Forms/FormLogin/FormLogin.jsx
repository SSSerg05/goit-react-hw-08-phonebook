import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import { TextInputLiveFeedback } from 'components/Forms/TextInputLiveFeedback/TextInputLiveFeedback';
import { loginUserThunk } from '../../../redux/operations'

export const FormLogin = () => {
  const dispatch = useDispatch()


  const handleSubmit = async (values) => {
    const { userEmail:email, userPassword:password } = values;
    // console.log(values);
    
    dispatch(
      loginUserThunk({
        email,
        password,
    }));
  }

  // ==== configForm
  const configFormik = useFormik({
    initialValues: { 
      userName: "", 
      userEmail: "", 
      userPassword: "", 
    },
    onSubmit: async (values) => handleSubmit(values),
    validationSchema: Yup.object({

      userEmail: Yup.string()
        .matches(
          /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
          'Invalid email address'
        )
        .required('Email is required'),

      userPassword: Yup.string()
        .min(7, 'Must be at least 7 characters')
        .required('Password is required'),
    }),
  });

  return (
    <FormikProvider value={configFormik}>
      <Form>
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
          <button type="submit">Sing In</button>
        </div>
        <div>
          <NavLink to={'/register'} >Sing Up</NavLink>
        </div>
      </Form>
    </FormikProvider>
  );
}