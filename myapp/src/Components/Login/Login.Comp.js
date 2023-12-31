import React from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap"
export const LoginForm = ({onChangeEvent,email,pass,SubmitData}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr/>
            <Form  autoComplete='off'>
                <Form.Group>
                    
                    <Form.Label  >
                        Email Address
                    </Form.Label>
                    <Form.Control onChange={onChangeEvent} value={email} type="email" name="email" placeholder='Enter Email ' required />
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control onChange={onChangeEvent} value={pass} type="password" name="password" placeholder='Enter Password' required />
                </Form.Group>
                <Button className='form-box'onClick={SubmitData} type="submit">Login</Button>
            </Form>

            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <a href="#">Forget Password</a>
            </Col>
        </Row>

    </Container>
  )
}
