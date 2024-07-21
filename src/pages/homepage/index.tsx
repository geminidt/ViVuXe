import React, { useState } from "react";
import SearchBox from "../../common/components/ImageBox/seachBox";
import { Space } from "antd";
import "./Homepage.scss";
import { Card } from "antd";
import TPHCM from "../../assets/TPHCM.jpg";
import Hoguom from "../../assets/Hoguom.jpg";
import Bana from "../../assets/Bana.jpg";
import Cantho from "../../assets/Cantho.jpg";
import TanSonNhat from "../../assets/TanSonNhat.webp";
import NoiBai from "../../assets/NoiBai.jpg";
import SBDaNang from "../../assets/SBDaNang.jpg";

import anh1 from "../../assets/anh1.png";
import anh2 from "../../assets/anh2.png";
import anh3 from "../../assets/anh3.png";
import anh4 from "../../assets/anh5.png";
import anh5 from "../../assets/anh4.png";
import anh6 from "../../assets/anh6.png";
import anh7 from "../../assets/anh7.png";
import anh8 from "../../assets/anh8.png";

interface Item {
  name: string;
  condition1: string;
  condition2: string;
}

const data: Item[] = [
  { name: "Item 1", condition1: "A", condition2: "X" },
  { name: "Item 2", condition1: "B", condition2: "Y" },
  { name: "Item 3", condition1: "A", condition2: "Y" },
  { name: "Item 4", condition1: "B", condition2: "X" },
];

