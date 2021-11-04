import React, {useContext, useState} from 'react';
import {AppContext} from "../../App";
import {signUp} from "../../auth/auth";

function SignUp() {

    const [form, setForm] = useState({
        emailId: null,
        userName: null,
        nickName: null,
        password: null
    })

    let {setUser} = useContext(AppContext);

    return (
        <div>
            <input className={"loginPage_text"} type="text" onChange={(e) => {setForm({...form, emailId:e.currentTarget.value})}} placeholder="Mobile number or email"/>
            <input className={"loginPage_text"} type="text" onChange={(e) => {setForm({...form, userName:e.currentTarget.value})}} placeholder="UserName"/>
            <input className={"loginPage_text"} type="text" onChange={(e) => {setForm({...form, nickName:e.currentTarget.value})}} placeholder="NickName"/>
            <input className={"loginPage_text"} type="password" onChange={(e) => {setForm({...form, password:e.currentTarget.value})}} placeholder="Password"/>
            <button className={"login_button"} onClick={() => signUp(form.emailId, form.password, form.userName, form.nickName, setUser)}>Sign Up</button>
        </div>
    );
}

export default SignUp;