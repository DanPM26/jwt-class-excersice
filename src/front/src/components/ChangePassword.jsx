import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import axios from 'axios';

const ChangePassword = () => {
    const {userData, setUserData} = useContext(UserContext)
   

    const changePassword = async () => {
        const url = 'http://localhost:4003/api/v1/change'
        const result = await axios.put(url, userData)
        console.log(result)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({
          ...userData,
          [name]: value
        })
        console.log(userData)
      }

  return (
    <Container>
    <Row>
      <Col md={12}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={handleChange} name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> New Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="newPassword" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={() => changePassword()}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default ChangePassword
