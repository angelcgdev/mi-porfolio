import React from 'react'

export const NavBar = ({navRef , goHome, deskMenu, mobileMenu, mobileButton, isOpen, className}) => {
  return (
    <div className={`sticky top-0 z-10 ${className}`} ref={navRef}>
      <div className="mt-6 flex items-center justify-between bg-white">
        <h1 className="font-medium cursor-pointer" onClick={goHome}>AngelCgDev.</h1>
        <div>
            {deskMenu}
          <div className="flex">
            <div className="sm:hidden">
                {mobileButton}
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`overflow-hidden transition-all duration-500 ${!isOpen?"max-h-0":"max-h-80"}`}>
        {mobileMenu}
      </div>
    </div>
  )
}
