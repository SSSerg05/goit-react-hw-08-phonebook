import { useDispatch, useSelector } from 'react-redux';
import { IoMoonOutline, IoSunny } from 'react-icons/io5';
// redux
import { selectStatusTheme } from 'redux/selectors';
// style
import {} from './Theme.styled'

export const Theme = () => {
  const dispath = useDispatch();
  const theme = useSelector(selectStatusTheme);

  return (
    <>
    {theme.status === 'light'}
    </>
  )

}