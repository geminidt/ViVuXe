import "./style.scss";

import { CalendarOutlined, DollarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import rentalService from "../../common/api/rentalService";

const RentalPage: React.FC = () => {
  interface Rental {
    carResponse: CarResponse;
    rentalId: number;
    carName: string;
    rentalDate: string;
    rentalReturn: string;
    totalCost: number;
    image: string;
  }

  interface CarResponse {
    name: string;
    cost: number;
  }

  // const rentals : Rental[] = [
  //     {
  //         rentalId: 1,
  //         carName: "VINFAST VF6 PLUS 2023",
  //         rentalDate: "13-6-2024" ,
  //         rentalReturn: "14-6-2024",
  //         totalCost: 1100000,
  //         image: anh1
  //     },
  //     {
  //         rentalId: 2,
  //         carName: "TOYOTA VELOZ CROSS 2022",
  //         rentalDate: "17-6-2024" ,
  //         rentalReturn: "18-6-2024",
  //         totalCost: 900000,
  //         image: anh2
  //     }
  // ]

  const size = 8;
  const [page, setPage] = useState(1);
  const [allRentals, setAllRentals] = useState<Rental[]>([]);

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
    <div className="trip-grid">
      <h1>Chuyến của tôi</h1>
      {allRentals.map((rental) => (
        <div key={rental.rentalId} className="rental-card">
          <div className="rental-image">
            <img src={`${window.location.origin}/${path}`} alt="" />
          </div>
          <div className="rental-info">
            <h3>{rental.carResponse.name}</h3>
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
  );
};

export default RentalPage;
