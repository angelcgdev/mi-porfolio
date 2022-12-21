import React, { useCallback, useEffect, useState } from 'react';
import styles from "./styles.module.scss";

export const NavBar = ({navRef , goHome, deskMenu, mobileMenu, mobileButton, isOpen, className}) => {

  const [isOnTop, setIsOnTop] =  useState();

  const onScroll = useCallback(event => {
    const { scrollY } = window;
    setIsOnTop(scrollY>10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

  return (
    <nav className={`${isOnTop||isOpen?'shadow-sm':''} ${styles.nav} ${className} transition-all duration-200`} ref={navRef}>
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
