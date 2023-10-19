import { useDispatch, useSelector } from "react-redux";
import { LoginContainer, UserName } from "./Logout.styled"
import { selectAuthetification, selectUserData } from "redux/selectors"
import { clearContactsThunk, logoutUserThunk } from "redux/operations";
import { MdAccountCircle } from "react-icons/md";

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
    <LoginContainer 
      type='button' 
      onClick={ handleLogout }
      text={user.name}
      hover-text={'Logout'}>
      <MdAccountCircle size={24}/>
      {/* <UserName>{user.name}</UserName> */}
    </LoginContainer>
  )
}

export default Login;