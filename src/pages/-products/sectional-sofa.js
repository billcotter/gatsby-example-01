import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const ComponentName = ({ data }) => {
  return <Layout>
  <h2>{data.product.title}</h2>
  <h2>${data.product.price}</h2>
  <p>
  {data.product.image.fixed.src}
  </p>
  <p>
  {data.product.info.info}
  </p>
  </Layout>
}

export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "sectional-sofa"}) {
      title
      price
      image {
      fixed {
        src
      }
    }
    info
    {
      info
    }
    }
  }
`

export default ComponentName
