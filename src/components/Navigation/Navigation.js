import React, { useState, useEffect } from 'react';
import UnauthorizedMenu from '../UnauthorizedMenu/UnauthorizedMenu';
import AuthorizedMenu from '../AuthorizedMenu/AuthorizedMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({ loggedIn }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResizeWindow() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <div className="navigation">
      {loggedIn ? (
        <div className="navigation__container">
          {windowWidth > 768 ? <AuthorizedMenu /> : <BurgerMenu />}
        </div>
      ) : (
        <UnauthorizedMenu />
        )}
        </div>
  );
}

export default Navigation;