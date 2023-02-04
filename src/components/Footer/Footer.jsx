import styled from '@emotion/styled'

const StyledFooter = styled.footer`
    background: ${props => props.theme.colors.primary.a};
    padding: ${props => props.theme.spacing.xl};
    color: ${props => props.theme.colors.white};
`

export const Footer = ({children}) => {
    return <StyledFooter>
        {children}
    </StyledFooter>
}