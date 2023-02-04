import React, { useState } from 'react';
import { css } from '@emotion/css';

const styles = {
  dropdownContainer: css`
    position: relative;
  `,
  dropdownButton: css`
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  `,
  dropdownList: css`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 1;
  `,
  dropdownItem: css`
    display: block;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
  `,
  dropdownCarrot: css`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  `,
};

const Dropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);

  const handleDropdownButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedOptionIndex(Math.min(focusedOptionIndex + 1, options.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedOptionIndex(Math.max(focusedOptionIndex - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      setSelectedOption(options[focusedOptionIndex]);
      setIsOpen(false);
      onChange(options[focusedOptionIndex]);
    }
  };

  return (
    <div css={styles.dropdownContainer}>
      <button
        type="button"
        css={styles.dropdownButton}
        onClick={handleDropdownButtonClick}
        onKeyDown={handleKeyDown}
      >
        {selectedOption}
        <span css={styles.dropdownCarrot}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {/* {isOpen && (
        <ul css={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={option.value}
              css={styles.dropdownItem}
              onClick={() => handleDropdownItemClick(option)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="option"
              aria-selected={selectedOption.value === option.value}
              className={focusedOptionIndex === index ? 'focused' : ''}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Dropdown;

