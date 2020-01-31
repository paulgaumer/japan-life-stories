import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

const ThankYouSignUp = ({ location }) => {
  const latestArticles = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { order: DESC, fields: _createdAt }, limit: 4) {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <div className="pb-8 leading-loose">
        <h2 className="text-4xl text-center mt-16 text-gray-700 font-titles">
          Welcome to the community!
        </h2>

        <div className="max-w-3xl flex flex-col mx-auto px-10">
          <div>
            <h3 className="text-3xl mt-10 mb-6 text-gray-800">
              Never miss the newsletter
            </h3>
            <p className="mb-5">
              The newsletter is packed with value and it would be quite sad to
              miss an edition. To make sure that doesn’t happen, here are a few
              things you can do:
            </p>
            <ol className="mb-5 pl-4 list-inside">
              <li>
                Add <em>paul@japanlifestories.com</em> to your contact list
              </li>
              <li>
                Move my welcome email from the “Promotions” tab to the main tab
              </li>
              <li>
                If it gets moved to the junk folder, mark it as “not spam”
              </li>
            </ol>
            <p>
              And if you enjoy the newsletter, make sure to forward it to a
              friend! The newsletter is 100% free, and that’s the best way to
              encourage us to keep on writing.
            </p>
          </div>

          <div>
            <h3 className="text-3xl mt-10 mb-6 text-gray-800">
              Popular stories to get started
            </h3>
            <ul className="mb-5 pl-4 list-disc list-inside">
              {latestArticles.allSanityPost.edges.map(({ node }) => {
                return (
                  <li>
                    <Link
                      to={node.slug.current}
                      className="border-b-2 border-red-300 hover:border-red-600"
                    >
                      {node.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl mt-10 mb-6 text-gray-800">Want to chat?</h3>
            <p>
              You can{" "}
              <Link to={"/contact"} className="text-red-600">
                email me
              </Link>
              , or get in touch on{" "}
              <a
                href="https://www.linkedin.com/in/paulgaumer/"
                className="text-red-600"
              >
                Linkedin
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYouSignUp
