import { ThemeProvider } from '@emotion/react'

const theme = {
    font: {
        primary: "'Montserrat', sans-serif",
    },
    colors: {
        white: '#FFF',
        neutral: {
            b: '#D9D7F4'
        },
        secondary: '#D9D7F4'
    },
    spacing: {
        xs: '8px',
        m: '16px',
        l: '32px'
    }
}

export const DSThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}