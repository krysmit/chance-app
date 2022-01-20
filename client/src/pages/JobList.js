import React from 'react';
import { Jumbotron, Button, Container, CardColumns, Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { moveJobId } from '../utils/localStorage';

const AvailableJobs = () => {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || [];
  
    const [moveJob, {error}] = useMutation(MOVE_BOOK);

    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleMoveJob = async (jobId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    
    if (!token) {
      return false;
    }

    try {
      const response = await moveJob({
        variables: {jobId: jobId}
      });

      if (!response) {
        throw new Error('something went wrong!');
      }

      // upon success, remove book's id from localStorage
      moveBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

    // if data isn't here yet, say so
    if (!loading) {
      return <h2>LOADING...</h2>;
    }
  
    return (
      <>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Available Jobs</h1>
          </Container>
        </Jumbotron>
        <Container>
          <h2>
            {userData.AvailableJobs.length
              ? `Viewing ${userData.AvailableJobs.length} saved ${userData.AvailableJobs.length === 1 ? 'job' : 'job'}:`
              : 'You have no saved books!'}
          </h2>
          <CardColumns>
            {userData.AvailableJobs.map((job) => {
              return (
                <Card key={jobId} border='dark'>
                  <Card.Body>
                    <Card.Title>{jobTitle}</Card.Title>
                    <p className='small'>Employer: {Employer}</p>
                    <Card.Text>{description}</Card.Text>
                    <p className='small'>Hourly Pay: {HourlyPay}</p>
                    <Button className='btn-block btn-danger' onClick={() => handleMoveJob(jobId)}>
                      Apply to this job!
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </>
    );
  };
  
  
  export default AvailableJobs;