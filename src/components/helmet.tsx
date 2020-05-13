import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const PageHelmet: React.FC<{}> = () => {
    const { title, titleTemplate, description } = useSiteMetadata()

    const meta = [
        {
            name: "description",
            content: description,
        },
    ]

    return <Helmet htmlAttributes={{ lang: "en" }} title={title} titleTemplate={titleTemplate} meta={meta}></Helmet>
}

export default PageHelmet
