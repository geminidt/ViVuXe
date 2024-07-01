import "./Register.scss";
import TPHCM from "../../assets/TPHCM.jpg";
import Hanoi from "../../assets/Hanoi.jpg";
import Danang from "../../assets/Danang.jpg";
import Cantho from "../../assets/Cantho.jpg";
// import TanSonNhat from "../../assets/TanSonNhat.webp";
// import NoiBai from "../../assets/NoiBai.jpg";
// import SBDaNang from "../../assets/SBDaNang.jpg";

const Register = () => {
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
    <div>
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
    </div>
  );
};

export default Register;