const Homepage: React.FC = () => {
  const [results, setResults] = useState<Item[]>([]);

  const handleSearch = ({
    condition1,
    condition2,
  }: {
    condition1: string;
    condition2: string;
  }) => {
    const filteredResults = data.filter(
      (item) =>
        item.condition1.includes(condition1) &&
        item.condition2.includes(condition2)
    );
    setResults(filteredResults);
  };

  interface Car {
    id: number;
    name: string;
    image: string;
    price: number;
    setCarQuick: boolean;
    mortgage: boolean;
    location: string;
    trips: number;
    year: number;
    discount?: number;
  }

  const cars: Car[] = [
    {
      id: 1,
      name: "VINFAST VF6 PLUS 2023",
      image: anh1,
      price: 1240,
      mortgage: true,
      setCarQuick: false,
      location: "Quận 2, TP. Hồ Chí Minh",
      trips: 5,
      year: 2023,
    },
    {
      id: 2,
      name: "TOYOTA VELOZ CROSS 2022",
      image: anh2,
      price: 907,
      mortgage: false,
      setCarQuick: true,
      location: "Quận 3, TP. Hồ Chí Minh",
      trips: 46,
      year: 2022,
      discount: 14,
    },
    {
      id: 3,
      name: "TOYOTA AVANZA 2024",
      image: anh3,
      price: 950,
      mortgage: false,
      setCarQuick: false,
      location: "Quận 4, TP. Hồ Chí Minh",
      trips: 8,
      year: 2024,
      discount: 14,
    },
    {
      id: 4,
      name: "MITSUBISHI XPANDER 2022",
      image: anh4,
      price: 790,
      mortgage: true,
      setCarQuick: true,
      location: "Quận 5, TP. Hồ Chí Minh",
      trips: 13,
      year: 2022,
      discount: 14,
    },
    {
      id: 5,
      name: "HYUNDAI ACCENT 2019",
      image: anh5,
      price: 625,
      mortgage: false,
      setCarQuick: true,
      location: "Huyện Bình Chánh, Long An",
      trips: 3,
      year: 2019,
      discount: 21,
    },
    {
      id: 6,
      name: "KIA K5 PREMIUM 2024",
      image: anh6,
      price: 953,
      mortgage: true,
      setCarQuick: false,
      location: "Thị trấn Tiên Giang",
      trips: 11,
      year: 2024,
      discount: 15,
    },
    {
      id: 7,
      name: "VINFAST LUX A 2022",
      image: anh7,
      price: 897,
      mortgage: false,
      setCarQuick: false,
      location: "Quận Chánh, TP. Hồ Chí Minh",
      trips: 12,
      year: 2022,
      discount: 14,
    },
    {
      id: 8,
      name: "SUZUKI CIAZ 2019",
      image: anh8,
      price: 538,
      mortgage: true,
      setCarQuick: true,
      location: "Quận 12, TP. Hồ Chí Minh",
      trips: 47,
      year: 2019,
    },
  ];
  const renderBadges = (car: Car) => {
    if (car.setCarQuick && car.mortgage) {
      return (
        <>
          <span className="car-set">Đặt xe nhanh </span>
          <span className="mortgage">Miễn thế chấp </span>
        </>
      );
    } else if (car.setCarQuick) {
      return <span className="car-set single">Đặt xe nhanh </span>;
    } else if (car.mortgage) {
      return <span className="mortgage single">Miễn thế chấp </span>;
    }
    return null;
  };

  interface ImageWithAnnotation {
    id: number;
    name: string;
    image: string;
    annotation: string;
  }

  const imageWithAnnotations: ImageWithAnnotation[] = [
    {
      id: 1,
      name: "TPHCM",
      image: TPHCM,
      annotation: "TP Hồ Chí Minh 3200+ xe",
    },

    {
      id: 2,
      name: "Hanoi",
      image: Hoguom,
      annotation: "Hà Nội 2500+ xe",
    },

    {
      id: 3,
      name: "Danang",
      image: Bana,
      annotation: "Đà Nẵng 2000+ xe",
    },

    {
      id: 4,
      name: "Cantho",
      image: Cantho,
      annotation: "Cần Thơ 1000+ xe",
    },
  ];

  return (
    <div className="home-page">
      <div className="search-box">
        <SearchBox onSearch={handleSearch} />
      </div>

      <div className="car-list">
        <p className="title">Xe Phù Hợp Cho Bạn</p>
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                {renderBadges(car)}
                <img src={car.image} alt={car.name} />
                {car.discount && (
                  <span className="discount">Giảm {car.discount}%</span>
                )}
              </div>
              <div className="car-info">
                <p className="automatic_number">Số tự động</p>
                <h2>{car.name}</h2>
                <p className="location">{car.location}</p>
                <div className="bottom_card">
                  <p className="trips">{car.trips} chuyến</p>
                  <p className="price">
                    <span className="real_money">978K</span>{" "}
                    {car.price.toLocaleString()}K
                    <span className="date">/ngày</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />

      <div className="title-container">
        <p className="pr-content">Địa điểm nổi bật</p>
      </div>
      <div className="pr-container">
        <div className="location-container">
          {imageWithAnnotations.map((ImageWithAnnotation) => (
            <div key={ImageWithAnnotation.id} className="image-card">
              <div className="pr-image">
                <img
                  src={ImageWithAnnotation.image}
                  alt={ImageWithAnnotation.name}
                />
                <p className="pr-title">{ImageWithAnnotation.annotation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="car-deliver">
        <Space direction="horizontal" size="middle" style={{ display: "flex" }}>
          <div>
            <h2 className="deliver-title">Giao xe tại</h2>
            <h2 className="deliver-title">sân bay</h2>
          </div>
          <Card
            style={{
              width: 312,
              height: 220,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
            }}
          >
            <img
              src={TanSonNhat}
              alt="TanSonNhat"
              style={{ borderRadius: "50px" }}
              width={98}
            />
            <p className="airport-title">Tân Sơn Nhất</p>
            <p className="airport-title">2500 xe</p>
          </Card>
          <Card
            style={{
              width: 312,
              height: 220,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
            }}
          >
            <img
              src={NoiBai}
              alt="NoiBai"
              style={{ borderRadius: "50px" }}
              width={98}
            />
            <p className="airport-title">Nội Bài</p>
            <p className="airport-title">2500 xe</p>
          </Card>
          <Card
            style={{
              width: 312,
              height: 220,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
            }}
          >
            <img
              src={SBDaNang}
              alt="SBDaNang"
              style={{ borderRadius: "50px" }}
              width={90}
            />
            <p className="airport-title">Đà Nẵng</p>
            <p className="airport-title">1500 xe</p>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default Homepage;
