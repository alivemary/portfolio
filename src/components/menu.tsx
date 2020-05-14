import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const MenuStyled = styled.nav<{ rows: number }>`
    color: "white";
    text-transform: uppercase;
    background-color: darkblue;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: repeat(${(props): number => props.rows}, 24px);
    a {
        color: white;
    }
`

interface MenuProps extends React.PropsWithChildren<{}> {
    links: { url: string; title: string }[]
}

const Menu: React.FC<MenuProps> = ({ links }) => {
    return (
        <MenuStyled rows={links.length}>
            {links.map((link) => {
                return (
                    <Link key={link.title} to={link.url}>
                        {link.title}
                    </Link>
                )
            })}
        </MenuStyled>
    )
}

export default Menu
