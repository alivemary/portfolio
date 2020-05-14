import React from "react"
import Layout from "../components/layout"

const HomePage: React.FC<{}> = () => {
    return (
        <Layout header={"Welcome to my personal page!"}>
            <h2>Hi! I am Marina :)</h2>
            <p>
                I work as a Senior Frontend Developer for yta.se. My expertize is in the area of translating designs and
                bisness ideas into the digital friendly language.
            </p>
        </Layout>
    )
}

export default HomePage
