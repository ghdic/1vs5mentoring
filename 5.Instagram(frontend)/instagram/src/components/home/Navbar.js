import React from "react";
import styled from "styled-components";
import {Grid} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import insta_logo from '../../images/logoinsta.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import react from '../../images/love.svg'



const NavbarStyled = styled.div`
  .navbar_barContent {
    height: 54px;
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
  }

  .navbar_logo {
    margin-top: 10px;
    width: 105px;
  }

  .navbar_img {
    margin:15px 10px;
    width: 25px;
  }

  .nav_searBar {
    height: 30px;
    width: 215px;
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    text-align: center;
    background-color: #fafafa;
    border-radius: 5px;
  }
  
  .logout {
    cursor: pointer;
  }
`

function Navbar() {

    return (
        <NavbarStyled>
            <div className="navbar_barContent">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img src={insta_logo} className="navbar_logo" alt=""/>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="text" className="nav_searBar" placeholder={"Search"}/>
                    </Grid>
                    <Grid item xs={3} style={{'display':'flex'}}>
                        <img className="navbar_img" src={home} alt=""/>
                        <img className="navbar_img" src={message} alt=""/>
                        <img className="navbar_img" src={find} alt=""/>
                        <img className="navbar_img" src={react} alt=""/>
                        <LogoutIcon className="navbar_img logout" />
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>

        </NavbarStyled>
    );
}

export default Navbar;
