import { useSelector } from 'react-redux';
import { IoMoonOutline, IoSunny } from 'react-icons/io5';
// redux
import { selectStatusTheme } from 'redux/selectors';
// style
import { ThemeLink } from './Theme.styled'

export const Theme = () => {
  // const dispath = useDispatch();
  const theme = useSelector(selectStatusTheme);
  console.log(theme);

  return (
    <ThemeLink>
      { (theme === 'light' && (
          <IoSunny size={24} />
        )) || (
          <IoMoonOutline size={24} />
        )
      }
    </ThemeLink>
  )

}