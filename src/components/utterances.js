import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "./seo"
import Sidebar from "./sidebar"
import Searchbar from "./searchbar"

const Utterances = ({ repo, theme }) => {
  const containerRef = React.createRef();
  React.useEffect(() => {
    const utterances = document.createElement("script");
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": "title",
      label: "comment",
      theme,
      crossOrigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    containerRef.current.appendChild(utterances);
  }, [repo, theme]);
  return (
    <div ref={containerRef}>
    </div>
  )
}

export default Utterances

