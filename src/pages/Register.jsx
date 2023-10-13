// import { Dispatch } from "react"
// import { Formik, Field, Form } from "formik"
// import { authReducer } from "redux/authSlice";

import { FormRegister } from "components/FormRegister/FormRegister"

export const Register = () => { 
  // const dispatch = Dispatch();

  return(
    <div>
      <h2>Register Your Account</h2>
      
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
    </div>
  )
}

export default Register