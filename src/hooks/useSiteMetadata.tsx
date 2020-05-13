import { useStaticQuery, graphql } from "gatsby"
import { HelmetProps } from "react-helmet"

export const useSiteMetadata = (): HelmetProps & { description: string } => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        titleTemplate
                        description
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
