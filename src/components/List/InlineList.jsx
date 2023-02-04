import styled from '@emotion/styled'

const StyledInlineList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

export const InlineList = ({children}) => {
    return <StyledInlineList>
        {children}
    </StyledInlineList>
}