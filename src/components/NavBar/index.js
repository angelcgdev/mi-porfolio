import React from 'react'

export const NavBar = ({navRef , goHome, deskMenu, mobileMenu, mobileButton, isOpen, className}) => {
  return (
    <div className={`py-3 sticky top-0 z-10 bg-white ${className}`} ref={navRef}>
      <div className="h-10 flex items-center justify-between bg-white">
        <h1 className="font-medium cursor-pointer select-none" onClick={goHome}>AngelCgDev.</h1>
        <div>
            {deskMenu}
          <div className="flex">
            <div className="sm:hidden">
                {mobileButton}
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`overflow-hidden transition-all duration-500 ${!isOpen?"max-h-0":"max-h-96"}`}>
        {mobileMenu}
      </div>
    </div>
  )
}
