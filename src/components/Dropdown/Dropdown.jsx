import { useState } from "react";
import styled from '@emotion/styled'

const StyleLabel = styled.label({
    display: 'block',
    textAlign: 'left'
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
export const Dropdown = ({ label, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
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
                    <StyledPlaceholder>
                        {placeholder}
                    </StyledPlaceholder>
                </div>
                <div>
                    <span>{isOpen ? '▲' : '▼'}</span>
                </div>
            </StyledButton>
        </StyleLabel>
    )
}