import logo from "./logo.svg";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function App() {
  const [selecteddate, setSelecteddate] = useState(null);
  return (
    <div className="App">
      <DatePicker
        selected={selecteddate}
        onChange={(date) => setSelecteddate(date)}
        placeholderText="Select a date"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default App;
