import "./Userpage.scss";
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
import Header from "../../components/Header/index";

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
  return (
    <div className="user-page">
      <div className="header">
        <Header />
      </div>
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
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
        </div>
        <div className="info-container">
          <div className="info-card">
            <Card style={{ width: 850, height: 350 }}>
              <h3>
                Thông tin tài khoản{" "}
                <span>
                  <button style={{backgroundColor: "white", color: "black"}}><FormOutlined /></button>
                </span>
              </h3>
              <span>0 chuyến</span>
              <img src="" alt="" />
              <p>Goma</p>
              <p>Tham gia 12/06/2024</p>
            </Card>
          </div>

          <div className="gplx-card">
            <Card style={{ width: 850, height: 350 }}>
              <div>
                <h2 className="gplx-title">
                  Giấy phép lái xe{"       "}
                  <span style={{ width: "50px" }}>
                    <button
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Chỉnh sửa <FormOutlined />
                    </button>
                  </span>
                </h2>
              </div>

              <div className="gplx-image">
                <img src="" alt="" />
              </div>

              <div className="gplx-input">
                <Form
                  className="gplx-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <h3>Thông tin chung</h3>
                  <p>Số GPLX</p>
                  <Form.Item
                    name="GPLX-number"
                    rules={[
                      {
                        required: true,
                        message: "Hãy điền số GPLX được cấp vào!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Nhập số GPLX được cấp"
                      style={{ width: "400px", backgroundColor: "grey" }}
                    />
                  </Form.Item>

                  <p>Họ và tên</p>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Hãy điền họ và tên vào!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Nhập đầy đủ họ và tên"
                      style={{ width: "400px", backgroundColor: "grey" }}
                    />
                  </Form.Item>

                  <p>Ngày sinh</p>
                  <Form.Item
                    name="date-of- birth"
                    rules={[
                      {
                        required: true,
                        message: "Hãy điền ngày sinh vào!",
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "400px", backgroundColor: "grey" }}
                    />
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
    </div>
  );
};

export default Userpage;
