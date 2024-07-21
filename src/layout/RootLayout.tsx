import { Outlet } from "react-router-dom";
import TopNav from "../common/components/TopNav";
import BotNav from "../common/components/BotNav";
import "./RootLayout.scss";

const RootLayout: React.FC = () => {
  return (
    <div className="root-layout">
      <div className="header">
        <TopNav />
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div className="footer">
        <BotNav />
      </div>
    </div>
  );
};

export default RootLayout;
