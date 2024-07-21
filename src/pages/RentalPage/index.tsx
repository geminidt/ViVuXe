import "./style.scss";

import {
  CalendarOutlined,
  CarOutlined,
  DollarOutlined,
  FormOutlined,
  LockOutlined,
  LogoutOutlined,
  MoneyCollectOutlined,
  RestOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import rentalService from "../../common/api/rentalService";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const RentalPage: React.FC = () => {
  interface Rental {
    carResponse: CarResponse;
    rentalId: number;
    rentalDate: string;
    rentalReturn: string;
    totalCost: number;
    image: string;
  }

  interface CarResponse {
    make: string;
    model: string;
    address: string;
    year: number;
    name: string;
    cost: number;
  }

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

  const size = 8;
  const [page, setPage] = useState(1);
  const [allRentals, setAllRentals] = useState<Rental[]>([]);
  const nav = useNavigate();

  const fetchRental = async () => {
    try {
      const response = await rentalService.getRental(page, size);
      const { content } = response.data;
      console.log(content);
      setAllRentals(content);
    } catch (err) {
      console.error("Error fetching rentals:", err);
    }
  };

  useEffect(() => {
    fetchRental();
  }, [page]);

  const path = "anh1.png"; // rental.imagePath

  return (
    <div className="main-container">
      <div className="menu-container">
        {/* <div>
          <p className="wellcome-title">Xin chào {user.username}!</p>
          <hr />
        </div> */}
        <div className="menu-content">
          <Menu
            style={{ backgroundColor: "#e0f4ff" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </div>
      </div>

      <div className="trip-grid">
        <h1>Chuyến của tôi</h1>
        {allRentals.map((rental) => (
          <div
            key={rental.rentalId}
            className="rental-card"
            onClick={() => nav(`/rental/${rental.rentalId}`)}
          >
            <div className="rental-image">
              <img src={`${window.location.origin}/${path}`} alt="" />
            </div>
            <div className="rental-info">
              <h3>
                {rental.carResponse.make} {rental.carResponse.model}{" "}
                {rental.carResponse.year}
              </h3>
              <div className="row">
                <CalendarOutlined />
                <p className="info">Bắt đầu: {rental.rentalDate}</p>
              </div>
              <div className="row">
                <CalendarOutlined />
                <p className="info">Kết thúc: {rental.rentalReturn}</p>
              </div>
              <div className="row">
                <DollarOutlined />
                <p className="info">Tổng tiền: {rental.carResponse.cost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalPage;
