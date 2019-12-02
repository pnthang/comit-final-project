import React from 'react'

function Header(props){
    return (
        <header>
            <input onChange={props.search} placeholder="Search ..."/>
        </header>
    )
}
export default Header;