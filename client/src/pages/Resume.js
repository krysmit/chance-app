import React, { useRef } from 'react';
import { Form, InputGroup } from '@themesberg/react-bootstrap';

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
  

  }


return (
<div>
<Form className="form">
  <Form.Group className="mb-3 text-name">
  <Form.Label className="text-center">Username</Form.Label>
    <Form.Control ref={username} type="username" placeholder="" />
    <Form.Label className="email">Email address</Form.Label>
    <Form.Control ref={email} type="email" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3 text-ed">
    <Form.Label>Education</Form.Label>
    <Form.Control ref={education} as="textarea" rows="2" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3 text-job">
    <Form.Label>Past Jobs</Form.Label>
    <Form.Control ref={pastJobs} as="textarea" rows="4" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3 text-skills">
    <Form.Label>Skills</Form.Label>
    <Form.Control ref={skills} as="textarea" rows="2" placeholder=""/>
  </Form.Group>
</Form>
{/* {Auth.loggedIn() ? ( */}
<button  className='button' onClick={postResume}>
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