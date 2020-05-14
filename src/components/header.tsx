import React from "react"
import styled from "styled-components"
import Nav from "./nav"

const HeaderStyled = styled.header`
    background-image: url("/imgs/background.jpg");
    padding: 50px;
    color: white;
`

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <HeaderStyled>
            <Nav
                links={[
                    { url: "/", title: "Home" },
                    { url: "/", title: "Home2" },
                ]}
            />
            <h1>{title}</h1>
        </HeaderStyled>
    )
}

export default Header
