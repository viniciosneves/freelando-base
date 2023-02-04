import { useState } from "react";
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
`
const StyledPlaceholder = styled.span`
    color: ${props => props.theme.colors.neutral.b};
`
const StyledDropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 200px;
    overflow-y: auto;
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
    &:last-child {
        border: none;
    }
`
export const Dropdown = ({ label, placeholder, options = [] }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selected, setSelected] = useState(null);
    const handleDropdownButtonClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <StyleLabel>
            {label}
            <StyledButton
                isOpen={isOpen  }
                type="button"
                onClick={handleDropdownButtonClick}
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
            {isOpen && <StyledDropdownList>
                {options.map(option => (
                    <StyledDropdownListItem
                        key={option.value}
                        onClick={() => setSelected(option)}
                    >
                        {option.text}
                    </StyledDropdownListItem>
                ))}
            </StyledDropdownList>}
        </StyleLabel>
    )
}