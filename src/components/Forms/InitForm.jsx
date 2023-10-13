import { useFormik } from 'formik';
import * as Yup from 'yup';

export const InitForm = () => {
  const formik = useFormik({
    initialValues: { 
      userName: "", 
      userEmail: "", 
      userPassword: "", 
    },
    onSubmit: async (values) => {},  //handleSubmit(values),
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
  return formik;
}

