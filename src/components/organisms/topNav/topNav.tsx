import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/button';
import SCTopNav from './topNav.style';

function TopNav() {
  const navigate = useNavigate();

  return (
    <SCTopNav>
      <div className="TopNav_MainContainer">
        <Button text="Home" size="full" noBorder onClick={() => navigate('/')} />
        <Button text="Buttons" size="full" noBorder />
        <Button text="Inputs" size="full" noBorder />
        <Button text="Tooltip" size="full" noBorder />
        <Button text="Forms" size="full" noBorder />
        <Button text="Tables" size="full" noBorder onClick={() => navigate('/tables')} />
      </div>
    </SCTopNav>
  );
}

export default TopNav;
