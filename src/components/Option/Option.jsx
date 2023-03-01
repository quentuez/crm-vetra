import React from "react";

export default function Option() {
  const years = [2020, 2021];

  return (
    <select className="ml-auto rounded-lg py-3 pl-5 pr-9 outline outline-1 outline-neutral-400">
      {years.map((year, key) => {
        return (
          <optgroup id={key} label={year}>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </optgroup>
        );
      })}
    </select>
  );
}
