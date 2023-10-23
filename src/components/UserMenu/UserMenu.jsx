import { UserMenuList, UserMenuLink, } from "./UserMenu.styled";


export const UserMenu = () => {

  return (
    <UserMenuList>
      <li><UserMenuLink to='/'>Home</UserMenuLink></li>
      <li><UserMenuLink to='/contacts'>Contacts</UserMenuLink></li>
    </UserMenuList>
  )
}