import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMoonOutline, IoSunny } from 'react-icons/io5';
// redux
import { selectStatusTheme } from 'redux/selectors';
import { setStatusTheme } from 'redux/themeSlice';
// style
import { ThemeLink } from './Theme.styled'


export const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectStatusTheme);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    const nextTheme = theme ?? 'dark';
    dispatch(setStatusTheme(nextTheme));
  };


  return (
    <ThemeLink onClick={ handleChangeTheme }>
      { (theme === 'light' && (
          <IoSunny size={24} />
        )) || (
          <IoMoonOutline size={24} />
        )
      }
    </ThemeLink>
  )

}