import React from "react"
import { Helmet } from "react-helmet"

const HomePage: React.FC<void> = () => {
    return (
        <>
            <Helmet>
                <title>My Personal Page</title>
            </Helmet>
            <header>
                <h1>Hello Gatsby!</h1>
            </header>
            <main>Welcome here :)</main>
        </>
    )
}

export default HomePage
