import { Theme } from "components/Theme/Theme"
import { List, Link } from "./UserRegistration.styled"

export const UserRegistration =() => {
  return (
    <>
      <List>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </List>
      <Theme />
    </>
  )
}