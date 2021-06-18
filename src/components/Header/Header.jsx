import React from 'react'
import { useHistory } from 'react-router';

export default function Header() {
const history = useHistory();

const goHome=()=>{
    console.log('Home button clicked')
    history.push('/')
}

    return (
        <div>
            NAV BAR HERE
            <button onClick={goHome}>Home</button>
        </div>
    )
}
