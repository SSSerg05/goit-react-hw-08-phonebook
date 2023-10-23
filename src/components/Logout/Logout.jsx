import { useDispatch, useSelector } from "react-redux";
import { MdAccountCircle, MdLogout } from "react-icons/md";

//redux
import { logoutUserThunk } from "redux/authOperations";
import { clearContactsThunk } from "redux/contactsOperations";
import { selectAuthetification, selectUserData } from "redux/selectors"

// style
import { LoginText, LogoutContainer, LogoutLink, LogoutOverlay, LogoutText,  } from "./Logout.styled"


export const Logout = () => {
  const dispath = useDispatch();

  const user = useSelector(selectUserData);
  const authetificated = useSelector(selectAuthetification);
  if (!authetificated) return (<></>)

  
  const handleLogout = () => { 
    dispath(logoutUserThunk());   // прибираемо авторизацію в authSlice
    dispath(clearContactsThunk()); // очищуємо список контактів в contactsSlice
  }

  return (

    <LogoutLink 
        href="#" 
        // target="_parent" 
        rel="nooferel nofollow noopener" 
        onClick={ handleLogout } >
      <LogoutContainer>
        <MdAccountCircle size={24}/>
        <LoginText>{user.name}</LoginText>

        <LogoutOverlay>
          <MdLogout size={18} />
          <LogoutText>Logout</LogoutText>
        </LogoutOverlay>

      </LogoutContainer>
    </LogoutLink>
  )
}

export default Logout;