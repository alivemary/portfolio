import React from "react"
import Layout from "../components/layout"

const HomePage: React.FC<{}> = () => {
    return (
        <Layout>
            <header>
                <h1>Hello Gatsby!</h1>
            </header>
            <main>Welcome here :)</main>
        </Layout>
    )
}

export default HomePage
