import { Outlet } from 'react-router-dom';
import TopNav from '../../components/organisms/topNav/topNav';

function DefaultLayout() {
  return (
    <div className="DefaultLayout_MainContainer">
      <div className="DefaultLayout_HeaderContainer">
        <TopNav />
      </div>
      <div className="DefaultLayout_BodyContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
