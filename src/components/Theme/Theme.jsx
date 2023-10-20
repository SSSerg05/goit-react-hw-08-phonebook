import { useDispatch, useSelector } from 'react-redux';
import { IoMoonOutline, IoSunny } from 'react-icons/io5';
// redux
import { selectStatusTheme } from 'redux/selectors';
import { setStatusTheme } from 'redux/themeSlice';
import { statusTheme } from 'redux/constants';
// style
import { ThemeLink } from './Theme.styled'



export const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectStatusTheme);
  
  const handleThemeChange = theme => dispatch(setStatusTheme(theme));

  return (
    <ThemeLink onClick={() => handleThemeChange(statusTheme[theme])}>
      { (theme === 'light' && (
          <IoSunny size={24} />
        )) || (
          <IoMoonOutline size={24} />
        )
      }
    </ThemeLink>
  )

}