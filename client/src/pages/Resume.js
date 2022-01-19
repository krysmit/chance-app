import React, { useRef } from 'react';
import { Form, InputGroup } from '@themesberg/react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Resume = () => {
  const username = useRef('');
  const email = useRef('');
  const education = useRef('');
  const pastJobs = useRef('');
  const skills = useRef('');
  const postResume = async () => {
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(education.current.value);
    console.log(pastJobs.current.value);
    console.log(skills.current.value);
    // if (education.current.value.length > 500) {
    //   return;
    // }
  }


return (
<div>
<Form>
  <Form.Group className="mb-3">
  <Form.Label>Username</Form.Label>
    <Form.Control ref={username} type="username" placeholder="Enter your username" />
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={email} type="email" placeholder="Enter your email" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Education</Form.Label>
    <Form.Control ref={education} as="textarea" rows="3" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Past Jobs</Form.Label>
    <Form.Control ref={pastJobs} as="textarea" rows="2" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Skills</Form.Label>
    <Form.Control ref={skills} as="textarea" rows="2" placeholder=""/>
  </Form.Group>
</Form>
{/* {Auth.loggedIn() ? ( */}
<button onClick={postResume}>
  Create Resume
</button>
{/* ) : (
  <p>
    You need to be logged in to create a resume. Please{' '}
    <Link eventKey='login'>login</Link> or <Link to="/signup">signup.</Link>
    </p>
)}; */}
</div>
);
};

export default Resume;