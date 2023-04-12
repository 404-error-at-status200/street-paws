import React, {useState} from "react";
import {CgProfile} from 'react-icons/cg'

function Profile(){
    const [signedIn, setSignedIn] = useState(false);
    return (
        <>
        {signedIn ? <CgProfile size={20} color='#61b3ff'/> : <CgProfile size={20} color='#61b3ff'/>}
        </>
        
    );
}

export default Profile