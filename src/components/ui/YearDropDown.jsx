import React from "react";

const YearDropDown = ({ startYear, endYear, selectedYear, onChange }) => {
  const years = [];
  for (let year = endYear; year >= startYear; year--) {
    years.push(year);
  }

  const handleChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    onChange(selectedYear);
  };

  return (
    <div className="px-2">
      <select
        className="py-1 bg-[#FFFFFF] px-2 text-[12px] leading-[12px] font-normal font-poppins border border-primary-blue rounded outline-0"
        defaultValue={selectedYear}
        onChange={handleChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropDown;
