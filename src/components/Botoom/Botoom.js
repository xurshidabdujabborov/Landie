import React from 'react'
import { Container } from '@mui/material'
import "./Botoom.css"

function Botoom() {
    return (
        <div className='Bottom'>
            <Container maxWidth="xl">
                <div className="center">
                    <h2 className="title">A Price To Suit Everyone</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula <br /> eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient <br /> montes, nascetur ridiculus </p>
                    <h1>$40</h1>
                    <span>UI Design Kit</span>
                    <button>Purchase Now</button>
                </div>
            </Container>
        </div>
    )
}

export default Botoom
