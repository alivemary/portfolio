import React from "react"
import styled from "styled-components"

const FooterStyled = styled.footer`
    text-align: center;
    padding: 4rem 2rem;
`

const Footer: React.FC<{}> = () => {
    return <FooterStyled>Made by Maryna Martynenko 2020</FooterStyled>
}

export default Footer
