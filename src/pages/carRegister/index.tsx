import React, { useState } from "react";
import "./CarRegister.scss";
import { LeftOutlined } from "@ant-design/icons";
import {
  MdAirlineSeatReclineExtra,
  MdBluetoothSearching,
  MdCameraRear,
  MdGpsFixed,
  MdOutlineSensors,
  MdTireRepair,
  MdVideoCameraBack,
} from "react-icons/md";
import { Card, Form, Button, Input } from "antd";
import ToggleButton from "../../components/toggleButtonProps";
import { FaCamera, FaMapMarkedAlt, FaTruckPickup } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import { GiFlatTire, GiRaceCar, GiTripleGate } from "react-icons/gi";
import { CgUsb } from "react-icons/cg";
import { LuMonitorPlay } from "react-icons/lu";
import { FaCarBurst } from "react-icons/fa6";

interface ToggleButton {
  id: number;
  icon: React.ReactNode;
  name: string;
}

const toggleButtons: ToggleButton[] = [
  {
    id: 1,
    icon: <FaMapMarkedAlt />,
    name: "Bản đồ",
  },
  {
    id: 2,
    icon: <MdBluetoothSearching />,
    name: "Bluetooth",
  },
  {
    id: 3,
    icon: <TbView360Number />,
    name: "Camera 360",
  },
  {
    id: 4,
    icon: <FaCamera />,
    name: "Camera cập lề",
  },
  {
    id: 5,
    icon: <MdVideoCameraBack />,
    name: "Camera hành trình",
  },
  {
    id: 6,
    icon: <MdCameraRear />,
    name: "Camera lùi",
  },
  {
    id: 7,
    icon: <MdTireRepair />,
    name: "Cảm biến lốp",
  },
  {
    id: 8,
    icon: <MdOutlineSensors />,
    name: "Cảm biến va chạm",
  },
  {
    id: 9,
    icon: <IoIosSpeedometer />,
    name: "Cảnh báo tốc độ",
  },
  {
    id: 10,
    icon: <GiRaceCar />,
    name: "Cửa sổ trời",
  },
  {
    id: 11,
    icon: <MdGpsFixed />,
    name: "Định vị GPS",
  },
  {
    id: 12,
    icon: <MdAirlineSeatReclineExtra />,
    name: "Ghế trẻ em",
  },
  {
    id: 13,
    icon: <CgUsb />,
    name: "Khe cắm USB",
  },
  {
    id: 14,
    icon: <GiFlatTire />,
    name: "Lốp dự phòng",
  },
  {
    id: 15,
    icon: <LuMonitorPlay />,
    name: "Màn hình DVD",
  },
  {
    id: 16,
    icon: <FaTruckPickup />,
    name: "Lắp thùng xe bán tải",
  },
  {
    id: 17,
    icon: <GiTripleGate />,
    name: "ETC",
  },
  {
    id: 18,
    icon: <FaCarBurst />,
    name: "Túi khí an toàn",
  },
];

const onFinish = (values: unknown) => {
  console.log("Received values of form: ", values);
};

