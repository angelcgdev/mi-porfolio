import { MutableRefObject, ReactNode } from 'react';
import styles from "./NavBar.module.scss";
import { useNavBar } from './Hooks/useNavBar';

interface Props{
  navRef: MutableRefObject<HTMLElement>,
  goHome: ()=>void,
  mobileMenu: ReactNode,
  rightOptions: ReactNode,
  isOpen?:boolean,
  className?: string,
  hideRightOpt: boolean,
  onScroll?: Function,
}

export const NavBar = ({navRef , goHome, mobileMenu, rightOptions, isOpen = false, className, hideRightOpt, onScroll}:Props) => {
  
  const { isOnTop } = useNavBar({ isOpen, onScroll });

  return (
    <nav className={`bg-white dark:bg-black ${isOnTop||isOpen?'dark:shadow-slate-900':'shadow-transparent'} ${styles.nav} ${!!className?className:''}`} ref={navRef}>
      <div className="h-10 flex items-center justify-between">
        <h1 className="font-bold cursor-pointer select-none" onClick={goHome}>LuisCaroDev</h1>
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
