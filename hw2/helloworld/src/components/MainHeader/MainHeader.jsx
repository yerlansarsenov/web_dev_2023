import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

function MainHeader(props) {
  return (
    <header className={classes['main-header']}>
      <div>{props.isAuthenticated && <h1>Welcome</h1>}</div>
      <div>{!props.isAuthenticated && <h1>Please, log in</h1>}</div>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
}

export default MainHeader;
