import "./style.scss";
import VivuxeLogo from "../../../assets/VivuxeLogo.png";
import { Button, Form } from "antd";
import { useState } from "react";
import LoginModal from "../../../pages/Homepage/modal/LoginModal";
import SignupModal from "../../../pages/Homepage/modal/SignupModal";

const TopNav: React.FC = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const userFromLocalStorage = localStorage.getItem("user");
  const userInfo = null;
  // {
  //   name: "admin",
  //   /// ....
  // };

  return (
    <div className="vivu_layout">
      <div className="header">
        <div className="m_container">
          <a href="/" className="logo_container">
            <div className="full_logo">
              <img loading="lazy" alt="Vivuxe" src={VivuxeLogo} />
            </div>
          </a>
          <div className="menu_container">
            <a href="/#">Về VivuXe </a>
            <div className="vertical_line"></div>
            {userFromLocalStorage ? (
              <div>
                <span>Xin chào {userFromLocalStorage}</span>
                <button>log out</button>
              </div>
            ) : (
              <>
                <div>
                  <Button type="primary" onClick={() => setSignupVisible(true)}>
                    Đăng ký
                  </Button>
                  <SignupModal
                    visible={signupVisible}
                    onClose={() => setSignupVisible(false)}
                  />
                </div>
                <div>
                  <Button type="primary" onClick={() => setLoginVisible(true)}>
                    Đăng nhập
                  </Button>
                  <LoginModal
                    visible={loginVisible}
                    onClose={() => setLoginVisible(false)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
