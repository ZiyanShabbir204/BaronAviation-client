import { useState } from "react";

export default function SelectWithSearch({ ddoptions, defaultValue }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const [ddActive, setDdActive] = useState(false);

  return (
    <div className="select js-select js-liveSearch" data-select-value="">
      <div
        className="select__button js-button"
        onClick={() => setDdActive((pre) => !pre)}
      >
        <span className="js-button-title">
          {selectedItem ? selectedItem : `Default`}
        </span>
        <i className="select__icon" data-feather="chevron-down"></i>
      </div>

      <div
        className={`select__dropdown js-dropdown js-form-dd ${
          ddActive ? "-is-visible" : ""
        }`}
      >
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="select__search js-search"
        />

        <div className="select__options js-options">
          {ddoptions
            .filter((elm) =>
              elm.label?.toLowerCase().includes(searchQuery?.toLowerCase())
            )
            .map((elm, i) => (
              <div
                onClick={() => {
                  setSelectedItem(elm.label);
                  setDdActive(false);
                }}
                className="select__options__button"
                key={i}
              >
                {elm.label}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