const CarRegister = () => {
  const handleToggle = (isOn: boolean) => {
    alert(`The button is now ${isOn ? "ON" : "OFF"}`);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      // Logic to handle file upload goes here
      alert(`File uploaded: ${selectedFile.name}`);
    } else {
      alert("No file selected");
    }
  };

  return (
    <div className="carregister-page">
      <div className="title">
        <p className="register-title">
          <span className="back-button">
            <button
              style={{
                backgroundColor: "#e0f4ff",
                color: "black",
                fontSize: "16px",
                marginRight: "300px",
                marginLeft: "200px",
              }}
            >
              <LeftOutlined />
              Quay lại
            </button>
          </span>
          Đăng ký xe
        </p>
      </div>
      <div className="carregister-card">
        <Card style={{ width: 850, height: 1500 }}>
          <div className="carregister-input">
            <Form
              className="carregister-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <h2>Biển số xe</h2>

              <div className="warning">
                <p>Lưu ý: Biển số không thể thay đổi sau khi đăng ký</p>
              </div>
              <Form.Item
                name="car-number"
                rules={[
                  {
                    required: true,
                    message: "Xin mời nhập vào biển số xe!",
                  },
                ]}
              >
                <Input style={{ width: "450px" }} />
              </Form.Item>

              <h2>Thông tin cơ bản</h2>
              <div className="warning">
                <p>
                  Lưu ý: Thông tin cơ bản không thể thay đổi sau khi đăng ký
                </p>
              </div>
              <div className="info-grid-container">
                <div className="grid-item">
                  <p>Hãng xe</p>
                  <Form.Item
                    name="car-maker"
                    rules={[
                      {
                        required: true,
                        message: "Xin hãy chọn hãng xe!",
                      },
                    ]}
                  >
                    <Input className="carinfo-input" />
                  </Form.Item>
                </div>

                <div className="grid-item">
                  <p>Mẫu xe</p>
                  <Form.Item
                    name="car-name"
                    rules={[
                      {
                        required: true,
                        message: "Xin hãy điền mẫu xe vào!",
                      },
                    ]}
                  >
                    <Input className="carinfo-input" />
                  </Form.Item>
                </div>

                <div className="grid-item">
                  <p>Số ghế</p>
                  <Form.Item
                    name="number-of-seat"
                    rules={[
                      {
                        required: true,
                        message: "Xin hãy điền số ghế vào!",
                      },
                    ]}
                  >
                    <Input className="carinfo-input" />
                  </Form.Item>
                </div>

                <div className="grid-item">
                  <p>Năm sản xuất</p>
                  <Form.Item
                    name="make-year"
                    rules={[
                      {
                        required: true,
                        message: "Xin hãy điền năm sản xuất vào!",
                      },
                    ]}
                  >
                    <Input className="carinfo-input" />
                  </Form.Item>
                </div>

                <div className="grid-item">
                  <p>Truyền động</p>
                  <Form.Item
                    name="transmission"
                    rules={[
                      {
                        required: true,
                        message: "Xin hãy điền loại truyền động vào!",
                      },
                    ]}
                  >
                    <Input className="carinfo-input" />
                  </Form.Item>
                </div>

                <div className="grid-item">
                  <p>Loại nhiên liệu</p>
                  <Form.Item
                    name="type-of-fuel"
                    rules={[
                      {
                        required: true,
                        message: "Xin hãy điền loại nhiên liệu vào!",
                      },
                    ]}
                  >
                    <Input className="carinfo-input" />
                  </Form.Item>
                </div>
              </div>

              <h2>Đơn giá thuê</h2>

              <div style={{ width: "250px" }}>
                <p>
                  Đơn giá áp dụng cho tất cả các ngày Có thể tuỳ chỉnh cho các
                  ngày đặc biệt (cuối tuần, lễ, tết,...)
                </p>
              </div>
              <Form.Item
                name="unit-price"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập đơn giá!",
                  },
                ]}
              >
                <Input style={{ width: "250px" }} />
              </Form.Item>

              <h2>Địa chỉ xe</h2>
              <Form.Item
                name="car-address"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập địa chỉ xe!",
                  },
                ]}
              >
                <Input style={{ width: "800px" }} />
              </Form.Item>

              <h2>Mô tả</h2>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập mô tả!",
                  },
                ]}
              >
                <Input style={{ width: "800px", height: "80px" }} />
              </Form.Item>

              <h2>Tính năng</h2>
              <Form.Item
                name="feature"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy chọn tính năng!",
                  },
                ]}
              >
                <div className="toggle-grid-container">
                  {toggleButtons.map((button) => (
                    <div key={button.id} className="grid-item">
                      <ToggleButton
                        icon={button.icon}
                        name={button.name}
                        onToggle={handleToggle}
                      />
                    </div>
                  ))}
                </div>
              </Form.Item>

              <h2>Hình ảnh</h2>
              <Form.Item
                name="image"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy chọn ảnh!",
                  },
                ]}
              >
                <label htmlFor="file-upload">Upload an image:</label>
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {preview && <img src={preview} alt="Preview" width="200" />}
                <input type="submit" value="Upload" />
              </Form.Item>

              <Form.Item>
                <div className="button-container">
                  <Button
                    type="primary"
                    htmlType="reset"
                    className="cancel-button"
                  >
                    Reset
                  </Button>

                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submit-button"
                  >
                    Đăng ký
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CarRegister;
