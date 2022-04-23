import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="DefaultLayout_MainContainer">
      <div className="DefaultLayout_HeaderContainer">
        <p>header</p>
      </div>
      <div className="DefaultLayout_BodyContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
