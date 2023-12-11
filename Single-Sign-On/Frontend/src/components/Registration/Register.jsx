import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      value={value}
      onClick={onClick}
      readOnly
      ref={ref}
    />
    <div className="input-group-append">
      <span className="input-group-text">
        <FaCalendarAlt />
      </span>
    </div>
  </div>
));

const Register = () => {
  const [selectedDate, setDate] = React.useState(null);
  return (
    <div className="container">
      <label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setDate(date)}
          customInput={<CustomInput />}
          minDate={new Date(1990, 0, 1)}  
          maxDate={new Date(2050, 11, 31)}  
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={30}  
        />
      </label>
    </div>
  );
};

export default Register;
