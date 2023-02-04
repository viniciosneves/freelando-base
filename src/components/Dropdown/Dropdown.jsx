import { useState } from "react";

export const Dropdown = ({label, placeholder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
        <label>
            {label}
            <button
                type="button"
                onClick={handleDropdownButtonClick}
            >
                {placeholder}
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
        </label>
    )
}