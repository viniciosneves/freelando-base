import styled from '@emotion/styled'

const StyledInlineListItem = styled.li`
    display: inline-block;
`

export const InlineListItem = ({children}) => {
    return <StyledInlineListItem>
        {children}
    </StyledInlineListItem>
}