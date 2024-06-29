import React from 'react';
import "./Signin.scss"
import { Card } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

const Signin: React.FC = () => {
    const onFinish = (values: unknown) => {
        console.log("Received values of form: ", values);
      };

    return (
        <div className="signin-page">
      <Card
        className="signin-card"
        bordered={false}
        style={{ width: 500 }}
      >
        <div>
          <h2 className='signin-title'>Đăng ký</h2>
        </div>
        <Form
          name="normal_signin"
          className="signin-form"
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
            name="password1"
            rules={[
              {
                required: true,
                message: "Hãy điền mật khẩu vào!",
              },
            ]}
          >
            <Input
              type="password"
            />
          </Form.Item>

          <p>Nhập lại mật khẩu</p>
          <Form.Item
            name="password2"
            rules={[
              {
                required: true,
                message: "Hãy điền mật khẩu vào!",
              },
            ]}
          >
            <Input
              type="password"
            />
          </Form.Item>

          <p>Mã giới thiệu (nếu có)</p>
          <Form.Item name="introduce-code">
            <Input  />
          </Form.Item>

          <Form.Item>
            <Form.Item name="accept" valuePropName="checked" noStyle>
              <Checkbox>
                Tôi đã đồng ý với chính sách & quy định và chính sách bảo vệ dữ
                liệu cá nhân của
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <div className='signin-form-container'>
            <Button
              type="primary"
              htmlType="submit"
              className="signin-form-button"
            >
              Đăng ký
            </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signin;