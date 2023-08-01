import React from 'react'
import Style from './Style.css'
import {Container}  from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container className="box">
        <p>This blog is dedicated to telling the world about the Streak. Have you ever felt a rush of wind blow past you out of nowhere? Has something ever happened to you in a split second that you can't explain? 
            I know this is going to sound crazy, but there is something going on in Central City. But something is not actually the correct term--it's someone! 
            Someone moving at the speed of light, zipping through our great city and protecting us from harm's way.
             Whether it's saving someone from a near traffic accident, stopping a robbery, or even battling crime,the lighning fast Streak is here defending us, and this blog is dedicated to exposing not just his existence, but heroics to the world!</p>
        </Container>
    )
}