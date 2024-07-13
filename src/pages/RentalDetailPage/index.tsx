import { Card, Col, Row } from "antd";
import "./style.scss";
import anh1 from "../../assets/anh1.png";

const RentalDetailPage: React.FC = () => {
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
    address: string;
  }

  const rentals: Rental[] = [
    {
      rentalId: 1,
      carName: "VINFAST VF6 PLUS 2023",
      rentalDate: "13-6-2024",
      rentalReturn: "14-6-2024",
      totalCost: 1100000,
      image: anh1,
      carResponse: {
        name: "VINFAST VF6 PLUS 2023",
        cost: 1100000,
        address: "Quan Dong Da, Ha Noi",
      },
    },
  ];

  return (
    <div className="rental-detail">
      {rentals.map((rental) => (
        <Row>
          <Col span={14}>
            <Card bordered={false}>
              <div className="detail-1">
                <div className="img-container">
                  <img src={anh1} alt="" />
                </div>
                <div className="info">
                  <h2>{rental.carResponse.name}</h2>
                  <h3>{rental.carResponse.address}</h3>
                </div>
              </div>

              <div>
                <h2>Thời gian thuê xe</h2>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default RentalDetailPage;
