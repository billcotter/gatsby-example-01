import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import productTemplate from "../../templates/product-template"

const ComponentName = ({ data }) => {
  return <productTemplate>
  <Layout>
  
 </Layout>
 </productTemplate>
  
}

export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "leather-sofa"}) {
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
