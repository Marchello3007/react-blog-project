import React from 'react'
import ContentListItem from './ContentListItem'
import contentArray from './content'

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
    category: string
}

type ContentListProps = {
    cat: string
}

const ContentList = ({ cat }: ContentListProps) => {
    return (
        <>
            {contentArray
                .filter(({ category }: ContentProps) => category === cat)
                .map(({ title, image, text, id, category }: ContentProps) => (
                    <ContentListItem
                        key={id}
                        title={title}
                        image="fsdfsdfs"
                        text={text}
                        id={id}
                        category={category}
                    />
                ))}
        </>
    )
}

export default ContentList
