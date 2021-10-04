import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UnauthorizedMenu from '../UnauthorizedMenu/UnauthorizedMenu';
import AuthorizedMenu from '../AuthorizedMenu/AuthorizedMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
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
    <Switch>
      <Route exact path="/">
        <UnauthorizedMenu />
      </Route>
      <Route path={['/movies', '/saved-movies', '/profile']}>
        {windowWidth > 768 ? <AuthorizedMenu /> : <BurgerMenu />}
      </Route>
    </Switch>
  );
}

export default Navigation;