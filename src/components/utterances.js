import * as React from "react"

const Utterances = ({ repo, theme }) => {
  console.log("Test")
  const containerRef = React.createRef();
  React.useLayoutEffect(() => {
    const utterances = document.createElement("script");
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": "pathname",
      label: "comments",
      theme,
      crossOrigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    })
    containerRef.current.appendChild(utterances);
  }, [repo, theme]);
  return <div  ref={containerRef} />;
};

export default Utterances

