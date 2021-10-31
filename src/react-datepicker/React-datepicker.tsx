import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css";

export const ReactDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChangeDate = (date: Date | [Date | null, Date | null] | null) => {
    if (date && !Array.isArray(date)) {
      setStartDate(date);
    }
  };
  return (
    <section className="main-container">
      <ReactDatePicker selected={startDate} onChange={onChangeDate} />
    </section>
  );
};
