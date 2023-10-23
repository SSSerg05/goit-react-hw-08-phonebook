import { useDispatch } from 'react-redux';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import { registerUserThunk } from '../../../redux/authOperations'
// style
import { TextInputLiveFeedback } from 'components/Forms/TextInputLiveFeedback/TextInputLiveFeedback';
import { ButtonSaveContact as ButtonSignUp, ButtonSaveContact as ButtonReset, ButtonsBox } from '../Buttons.styles';

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

  // ==== configFormik
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
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
          icon='mail'
          label="Email"
          id="userEmail"
          name="userEmail"
          placeholder="user@mail.com" 
          helpText="x.0-9_+x@x.0-9x.xx"
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

        <ButtonsBox>
          <ButtonSignUp type="submit">Sing Up</ButtonSignUp>
          <ButtonReset type="reset">Reset</ButtonReset>
        </ButtonsBox>

      </Form>
    </FormikProvider>
  );

}