import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/searchbar.css"

const Searchbar = ({ data }) => {
  const [state, setState] = React.useState({
    query: "",
    filteredData: [],
  });
  const changeInput = (event) => {
    const query = event.target.value;
    const posts = data.allMdx.nodes || [];
    const filteredData = posts.filter((post) => {
      const { title, category } = post.frontmatter;
      return (
        (title && 
          title.toLowerCase().includes(query.toLowerCase())) ||
        (category && category.toLowerCase().includes(query))
      );
    });

    setState({
      query,
      filteredData,
    });
  };

  const renderSearchResults = () => {
    const { query, filteredData} = state;
    const hasSearchResults = filteredData && query !== "";
    const posts = hasSearchResults ? filteredData : [];
    const ret = [];

    posts.map((node) => {
      ret.push(
        <Link to={"/" + node.slug}
          className="link"
          key={node.frontmatter.idx}
        >
          <div className="searchbar-result">
            {node.frontmatter.title}
          </div>
        </Link>
      );
    });
    return ret;
  }
  return (
    <div className="searchbar">
      <input type="checkbox" id="toggle" />
      <label for="toggle" className="searchbar-button">
        <StaticImage
          className="searchbar-icon"
          src="../images/magnifying-glass-solid.svg"
          alt=""
        />
      </label>
      <div className="searchbar-search">
        <input
          className="searchbar-input"
          onChange={changeInput}  
          placeholder="search"
        />
        {
          state.filteredData.length !== 0 && state.query ?
            <div className="searchbar-results">
              {renderSearchResults()}
            </div>
          :
            ""
        }
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={
      graphql`
        query {
          allMdx(sort: {fields: frontmatter___idx, order: DESC}) {
            nodes {
              id
              slug
              frontmatter {
                date(formatString: "YYYY.MM.DD")
                category
                title
                idx
              }
              excerpt(truncate: true)
            }
          }
        }
      `}
      render={(data) => <Searchbar data={data}/>}
    />
);