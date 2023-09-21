import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'     
import { CompBreadcrumb } from '../../Components/Breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../Components/Ticket-table/AddTicketForm.comp'

export const AddTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
            <CompBreadcrumb page="New Ticket"/>

            </Col>
        </Row>
        <Row>
           <Col>
           <AddTicketForm/>
           </Col>
        </Row>
    </Container>
  )
}
