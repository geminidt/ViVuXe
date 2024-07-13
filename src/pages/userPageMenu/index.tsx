import "./UserPageMenu.scss";
import {
  UserOutlined,
  CarOutlined,
  LockOutlined,
  LogoutOutlined,
  RestOutlined,
  ScheduleOutlined,
  FormOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Card } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <UserOutlined />, label: "Tài khoản của tôi" },
  {
    key: "sub1",
    label: "Xe của tôi",
    icon: <CarOutlined />,
    children: [
      { key: "2", icon: <CarOutlined />, label: "Danh sách xe" },
      { key: "3", icon: <MoneyCollectOutlined />, label: "Ví của tôi" },
      { key: "4", icon: <FormOutlined />, label: "Đăng ký xe" },
    ],
  },
  { key: "5", icon: <ScheduleOutlined />, label: "Chuyến của tôi" },
  { key: "6", icon: <LockOutlined />, label: "Đổi mật khẩu" },
  { key: "7", icon: <RestOutlined />, label: "Yêu cầu xoá tài khoản" },
  { key: "8", icon: <LogoutOutlined />, label: "Đăng xuất" },
];


const UserPageMenu = () => {
  return (
      <div className="main-container">
        <div className="menu-container">
          <div>
            <p className="wellcome-title">Xin chào Goma!</p>
            <hr />
          </div>
          <div className="menu-content">
            <Menu
              style={{ backgroundColor: "#e0f4ff" }}
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </div>
        </div>
        <div className="info-container">
          <div className="info-card" style={{ position: "relative", marginLeft: "100px" }}>
            <Card style={{ width: 850, height: 350 }}>

  

            </Card>
          </div>   
        </div>
        </div>
  );
};

export default UserPageMenu;
