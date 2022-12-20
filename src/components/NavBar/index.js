import React from 'react';
import styles from "./styles.module.scss";

export const NavBar = ({navRef , goHome, deskMenu, mobileMenu, mobileButton, isOpen, className}) => {
  return (
    <nav className={`shadow-sm ${styles.nav} ${className}`} ref={navRef}>
      <div className="h-10 flex items-center justify-between bg-white">
        <h1 className="font-bold cursor-pointer select-none" onClick={goHome}>AngelCgDev.</h1>
        <div>
            {deskMenu}
          <div className="flex">
            <div className="sm:hidden">
                {mobileButton}
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`overflow-hidden transition-all duration-300 ${!isOpen?"max-h-0":"max-h-96"}`}>
        {mobileMenu}
      </div>
    </nav>
  )
}
