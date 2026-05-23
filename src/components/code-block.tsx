import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import type { Language } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/dracula"

type CodeBlockProps = {
  children?: React.ReactNode
  className?: string
}

export default function CodeBlock({children, className}: CodeBlockProps) {
  const language = (className || "").replace(/language-/, '') as Language
  const code = String(children ?? "")

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
