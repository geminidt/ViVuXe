import { Button, Modal } from "antd";
import "./style.scss";

interface RentalDetailModalProps {
  visible: boolean;
  onClose: () => void;
}

const RentalDetailModal: React.FC<RentalDetailModalProps> = ({
  visible,
  onClose,
}) => {

  return (
    <Modal
      title="Đăng nhập"
      visible={visible}
      onCancel={onClose}
    ></Modal>
  );
};

export default RentalDetailModal