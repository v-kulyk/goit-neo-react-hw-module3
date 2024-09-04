import { useId, useState } from "react";

export default function SearchBox({ onSearch }) {
  const filterId = useId();

  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
        name="filter"
        id={filterId}
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
