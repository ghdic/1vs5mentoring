import React, {useContext, useState} from 'react'

function SignIn() {


    return (
        <div>
            <input className={"loginPage_text"} type="text" placeholder="Phone number, username, or email"/>
            <input className={"loginPage_text"} type="password" placeholder="Password"/>
            <button className={"login_button"} >Log In</button>
        </div>
    );
}

export default SignIn;