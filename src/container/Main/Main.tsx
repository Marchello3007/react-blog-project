import React from 'react'
import MainBlockOne from 'components/MainBlockOne/MainBlockOne'
import About from 'pages/About/About'
import Services from 'pages/Wservices/Services'
import Projects from 'pages/Projects/Projects'
import Team from 'pages/Team/Team'
import Blog from 'pages/Blog/Blog'
import Contacts from 'pages/Contacts/Contacts'

import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainBlockOne />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="projects" element={<Projects />} />
                <Route path="team" element={<Team />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contacts" element={<Contacts />} />
            </Routes>
        </>
    )
}

export default Main
