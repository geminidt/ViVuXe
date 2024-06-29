import "./Register.scss";
import { Card } from "antd";

const Register = () => {
  return (
    <div className="register-page">
      <div className="main-container">
        <div className="background-image">
          <center>
            <img
              width={1100}
              height={900}
              src="https://images.unsplash.com/photo-1636074641063-1c2152f1b31e?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </center>
          <div className="content-container">
            <div className="main-content">
              <h2>
                "Cho thuê xe trên Maioto để gia tăng thu nhập đến 10tr/tháng!"
              </h2>
              <br />
              <p>
                "Maioto không thu phí khi bạn đăng xe. Bạn chỉ chia sẻ phí dịch
                vụ với Maioto khi có giao dịch cho thuê thành công"
              </p>
              <hr />
              <button className="register-button">Đăng ký ngay</button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="pr">Tại sao bạn nên cho thuê xe trên Maioto</h3>
        </div>
        <div className="card1-container">
        <div className="card">
          <Card title="Thu nhập" style={{ width: 400 }}>
            <p>Gia tăng từ 5-10 triệu/ tháng</p>
          </Card>
        </div>

        <div className="card">
          <Card title="Nhanh chóng" style={{ width: 400 }}>
            <p>Thủ tục đăng ký cho thuê nhanh chóng trong 10 phút</p>
          </Card>
        </div>

        <div className="card">
          <Card title="Chủ động" style={{ width: 400 }}>
            <p>Toàn quyền quyết định giá và thời gian cho thuê</p>
          </Card>
        </div>
        </div>
        <br />
        <div className="card2-container">
        <div className="card">
          <Card title="Bảo hiểm" style={{ width: 400 }}>
            <p>Hỗ trợ bảo hiểm mất cắp xe nguyên chiếc từ MIC & VNI</p>
          </Card>
        </div>

        <div className="card">
          <Card title="GPS" style={{ width: 400 }}>
            <p>Hỗ trợ cài đặt GPS với giá gốc để quản lý xe an toàn</p>
          </Card>
        </div>

        <div className="card">
          <Card title="Chăm sóc đối tác" style={{ width: 400 }}>
            <p>Đội ngũ Maioto tư vấn chặt chẽ quy trình & kinh nghiệm cho thuê chặt chẽ và an toàn</p>
          </Card>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Register;
