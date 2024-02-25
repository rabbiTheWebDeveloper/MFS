import { useState } from "react";

const Select = ({ onSort }) => {
  const [selected, setSelected] = useState("");
  const handelChange = (e) => {
    setSelected(e.target.value);
    onSort(selected);
  };
  return (
    <select
      className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
      name="sortBy"
      id="sortBy"
      value={selected}
      onChange={handelChange}
    >
      <option value="">Sort</option>
      <option value="name_asc">Name (A-Z)</option>
      <option value="name_desc">Name (Z-A)</option>
      <option value="year_asc">Publication Year (Oldest)</option>
      <option value="year_desc">Publication Year (Newest)</option>
    </select>
  );
};

export default Select;
