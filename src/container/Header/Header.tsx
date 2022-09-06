import HeaderContacts from 'components/HeaderContacts/HeaderContacts'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import HeaderImage from 'components/HeaderImage/HeaderImage'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <HeaderContacts />
            <HeaderMenu />
            <HeaderImage />
        </>
    )
}

export default Header
