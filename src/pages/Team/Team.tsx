import ContentList from 'Content/ContentList'
import React from 'react'

type Props = {}

const Team = (props: Props) => {
    const cat = 'team'
    return (
        <>
            <ContentList cat={cat} />
        </>
    )
}

export default Team
