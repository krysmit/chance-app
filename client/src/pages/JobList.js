import React, { useState } from 'react';
import { Jumbotron, Button, Container, CardColumns, Card } from 'react-bootstrap';
import {Modal} from '../Modal'
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

// import { moveJobId } from '../utils/localStorage';

const AvailableJobs = () => {  
  const [isOpen, SetIsOpen] = useState(false)
  
  return (
      <>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Available Jobs</h1>
          </Container>
        </Jumbotron>

        <Container>
          <CardColumns>
            
                <Card border='dark'>
                  <Card.Body>
                    <Card.Title>Cashier</Card.Title>
                    <p className='small'>Employer: Target</p>
                    <Card.Text>Target Cashiers are entry-level employees responsible for handling cash registers and providing customer service. Typical duties listed on a Target Cashier resume are greeting customers, collecting payments, managing returns and refunds, answering to customer inquiries, and stocking shelves.</Card.Text>
                    <p className='small'>Hourly Pay: $15.00</p>
                    <Button className='btn-block btn-danger' 
                    onClick={() => SetIsOpen(true) }>
                    <Modal open={isOpen}>
                       Thanks for applying. Plase apply only once. Still in beta.
                    </Modal>
                    Apply!
                    </Button>
                  </Card.Body>
                </Card>
              
                <Card border='dark'>
                  <Card.Body>
                    <Card.Title>Dog Handler</Card.Title>
                    <p className='small'>Employer: Ron Doggy Day Care</p>
                    <Card.Text>Dog Handlers are responsible for ensuring propper care of each animal. If you have questions, Google it.</Card.Text>
                    <p className='small'>Hourly Pay: $12.00</p>
                    <Button className='btn-block btn-danger' onClick={() => SetIsOpen(true) }>
                    <Modal open={isOpen}>
                       Thanks for applying. Plase apply only once. Still in beta.
                    </Modal>
                      Apply to this job!
                    </Button>
                  </Card.Body>
                </Card>

                <Card border='dark'>
                  <Card.Body>
                    <Card.Title>Baking Assistant</Card.Title>
                    <p className='small'>Employer: Jeff and Jeff Baking</p>
                    <Card.Text>Weigh, sift, measure and mix baking ingredients; prepare and bake breads, rolls, cookies, pies, cakes, biscuits, puddings, cobblers, brownies and other baked good items. Accurately and appropriately utilize the various bakery equipment and if needed, assist with training and monitoring others in its safe usage.</Card.Text>
                    <p className='small'>Hourly Pay: $17.50</p>
                    <Button className='btn-block btn-danger'onClick={() => SetIsOpen(true) }>
                    <Modal open={isOpen}>
                       Thanks for applying. Plase apply only once. Still in beta.
                    </Modal>
                      Apply to this job!
                    </Button>
                  </Card.Body>
                </Card>

          
          </CardColumns>
        </Container>

      </>
  )
  };
  
  export default AvailableJobs;