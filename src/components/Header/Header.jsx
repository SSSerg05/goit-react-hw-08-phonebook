import { useSelector } from 'react-redux';
// redux
import { selectAuthetification } from 'redux/selectors';
// components
import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserRegistration } from 'components/UserRegistration/UserRegestraation';
// style
import { HeaderApp, Nav } from "./Header.styled";

export const Header = () => {
  const authetificated = useSelector(selectAuthetification);

  return (
    <HeaderApp>
      <Nav>
        {(authetificated && <UserMenu />) || <UserRegistration />}
      </Nav>
    </HeaderApp>
  )
}