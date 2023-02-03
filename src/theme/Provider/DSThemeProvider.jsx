import { ThemeProvider } from '@emotion/react'

const theme = {
    font: {
        primary: "'Montserrat', sans-serif",
    },
    colors: {
        secondary: '#D9D7F4'
    }
}

export const DSThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}