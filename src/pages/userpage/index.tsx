import "./Userpage.scss";
import { useState } from "react";
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
import { Menu, Card, Form, Button, Input } from "antd";
import Goma from "../../assets/Goma.jpg";
import ProfileUpdateModal from "../modal/profileUpdateModal";

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


const onFinish = (values: unknown) => {
  console.log("Received values of form: ", values);
};

const Userpage = () => {
  const [profileUpdateVisible, setProfileUpdateVisible] = useState(false);

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
        <div className="info-card">
          <Card style={{ width: 850, height: 350 }}>
            <div
              className="info-left"
            >
              <h2>
                Thông tin tài khoản{" "}
                <span>
                  <Button type="primary" onClick={() => setProfileUpdateVisible(true)}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      marginLeft: "320px",
                      border: "1px solid black",
                    }}
                  >
                    Chỉnh sửa
                    <FormOutlined />
                  </Button>
                  <ProfileUpdateModal
                    visible={profileUpdateVisible}
                    onClose={() => setProfileUpdateVisible(false)}
                  />
                </span>
              </h2>
              <br />
              <img
                src={Goma}
                alt="Goma"
                style={{
                  width: "100px",
                  borderRadius: "50px",
                  marginLeft: "50px",
                }}
              />
              <br />
              <br />
              <p style={{ fontSize: "25px", marginLeft: "60px" }}>Goma</p>
              <p style={{ marginLeft: "25px" }}>Tham gia 12/06/2024</p>
            </div>

            <div
              className="info-right"
            >
              <br />
              <Card
                className="user-info"
                style={{
                  backgroundColor: "#D9D9D9",
                }}
              >
                <p>
                  Họ và tên{" "}
                  <span style={{ marginLeft: "130px" }}>Nguyễn Văn A </span>
                </p>
                <p>
                  Ngày sinh{" "}
                  <span style={{ marginLeft: "150px" }}>--/--/---- </span>
                </p>
                <p>
                  Giới tính <span style={{ marginLeft: "180px" }}>Nam</span>
                </p>
                <p>
                  Số điện thoại{" "}
                  <span style={{ marginLeft: "120px" }}>0123456789</span>
                </p>
                <p>
                  Email{" "}
                  <span style={{ marginLeft: "150px" }}>abc@gmail.com</span>
                </p>
                <p>
                  Số GPLX{" "}
                  <span style={{ marginLeft: "140px" }}>12031ABC12312</span>
                </p>
              </Card>
            </div>
          </Card>
        </div>

        <div className="change-pass-card">
          <Card style={{ width: 850, height: 350 }}>
            <div className="change-pass-title">
              <h2 className="change-pass-title">Đổi mật khẩu</h2>
            </div>

            <div className="change-pass-input">
              <Form
                className="change-pass-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <p>Mật khẩu hiện tại</p>
                <Form.Item
                  name="now-pass"
                  rules={[
                    {
                      required: true,
                      message: "Xin hãy điền vào mật khẩu hiện tại!",
                    },
                  ]}
                >
                  <Input className="input-passChange" />
                </Form.Item>

                <p>Mật khẩu mới</p>
                <Form.Item
                  name="new-pass"
                  rules={[
                    {
                      required: true,
                      message: "Xin hãy điền mật khẩu mới vào!",
                    },
                  ]}
                >
                  <Input className="input-passChange" />
                </Form.Item>

                <p>Xác nhận mật khẩu mới</p>
                <Form.Item
                  name="reinput-pass"
                  rules={[
                    {
                      required: true,
                      message: "Xin hãy nhập lại mật khẩu mới!",
                    },
                  ]}
                >
                  <Input className="input-passChange" />
                </Form.Item>

                <Form.Item>
                  <div className="subbmit-button-container">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submit-button"
                    >
                      Xác nhận
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
