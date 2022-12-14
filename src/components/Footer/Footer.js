import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/img/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import SmsIcon from '@mui/icons-material/Sms';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <Container maxWidth='xl'>
                <Grid container alignItems={"center"}>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="left">
                            <p>©2020 Yourcompany</p>
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="nan">
                            <img src={logo} alt="" />
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="right">
                            <button>Purchase now</button>
                        </div>
                    </Grid>
                </Grid>
                    <hr />
                <Grid container alignItems={"center"}>
                    <Grid items md={3} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid items md={9} sm={12} xs={12}>
                        <div className="icon">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TelegramIcon />
                            <SmsIcon />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
