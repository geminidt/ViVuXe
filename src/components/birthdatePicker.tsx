// components/DatePicker.tsx
import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';

const BirthdatePicker: React.FC = () => {
  const [date, setDate] = useState<Moment | null>(null);

  const handleDateChange = (date: Moment | null) => {
    setDate(date);
  };

  return (
    <div>
      <label> Hãy chọn ngày sinh: </label>
      <DatePicker
        value={date}
        onChange={handleDateChange}
        // format="YYYY/MM/dd"
        disabledDate={(current) => current && current > moment().endOf('day')}
      />
    </div>
  );
};

export default BirthdatePicker;
