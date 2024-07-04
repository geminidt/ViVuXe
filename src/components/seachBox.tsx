import React from "react";
import { Form, Input, Button } from "antd";

interface SearchBoxProps {
  onSearch: (searchCriteria: {
    condition1: string;
    condition2: string;
  }) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [form] = Form.useForm();

  const handleSearch = () => {
    form
      .validateFields()
      .then((values) => {
        onSearch(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Form form={form}>
      <div style={{ display: "inline-flex"}}>
        <div style={{ width: "345px", marginTop: "20px"}}>
          <Form.Item
            name="condition1"
            rules={[
              {
                required: true,
                message: "Mời nhập vào địa điểm muốn thuê xe!",
              },
            ]}
          >
            <Input placeholder="Địa điểm" />
          </Form.Item>
        </div>

        <div style={{ width: "345px", marginTop: "20px" }}>
          <Form.Item
            name="condition2"
            rules={[
              {
                required: true,
                message: "Mời nhập vào thời gian muốn thuê xe!",
              },
            ]}
          >
            <Input placeholder="Thời gian thuê" />
          </Form.Item>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Form.Item>
          <Button type="primary" onClick={handleSearch}>
            <div className="search-button" style={{color: 'black', fontSize: '30px', fontFamily: 'Quicksand', fontWeight: '500'}}>
            Tìm xe
            </div>
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchBox;
