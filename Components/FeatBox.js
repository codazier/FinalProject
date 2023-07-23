import React from 'react';
import { Form } from "react-bootstrap";
import { TextareaAutosize } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FeatBox () {
    return (
        <form>
            <div class="form-group">
    <label for="exampleFormControlTextarea1">New Post</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
    
    )
}