import React from 'react';
import Button from '../../atoms/button/button';
import SCTopNav from './topNav.style';

function TopNav() {
  return (
    <SCTopNav>
      <div className="TopNav_MainContainer">
        <Button text="Home" size="full" noBorder />
        <Button text="Buttons" size="full" noBorder />
        <Button text="Inputs" size="full" noBorder />
        <Button text="Tooltip" size="full" noBorder />
        <Button text="Forms" size="full" noBorder />
        <Button text="Tables" size="full" noBorder />
      </div>
    </SCTopNav>
  );
}

export default TopNav;
