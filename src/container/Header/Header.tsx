import HeaderContacts from 'components/HeaderContacts/HeaderContacts'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <HeaderContacts />
            <HeaderMenu />
        </>
    )
}

export default Header
