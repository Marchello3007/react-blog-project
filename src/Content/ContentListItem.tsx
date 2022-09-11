import { Card, CardContent } from '@mui/material'
import React from 'react'

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
    category: string
}

const ContentListItem = ({
    title,
    image,
    text,
    id,
    category,
}: ContentProps) => {
    return (
        <Card variant="outlined" style={{ margin: '20px' }}>
            <CardContent>
                <h3 className="content-title">{title}</h3>

                <div className="content-text">{text}</div>
            </CardContent>
        </Card>
    )
}

export default ContentListItem
