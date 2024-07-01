import React, { useState } from "react";
import SearchBox from "../../components/seachBox";
import { List, Space } from "antd";
import "./Homepage.scss";
import { Card } from "antd";
import TPHCM from "../../assets/TPHCM.jpg";
import Hanoi from "../../assets/Hanoi.jpg";
import Danang from "../../assets/Danang.jpg";
import Cantho from "../../assets/Cantho.jpg";
import TanSonNhat from "../../assets/TanSonNhat.webp";
import NoiBai from "../../assets/NoiBai.jpg";
import SBDaNang from "../../assets/SBDaNang.jpg";

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
      image: Hanoi,
      annotation: "Hà Nội 2500+ xe",
    },

    {
      id: 3,
      name: "Danang",
      image: Danang,
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

      <div className="list">
        <List
          style={{ marginTop: "20px" }}
          bordered
          dataSource={results}
          renderItem={(item) => <List.Item>{item.name}</List.Item>}
        />
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
