import React, {useState} from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import insta_logo from '../../images/logoinsta.png'
import insta_img from '../../images/9364675fb26a.svg'
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const LoginPageStyled = styled.section`
  min-height: 100vh;
  overflow: hidden;
  
  .loginPage_main {
    display: flex;
    margin-top: 20%;
    justify-content: center;
  }
  
  .loginpage_leftcomponent {
    img {
      width: 450px;
    }
  }
  
  .loginpage_rightcomponent {
    width: 350px;
    padding-bottom: 25px;
    border: 1px solid #dbdbdb;
    margin-top: 25px;
    padding-top: 25px;
    padding-bottom: 70px;
    text-align: center;
    background-color: white;
    border-radius: 20px;

    .loginPage_logo {
      width: 175px;
      margin-top: 25px;
    }
    
    .loginPage_signin {
      .loginPage_text {
        width: 258px;
        height: 36px;
        margin: 5px;
        border: 1px solid #dbdbdb;
        background-color: #fafafa;
        padding-left: 10px;
        border-radius: 5px;
      }
      
      .login_button {
        width: 270px;
        height: 36px;
        border-radius: 5px;
        font-weight: bold;
        margin-top: 5px;
        border: 1px solid #0395f6;
        background-color: #0395f6;
        color: #fff;
        
        &:focus {
          border: 3px solid #5872ff;
        }
        
      }
    }
    
    .login_ordiv {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
    
    .login_divor {
      width: 110px;
      border: 1px solid black;
      height: 0px;
      margin-top: 10px;
      border: 1px solid #dbdbdb;
    }
    
    .login_or {
      margin: 0 25px;
      font-weight: bold;
      color: #8e8e8e;
    }
    
    .login_fb {
      color: #395185;
      font-weight: bold;
      margin-top: 30px;
      
      img {
        width:15px;
        margin-right: 5px;
      }
    }
    
    .login_forgot {
      color: #ababab;
      font-size: 12px;
      line-height: 14px;
      margin-top: 12px;
      text-align: center;
    }
  }

  .loginPage_signup_option {
    margin-top: 25px;
    width: 350px;
    background-color: white;
    border: 1px solid #DBDBDB;
    text-align: center;

    .loginPage_signin {
      margin: 25px 0;
    }

    .loginPage_signup {
      margin: 25px 0;
    }
  }

  .loginPage_downloadSection {
    height: 105px;
    width: 350px;
    text-align: center;
    margin-top: 20px;

    .loginPage_dwimg {
      margin: 5px;
    }
  }
  
`

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)

    const changeLogin = () => {
        setIsLogin(!isLogin)
    }

  return (
    <LoginPageStyled>
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className="loginPage_main">
                    <div className="loginpage_leftcomponent">
                        <img src={insta_img} className="" alt=""/>
                    </div>
                    <div>
                        <div className="loginpage_rightcomponent">
                            <img src={insta_logo} className="loginPage_logo" alt=""/>
                            <div className="loginPage_signin">
                                <div>
                                    {
                                        isLogin ? <SignIn />: <SignUp />
                                    }
                                </div>
                            </div>
                            <div className="login_ordiv">
                                <div className="login_divor"></div>
                                <div className="login_or">또는</div>
                                <div className="login_divor"></div>
                            </div>

                            <div className="login_fb">
                                <img src={fb} alt=""/>Facebook으로 로그인
                            </div>
                            <div className="login_forgot">
                                비밀번호를 잊으셨나요?
                            </div>
                        </div>

                    <div className={"loginPage_signup_option"}>
                        {
                            isLogin ?
                                <div className={"loginPage_signin"}>
                                    계정이 없으신가요? <span onClick={changeLogin} style={{"fontWeight":"bold", "color":"#0395F6", "cursor":"pointer"}}>가입하기</span>
                                </div>:
                                <div className={"loginPage_signup"}>
                                    계정이 이미 있으신가요? <span onClick={changeLogin} style={{"fontWeight":"bold", "color":"#0395F6", "cursor":"pointer"}}>로그인하기</span>
                                </div>

                        }
                    </div>
                    <div className={"loginPage_downloadSection"}>
                        <div>
                            Get the app.
                        </div>
                        <div className={"loginPage__option"}>
                            <img src={appstore} width={"136px"} className={"loginPage_dwimg"} alt=""/>
                            <img src={playstore} width={"136px"} className={"loginPage_dwimg"} alt=""/>
                        </div>
                    </div>
                </div>
                </div>
            </Grid>ㅣ
            <Grid item xs={3}></Grid>
        </Grid>
    </LoginPageStyled>
  );
}

export default LoginPage;