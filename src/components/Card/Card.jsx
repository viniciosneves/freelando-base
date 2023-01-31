import styled from '@emotion/styled'

const StyledCard = styled.div`
    background: #D9D7F4;
    padding: 32px;
`

export const Card = ({children}) => {
    return <StyledCard>
        {children}
    </StyledCard>
}