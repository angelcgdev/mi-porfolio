import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const DarkBtn = () => {

  const { theme, setTheme } = useTheme();
  const  [themeD, setThemeD ] = useState('');

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if(!!theme){
      setThemeD(theme);
    }
  }, [theme])
  

  return (
    <button type='button' className={`px-2 ${themeD==='dark'?'fill-black':'fill-white'}`} onClick={handleChangeTheme}>
      {
        themeD==='light'?(
          <svg id='light' className='h-6 w-min' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm9-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1.001 1.001 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29ZM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24ZM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1ZM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29Zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71A1 1 0 0 1 18.36 17l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24Z"/>
          </svg>
        ):(
          <svg id='light' className='h-6 w-min' xmlns="http://www.w3.org/2000/svg" width="512" height="509" fill="none" viewBox="0 0 512 509">
            <path fill="currentColor" d="M343.1 312c-1.8.1-3.5.1-5.3.1-29.1 0-56.5-11.3-77.1-31.9-20.6-20.6-31.9-48-31.9-77.1 0-16.6 3.7-32.6 10.6-47.1 3.1-6.4 6.8-12.5 11.1-18.2-7.6.8-14.9 2.4-22 4.6-46.8 14.8-80.7 58.5-80.7 110.2 0 63.8 51.7 115.5 115.5 115.5 35.3 0 66.8-15.8 88-40.7 4.8-5.7 9.2-11.9 12.8-18.5-6.8 1.7-13.8 2.8-21 3.1Z"/>
          </svg>
        )
      }

    </button>
  )
}
