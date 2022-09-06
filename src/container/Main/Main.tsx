import React from 'react'
import MainBlockOne from 'components/MainBlockOne/MainBlockOne'
import Contacts from 'pages/Contacts/Contacts'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainBlockOne />} />
                <Route path="contacts" element={<Contacts />} />
            </Routes>
        </>
    )
}

export default Main
