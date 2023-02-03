import styled from '@emotion/styled'

const StyledCard = styled.div`
    background: ${props => props.theme.colors.secondary};
    padding: 32px;
`

export const Card = ({children}) => {
    return <StyledCard>
        {children}
    </StyledCard>
}