import React from "react";
import "./Login.scss";
import { Card } from "antd";
import { Button, Form, Input } from "antd";

const Login: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-page">
      <Card
        className="login-card"
        bordered={false}
        style={{ width: 500 }}
      >
        <div>
          <h2 className='login-title'>Đăng nhập</h2>
        </div>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <p>Tên đăng nhập</p>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy điền tên đăng nhập vào!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <p>Mật khẩu</p>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy điền mật khẩu vào!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item>
            <div className="login-form-container">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng ký
              </Button>
            </div>

            <div className="not-a-member">
              Bạn chưa có tài khoản? <a href="">Đăng ký tài khoản</a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
