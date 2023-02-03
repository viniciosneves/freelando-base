import styled from '@emotion/styled'

const StyledCard = styled.div`
    background: ${props => props.theme.colors.secondary};
    padding: ${props => props.theme.spacing.l};
`

export const Card = ({children}) => {
    return <StyledCard>
        {children}
    </StyledCard>
}