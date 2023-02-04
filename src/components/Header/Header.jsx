import styled from '@emotion/styled'

const StyledHeader = styled.header`
    background: ${props => props.theme.colors.primary.a};
    padding: ${props => props.theme.spacing.m};
`

export const Header = ({children}) => {
    return <StyledHeader>
        {children}
    </StyledHeader>
}