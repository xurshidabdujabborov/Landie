import React from 'react'
import { Container, Grid } from '@mui/material'
import icon from "../../assets/img/Icon.png"
import car from "../../assets/img/card 4.png"
import "./Main.css"

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <Grid container alignItems={'center'}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">Light, Fast & Powerful</h2>
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            <div className="card">
                                <div className="box">
                                    <img src={icon} alt="" />
                                    <h4>Title Goes Here</h4>
                                    <span>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit. Aenean commodo ligula eget dolor. </span>
                                </div>
                                <div className="box">
                                    <img src={icon} alt="" />
                                    <h4>Title Goes Here</h4>
                                    <span>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit. Aenean commodo ligula eget dolor. </span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <img src={car} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Main
