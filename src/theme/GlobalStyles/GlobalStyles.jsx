import { Global } from "@emotion/react"

const styles = theme => ({
    html: {
        fontFamily: theme.font.primary
    },
    body: {
        margin: 0
    }
})

export const GlobalStyles = () => {
    return (<Global styles={styles} />)
}