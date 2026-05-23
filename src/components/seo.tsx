/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Meta = {
  name?: string | undefined
  property?: string | undefined
  content: string
}

type SeoProps = {
  description?: string
  lang?: string
  meta?: Meta[]
  title: string
}

type SeoQueryData = {
  site: {
    siteMetadata: {
      title?: string
      description: string
      author?: string
    }
  }
}

function Seo({ description = ``, lang = `en`, meta = [], title }: SeoProps) {
  const { site } = useStaticQuery<SeoQueryData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const defaultMeta: Meta[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `google-site-verification`,
      content: `XR0P_8WMnAbzIByR3dnhPdGF95s5mKmersJy-IxEXfg`
    }
  ]

  return (
    <>
      <html lang={lang} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      {defaultMeta.concat(meta).map((entry) => (
        <meta
          key={`${entry.name ?? entry.property}-${entry.content}`}
          name={entry.name}
          property={entry.property}
          content={entry.content}
        />
      ))}
    </>
  )
}

export default Seo
