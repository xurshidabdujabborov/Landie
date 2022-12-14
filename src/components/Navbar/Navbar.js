import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/img/logo.png"
import car from "../../assets/img/card.png"
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <nav>
        <Container maxWidth="xl">
          <nav>
            <Grid container>
              <Grid md={4} sm={12} xs={12}>
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
              <Grid md={4} sm={12} xs={12}>
                <div className="img">
                  <img src={logo} alt="" />
                </div>
              </Grid>
              <Grid md={4} sm={12} xs={12}>
                <div className="right">
                  <button>Buy Now</button>
                </div>
              </Grid>
            </Grid>
          </nav>
        </Container>
      </nav>
      <header>
        <Container maxWidth="xl">
          <Grid container alignItems={"center"}>
            <Grid items md={6} sm={12} xs={12}>
              <div className="left">
                <h1>Introduce Your Product Quickly & Effectively</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className="flex">
                  <button>Purchase UI Kit</button>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </Grid>
            <Grid items md={6} sm={12} xs={12}>
              <div className="img">
                <img src={car} alt="" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  )
}

export default Navbar
