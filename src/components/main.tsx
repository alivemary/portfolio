import React from "react"
import Menu from "./menu"
import styled from "styled-components"

const MainStyled = styled.main`
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 5fr;
    > * {
        padding: 2rem;
    }
`

const Main: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <MainStyled>
            <Menu
                links={[
                    { url: "/", title: "Home" },
                    { url: "/", title: "Home2" },
                ]}
            />
            <div>{children}</div>
        </MainStyled>
    )
}

export default Main
