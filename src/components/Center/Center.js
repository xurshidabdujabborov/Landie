import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/img/card 1.png"
import car1 from "../../assets/img/card 2.png"
import car2 from "../../assets/img/card 3.png"
import "./Center.css"

function Center() {
    return (
        <div className='center'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <img src={car} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <h2 className="title">Light, Fast & Powerful</h2>
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <img src={car1} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <h2 className="title">Light, Fast & Powerful</h2>
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <img src={car2} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <h2 className="title">Light, Fast & Powerful</h2>
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                <button>Purchase Now</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Center
