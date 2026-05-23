import * as React from "react"

import "../styles/list_card.css"

type ListCardProps = {
  children: React.ReactNode
  frontmatter: {
    title: string
    date: string
    category: string
  }
  size?: string
}

const ListCard = ({ children, frontmatter, size }: ListCardProps) => {
  return (
    <div className="list-card" style={{height: size}}>
      <h2>
        {frontmatter.title}
      </h2>
      <div className="list-card-content">
        {children}
      </div>
      <div className="list-card-date">
        {frontmatter.date}
      </div>
      <div className="list-card-category">
        {frontmatter.category}
      </div>
    </div>
  )
}

export default ListCard
