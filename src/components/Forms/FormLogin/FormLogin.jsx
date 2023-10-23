import { useDispatch } from 'react-redux';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import { loginUserThunk } from '../../../redux/operationsAuth'

//style
import { TextInputLiveFeedback } from 'components/Forms/TextInputLiveFeedback/TextInputLiveFeedback';
import { ButtonSaveContact as ButtonSignIn, ButtonsBox } from '../Buttons.styles';
import { Link } from '../Forms.styled';
export const FormLogin = () => {
  const dispatch = useDispatch()


  const handleSubmit = async (values) => {
    const { userEmail:email, userPassword:password } = values;
   
    dispatch(
      loginUserThunk({
        email,
        password,
    }));
  }

  // ==== configForm
  const configFormik = useFormik({
    initialValues: { 
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
          placeholder="user@mail.com" 
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
        
        <ButtonsBox>
          <ButtonSignIn type="submit">Sing In</ButtonSignIn>
          <Link to={'/register'} >Go Sing Up</Link>
        </ButtonsBox>
      </Form>
    </FormikProvider>
  );
}