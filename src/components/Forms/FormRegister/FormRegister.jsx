import { useDispatch } from 'react-redux';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import { TextInputLiveFeedback } from 'components/Forms/TextInputLiveFeedback/TextInputLiveFeedback';
import { registerUserThunk } from '../../../redux/operations'

export const FormRegister = () => {
  const dispatch = useDispatch()


  const handleSubmit = async (values) => {
    const {userName:name, userEmail:email, userPassword:password} = values;
    
    dispatch(
      registerUserThunk({
        name,
        email,
        password,
    }))
    
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

      userName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(40, 'Must be less than 40 characters')
        .matches(
          /^[\w-/']+$/,
          'Cannot contain special characters or spaces'
        )
        .required('Username is required'),

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
          <button type="submit">Sing Up</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );

}