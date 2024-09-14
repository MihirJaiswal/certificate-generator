import Signing from '../components/Signing';
import React from 'react';

export default function Home(props) {
    let {setIsLoggedIn } = props
    return (
        <div>
            <Signing setIsLoggedIn={setIsLoggedIn}/>
        </div>
    )
}