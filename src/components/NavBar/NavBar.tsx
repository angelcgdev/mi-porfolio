import { MutableRefObject } from 'react';
import styles from "./styles.module.scss";
import { useNavBar } from './Hooks/useNavBar';

interface Props{
  navRef: MutableRefObject<HTMLElement>,
  goHome,
  mobileMenu,
  rightOptions,
  isOpen?:boolean,
  className?: string,
  hideRightOpt,
  onScroll?: Function,
}

export const NavBar = ({navRef , goHome, mobileMenu, rightOptions, isOpen = false, className, hideRightOpt, onScroll}:Props) => {
  
  const { isOnTop } = useNavBar({ isOpen, onScroll });

  return (
    <nav className={`bg-white dark:bg-black shadow-sm ${isOnTop||isOpen?'dark:shadow-slate-900':'shadow-transparent'} ${styles.nav} ${!!className?className:''}`} ref={navRef}>
      <div className="h-10 flex items-center justify-between">
        <h1 className="font-bold cursor-pointer select-none" onClick={goHome}>AngelCgDev.</h1>
        <div>
          {rightOptions}
        </div>
      </div>
      <div id="mobile-menu" className={`${hideRightOpt?'hidden':''} overflow-hidden transition-all duration-300 ${!isOpen?"max-h-0":"max-h-96"}`}>
        {mobileMenu}
      </div>
    </nav>
  )
}
