import { useDispatch, useSelector } from "react-redux";
import { LoginContainer, UserName } from "./Logout.styled"
import { selectAuthetification, selectUserData } from "redux/selectors"
import { clearContactsThunk, logoutUserThunk } from "redux/operations";

export const Login = () => {
  const dispath = useDispatch();

  const user = useSelector(selectUserData);
  const authetificated = useSelector(selectAuthetification);
  if (!authetificated) return (<></>)

  
  const handleLogout = () => { 
    dispath(logoutUserThunk());   // прибираемо авторизацію в authSlice
    dispath(clearContactsThunk()); // очищуємо список контактів в contactsSlice
  }

  return (
    <LoginContainer type='button' onClick={ handleLogout }>
      <UserName>User: {user.name}</UserName>
      Logout
    </LoginContainer>
  )
}

export default Login;