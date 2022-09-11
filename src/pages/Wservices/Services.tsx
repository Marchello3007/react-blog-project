import ContentList from 'Content/ContentList'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
    const cat = 'services'
    return (
        <>
            <ContentList cat={cat} />
        </>
    )
}

export default Services
