import React from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap"
export const PasswordReset = ({onChangeEvent,email,pass,SubmitData}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr/>
            <Form  autoComplete='off'>
                <Form.Group>
                    
                    <Form.Label  >
                        Email Address
                    </Form.Label>
                    <Form.Control onChange={onChangeEvent} value={email} type="email" name="email" placeholder='Enter Email ' required />
                   
                </Form.Group>
                <Button className='form-box'onClick={SubmitData} type="submit">Login</Button>
            </Form>

            </Col>
        </Row>
     
    </Container>
  )
}
