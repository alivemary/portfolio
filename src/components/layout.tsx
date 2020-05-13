import React from "react"
import PageHelmet from "../components/helmet"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle<{ light?: boolean; theme: { fontFamily: string } }>`
  body {
    color: ${(props): string => (props.light ? "black" : "white")};
    background-color: ${(props): string => (props.light ? "white" : "black")};
    font-family: ${(props): string => props.theme.fontFamily};
    padding: 50px 0;
    background-image: url('/imgs/background.jpg');
  }
`

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <PageHelmet />
            <ThemeProvider theme={{ fontFamily: "Arial" }}>
                <>
                    <GlobalStyle />
                    {children}
                    <footer>Made by Maryna Martynenko 2017</footer>
                </>
            </ThemeProvider>
        </>
    )
}

export default Layout
