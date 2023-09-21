import React from 'react'
import { Jumbotron,Form } from 'react-bootstrap'

export const AddTicketForm = (onChange,onSubmit) => {
  return (
    <Jumbotron>
        <Form>
            <Form.Group>
                <Form.Label>subject</Form.Label>
                <Form.Control
                name="subject"
                type="text"
                onChange={onChange}
                required
                />
                
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Date
                </Form.Label>
                <Form.Control
                    type="Date"
                    name="issueDate"
                    required
                    onChange={onchange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Summury
                </Form.Label>
                <Form.Control
                    as="textarea"
                    name="details"
                    rows="5"
                    onchange={onChange}
                    />
            </Form.Group>
        </Form>
    </Jumbotron>
  )
}
