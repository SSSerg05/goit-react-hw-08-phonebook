import { FormLogin } from "components/Forms/FormLogin/FormLogin"
import { Section } from "components/Section/Section"

export const LoginPage = () => { 

  return(
    <Section title={'Login Into Your Account'}>
      <FormLogin />
    </Section>
  )
}

export default LoginPage