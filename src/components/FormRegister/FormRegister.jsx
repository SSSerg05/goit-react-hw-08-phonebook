import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import { TextInputLiveFeedback } from 'components/TextInputLiveFeedback/TextInputLiveFeedback';

export const FormRegister = () => {
  
  const handleSubmit = async (values) => {
    const {userName:name, userEmail:email, userPassword:password} = values
    const finalUserData = {
      name,
      email,
      password,
    }

    console.log(finalUserData);
    
  }

  const formik = useFormik({
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
        .required('Username is required')
        .matches(
          /^[\w-/']+$/,
          'Cannot contain special characters or spaces'
        ),

        userEmail: Yup.string()
        .matches(
          /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, //.test(values.userEmail),
          'Invalid email address'
        ) 
        .required('Email is required'),

      userPassword: Yup.string()
        .min(7, 'Must be at least 7 characters')
        .required('Password is required'),
    }),
  });

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
          type="text"
        />

        <div>
          <button type="submit" >Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );

}