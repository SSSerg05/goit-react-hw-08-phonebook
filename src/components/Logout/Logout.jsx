import { useDispatch, useSelector } from "react-redux";
import { LoginContainer, UserName } from "./Logout.styled"
import { selectAuthetification, selectUserData } from "redux/selectors"
import { logoutUserThunk } from "redux/operations";

export const Login = () => {
  const dispath = useDispatch();

  const user = useSelector(selectUserData);
  const authetificated = useSelector(selectAuthetification);
  if (!authetificated) return

  
  const handleLogout = () => {
    dispath(logoutUserThunk())
  }

  return (
    <LoginContainer type='button' onClick={ handleLogout }>
      <UserName>User: {user.name}</UserName>
      Logout
    </LoginContainer>
  )
}

export default Login;