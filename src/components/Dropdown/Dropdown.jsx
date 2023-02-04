import { useRef, useState } from "react";
import styled from '@emotion/styled'

const StyleLabel = styled.label({
    display: 'block',
    textAlign: 'left',
    position: 'relative'

})

const StyledButton = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.isOpen ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.isOpen ? '0' : '18px'};
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.s};
    padding: ${props => props.theme.spacing.s};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.neutral.b};
    &:focus {
        border-color: red;
    }
`
const StyledPlaceholder = styled.span`
    color: ${props => props.theme.colors.neutral.b};
`
const StyledDropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
            background-color: ${props => props.theme.colors.white};;
    z-index: 1;
    border: 1px solid ${props => props.theme.colors.neutral.b};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.spacing.m};
    list-style: none;
`
const StyledDropdownListItem = styled.li`
    padding: ${props => props.theme.spacing.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.neutral.c};
    cursor: pointer;
    color: ${props => props.isFocused ? 'red' : 'inherit'};         
    &:last-child {
        border: none;
    }
`
export const Dropdown = ({ label, placeholder, options = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [focusedOption, setFocusedOption] = useState(null);

    const buttonRef = useRef(null)

    const handleKeyDown = (event) => {
        setIsOpen(true)
        switch (event.key) {
            case 'Enter': 
                event.preventDefault();
                setSelected(options[focusedOption])
                setIsOpen(false)
                buttonRef.current.focus()
                break;
            case 'ArrowDown':
                event.preventDefault();
                setFocusedOption(oldFocus => {                    
                    if (oldFocus == null) {
                        return 0;
                    }
                    if (oldFocus == (options.length - 1)) {
                        return options.length - 1;
                    }
                    return oldFocus += 1;
                })
                break;
            case 'ArrowUp':
                event.preventDefault();
                setFocusedOption(oldFocus => {
                    if (!oldFocus) {
                        return 0;
                    }
                    return oldFocus -= 1;
                })
                break;
            case 'Tab':
                setFocusedOption(null)
                setIsOpen(false);
                break;
            case 'Escape':
                event.preventDefault();
                setFocusedOption(null)
                setIsOpen(false);
                break;
            default:
                break;
        }
    }

    const handleDropdownButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyleLabel>
            {label}
            <StyledButton
                isOpen={isOpen}
                type="button"
                onClick={handleDropdownButtonClick}
                role="button"
                aria-expanded={isOpen}
                onKeyDown={handleKeyDown}
                ref={buttonRef}
            >
                <div>
                    {selected && <span>
                        {selected.text}
                    </span>}
                    {!selected && <StyledPlaceholder>
                        {placeholder}
                    </StyledPlaceholder>}
                </div>
                <div>
                    <span>{isOpen ? '▲' : '▼'}</span>
                </div>
            </StyledButton>
            {isOpen && <StyledDropdownList role="listbox">
                {options.map((option, index) => (
                    <StyledDropdownListItem
                        key={option.value}
                        onClick={() => setSelected(option)}
                        role="option"
                        aria-selected={selected && selected.value === option.value}
                        isFocused={focusedOption === index}
                        id={`dropdown-option-${index}`}
                    >
                        {option.text}
                    </StyledDropdownListItem>
                ))}
            </StyledDropdownList>}
        </StyleLabel>
    )
}