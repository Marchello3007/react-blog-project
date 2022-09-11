import ContentList from 'Content/ContentList'
import React from 'react'

type Props = {}

const Blog = (props: Props) => {
    const cat = 'blog'
    return (
        <>
            <ContentList cat={cat} />
        </>
    )
}

export default Blog
