import React from "react"
import PageHelmet from "../components/helmet"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle<{ light?: boolean; theme: { fontFamily: string } }>`
  body {
    color: ${(props): string => (props.light ? "black" : "white")};
    background-color: ${(props): string => (props.light ? "white" : "black")};
    font-family: ${(props): string => props.theme.fontFamily};
    padding: 0;
    margin: 0;
  }
`
interface LayoutProps extends React.PropsWithChildren<{}> {
    header: string
}

const Layout: React.FC<LayoutProps> = ({ header, children }) => {
    return (
        <>
            <PageHelmet />
            <ThemeProvider theme={{ fontFamily: "Arial" }}>
                <>
                    <GlobalStyle light />
                    <Header title={header} />
                    <Main>{children}</Main>
                    <Footer />
                </>
            </ThemeProvider>
        </>
    )
}

export default Layout
