import React, { useState } from 'react';
import { Form, InputGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Resume = () => {
    const [resumeText, setResumeText] = useState('');


return (
<Form>
  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Enter your message..."/>
  </Form.Group>
</Form>
);
};

export default Resume;