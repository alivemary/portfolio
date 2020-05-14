import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const NavStyled = styled.nav<{ columns: number }>`
    color: "white";
    text-transform: uppercase;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(${(props): number => props.columns}, 1fr);
    a {
        color: white;
    }
`

interface NavProps extends React.PropsWithChildren<{}> {
    links: { url: string; title: string }[]
}

const Nav: React.FC<NavProps> = ({ links }) => {
    return (
        <NavStyled columns={links.length}>
            {links.map((link) => {
                return (
                    <Link key={link.title} to={link.url}>
                        {link.title}
                    </Link>
                )
            })}
        </NavStyled>
    )
}

export default Nav
