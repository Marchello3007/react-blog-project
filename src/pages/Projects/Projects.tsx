import ContentList from 'Content/ContentList'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    const cat = 'projects'
    return (
        <>
            <ContentList cat={cat} />
        </>
    )
}

export default Projects
