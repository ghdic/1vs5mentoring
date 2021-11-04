import React, {useContext, useState} from 'react';

function SignUp() {

    return (
        <div>
            <input className={"loginPage_text"} type="text" placeholder="Mobile number or email"/>
            <input className={"loginPage_text"} type="text" placeholder="UserName"/>
            <input className={"loginPage_text"} type="text" placeholder="NickName"/>
            <input className={"loginPage_text"} type="password" placeholder="Password"/>
            <button className={"login_button"}>Sign Up</button>
        </div>
    );
}

export default SignUp;