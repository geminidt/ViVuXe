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
import ImageWithAnnotation from "../../components/ImageWithAnnotation";

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

      <div className="pr-container">
        <h2 className="pr-content">Địa điểm nổi bật</h2>
      </div>
      <div className="location-container">
        <div className="location-card">
          <div>
            <ImageWithAnnotation
              src={TPHCM}
              alt="TPHCM"
              annotation="TP Hồ Chí Minh 3200+ xe"
              position={{ top: "240px" }}
            />
          </div>
        </div>

        <div className="location-card">
          <div>
            <ImageWithAnnotation
              src={Hanoi}
              alt="Hanoi"
              annotation="Hà Nội 2500+ xe"
              position={{ top: "240px", right: "30px" }}
            />
          </div>
        </div>

        <div className="location-card">
          <div>
            <ImageWithAnnotation
              src={Danang}
              alt="Danang"
              annotation="Đà Nẵng 2000+ xe"
              position={{ top: "240px", right: "30px" }}
            />
          </div>
        </div>

        <div className="location-card">
          <div>
            <ImageWithAnnotation
              src={Cantho}
              alt="Cantho"
              annotation="Cần Thơ 1000+ xe"
              position={{ top: "240px", right: "30px" }}
            />
          </div>
        </div>
      </div>

      <div className="car-deliver">
        <Space direction="horizontal" size="middle" style={{ display: "flex" }}>
          <div>
            <h2 style={{ color: "black" }}>Giao xe tại</h2>
            <h2 style={{ color: "black" }}>sân bay</h2>
          </div>
          <Card
            style={{
              width: 200,
              height: 150,
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
              width={80}
            />
            <p>Tân Sơn Nhất</p>
            <p>2500 xe</p>
          </Card>
          <Card
            style={{
              width: 200,
              height: 150,
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
              width={80}
            />
            <p>Nội Bài</p>
            <p>2500 xe</p>
          </Card>
          <Card
            style={{
              width: 200,
              height: 150,
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
              width={70}
            />
            <p>Đà Nẵng</p>
            <p>1500 xe</p>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default Homepage;
