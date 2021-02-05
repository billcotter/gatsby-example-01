import React from 'react'
import {useStaticQuery,graphql} from "gatsby"
const getData = graphql`
query FirstQuery {
    site {
      info:siteMetadata {
        person {
          age
          name
        }
        title
        author
        description
        data
      }
    }
  }
`

export const Header = () => {
  const {site:{info:{title,author,person:{name,age}}}} = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>Title : {data.site.siteMetadata.title}</h1>  */}
      {/* <h1>Name : {data.site.siteMetadata.person.name}</h1> */}
  <h1>Title : {title}</h1>
  <h1>Name : {name}</h1>
  <h1>Age : {age}</h1>
  <h1>Author : {author}</h1>
    </div>
  )
}

export default Header