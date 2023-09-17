import React from 'react'
import { Container, Row ,Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../Components/Ticket-table/TicketTable.comp'
import Tickets from '../../assets/Data/Dummy-tickets.json'

export const Dashboard = () => {
  return (
    <Container>
        <Row className='text-center'>
            <Col>
            <Button variant='info' style={{'fontSize':'2rem',padding:"10px 30px"}} >
                Add New Ticket
            </Button>
            <p></p>
            </Col>
        </Row>
        <Row className='text-center text-10' style={{'fontSize':'20px'}}>
            <Col>
            <div>Total tickets : 50</div>
            <div>Remaining ticket : 5</div>
            </Col>
        </Row>
        <Row  style={{'fontSize':'20px'}}>
            <Col>
                Recently Added Tickets
            </Col>
        </Row>
        <Row   style={{'fontSize':'20px','margin':'20px 0px'}}>
            <Col>
                <TicketTable Tickets={Tickets} />
            </Col>
        </Row>
        
    </Container>
  )
}
