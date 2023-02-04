import styled from '@emotion/styled'

const StyledPrimaryLink = styled.a`
    cursor: pointer;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;    
    color: ${props => props.theme.colors.neutral.d};
    &:hover {
        color: ${props => props.theme.colors.dark.a};
    }
`
const StyledSecondaryLink = styled.a`
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.theme.colors.primary.b};
    border-bottom: 1px solid ${props => props.theme.colors.primary.b};
    &:hover {
        font-weight: bold;
        border-bottom: 2px solid ${props => props.theme.colors.primary.b};
    }
`
export const Link = ({ children, variant = 'primary' }) => {
    if (variant === 'primary') {
        return <StyledPrimaryLink variant={variant}>
            {children}
        </StyledPrimaryLink>
    }
    return <StyledSecondaryLink variant={variant}>
        {children}
    </StyledSecondaryLink>
}