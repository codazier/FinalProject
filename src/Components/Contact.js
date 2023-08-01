import React from "react";
import { Form } from "react-bootstrap";
import TipsForm from './TipsForm';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact () {
    return (
        <Container className="box">
            <footer className="footer--pin">
            <h3>Got a tip or a story you want to share?</h3>
            <p>Share below and it might just end up on my blog!</p>

            <TipsForm />
            </footer>
            </Container>
    )
}  