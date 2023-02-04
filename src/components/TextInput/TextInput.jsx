import styled from '@emotion/styled'

const StyleLabel = styled.label({
    display: 'block',
    textAlign: 'left'
})

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    font-size: 18px;
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.s};
    padding: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.neutral.b};
    border-radius: 18px;
    outline: none;
    box-sizing: border-box;
`

export const TextInput = ({ label, type }) => {
    return (
        <StyleLabel>
            {label}:
            <StyledInput type={type} />
        </StyleLabel>
    )
}