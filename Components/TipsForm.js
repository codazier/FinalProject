import React from "react";
import { Form } from "react-bootstrap";

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TipsForm() {
    return (
        <form>
        <label>
          Share Here -->
          <input type="text" name="Share Here!" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}