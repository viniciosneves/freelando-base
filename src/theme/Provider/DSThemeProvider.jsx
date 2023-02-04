import { ThemeProvider } from '@emotion/react'

const theme = {
    font: {
        primary: "'Montserrat', sans-serif",
    },
    colors: {
        white: '#FFF',
        neutral: {
            a: '#373737',
            b: '#A0A0A0',
            c: '#E8E8E8',
            d: '#F5F5F5'
        },
        primary: {
            a: '#5754ED',
            b: '#D93114',
            c: '#168070'
        },
        secondary: {
            a: '#EBEAF9',
            b: '#FDF8F8',
            c: '#EBFCF9'
        },
        dark: {
            a: '#110EA0',
            b: '#B61B00'
        }
    },
    spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
    }
}

export const DSThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}