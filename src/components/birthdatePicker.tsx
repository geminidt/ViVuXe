import React, { useState } from 'react';
import { DatePicker, Input } from 'antd';
import moment, { Moment } from 'moment';

const BirthdatePicker: React.FC = () => {
  const [date, setDate] = useState<Moment | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>('');

  const handleDateChange = (date: Moment | null) => {
    setDate(date);
    setFormattedDate(date ? date.format('YYYY/MM/DD') : '');
  };

  return (
    <div>
      <label>Chọn ngày sinh: </label>
      <DatePicker
        value={date}
        onChange={handleDateChange}
        format="YYYY/MM/DD"
        disabledDate={(current) => current && current > moment().endOf('day')}
      />
      <Input
        value={formattedDate}
        readOnly
        placeholder="Ngày sinh sẽ hiển thị ở đây"
        style={{ marginTop: 10 }}
      />
    </div>
  );
};

export default BirthdatePicker;