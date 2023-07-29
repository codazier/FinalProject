import React from 'react'
import Style from './Style.css'
import {Container}  from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogApi from './BlogApi';

export default function FeatsList () {
    return (
        <div>
            <Container className="box">
            <h3>Feats</h3>
            <BlogApi/>

            </Container>
            </div>
               )       
}