import React from "react";
import { Modal, Form, Input, Button } from "antd";
import './style.scss';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
  onLogin: (values: { username: string; password: string }) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  onClose,
  onLogin,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onLogin(values);
        form.resetFields();
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Đăng nhập"
      visible={visible}
      onCancel={handleCancel}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Đăng nhập
        </Button>
      }
    >
      <Form form={form} onFinish={handleSubmit}>
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
          <Input.Password />
        </Form.Item>
        <br />
      </Form>
    </Modal>
  );
};

export default LoginModal;
