import "./ProfileUpdateModal.scss";

import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
// import BirthdatePicker from "../../../components/birthdatePicker";
import { toast } from "react-toastify";

interface ProfileUpdateModalProps {
  visible: boolean;
  onClose: () => void;
}

type Gender = "Nam" | "Nữ" | "Khác";

const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({
  visible,
  onClose,
}) => {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profileUpdate = async (values: any) => {
    try {
      console.log(values);
      // await userService.updateUser(values);
      toast.success("Dang ky thanh cong");
      onClose();
    } catch (error) {
      toast.error("Dang ky that bai");
    }
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        profileUpdate(values);
        // form.resetFields();
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  const [gender, setGender] = useState<Gender>("Nam");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value as Gender);
  };

  return (
    <Modal
      title="Cập nhật thông tin"
      open={visible}
      onCancel={onClose}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Cập nhật
        </Button>
      }
    >
      <Form form={form} onFinish={handleSubmit}>
        <p>Tên tài khoản </p>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên tài khoản!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p>Ngày sinh: </p>
        <Form.Item
          name="birth-of-date"
          rules={[{ required: true, message: "Hãy nhập ngày sinh của bạn!" }]}
        >
          {/* <BirthdatePicker /> */}
          <div>
            <Input type="date" />
          </div>
        </Form.Item>

        <p>Giới tính </p>
        <Form.Item
          name="gender"
          initialValue={gender}
          rules={[{ required: true, message: "Hãy nhập giới tính của bạn!" }]}
        >
          <div>
            <label htmlFor="gender">Gender: </label>
            <select id="gender" onChange={handleChange}>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
            {/* <p>Selected gender: {gender}</p> */}
          </div>
        </Form.Item>

        <p>Phone Number: </p>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Hãy nhập số điện thoại của bạn!" },
          ]}
        >
          <Input />
        </Form.Item>

        <p>E-mail:</p>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Không đúng định dạng email!",
            },
            {
              required: true,
              message: "Hãy nhập email của bạn!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p>Số GPLX: </p>
        <Form.Item
          name="gplx"
          rules={[{ required: true, message: "Hãy nhập số GPLX của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <br />
      </Form>
    </Modal>
  );
};

export default ProfileUpdateModal;
