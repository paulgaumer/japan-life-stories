import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const RecentStories = () => {
  const data = useStaticQuery(graphql`
    query SidebarAllArticlesQuery {
      allSanityPost(sort: { order: ASC, fields: _createdAt }) {
        edges {
          node {
            title
            _createdAt
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const articles = data.allSanityPost.edges

  return (
    <div className="mt-12">
      <h2 className="text-2xl mb-4 text-gray-800 font-titles">
        Recent Stories
      </h2>
      <div>
        <ul className="list-none">
          {articles.map(({ node }) => {
            return (
              <li className="hover:text-orange-400 mb-4 text-sm" key={node.id}>
                <Link to={`/stories/${node.slug.current}`}>{node.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RecentStories
