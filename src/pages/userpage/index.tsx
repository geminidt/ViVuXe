import "./Userpage.scss";
import {
  UserOutlined,
  CarOutlined,
  LockOutlined,
  LogoutOutlined,
  RestOutlined,
  ScheduleOutlined

} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <UserOutlined />, label: "Tài khoản của tôi" },
  {
    key: "sub1",
    label: "Xe của tôi",
    icon: <CarOutlined />,
    children: [
      { key: "2", label: "Option 2" },
      { key: "3", label: "Option 3" },
      { key: "4", label: "Option 4" },
      { key: "5", label: "Option 5" },
    ],
  },
  { key: "6", icon: <ScheduleOutlined />, label: "Chuyến của tôi" },
  { key: "7", icon: <LockOutlined />, label: "Đổi mật khẩu" },
  { key: "8", icon: <RestOutlined />, label: "Yêu cầu xoá tài khoản" },
  { key: "8", icon: <LogoutOutlined />, label: "Đăng xuất" },
];

const Userpage = () => {
  return (
    <div>
      <div>
        <p className="wellcome-title">Xin chào Goma!</p>
        <hr />
      </div>

      <div className="menu-container">
        <Menu style={{backgroundColor: "#e0f4ff"}}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  );
};

export default Userpage;
