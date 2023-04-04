import React, { useState } from 'react'
import axios from 'axios'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [loginForm, setLoginForm] = useState()
  const url = 'http://localhost:4003/api/v1/auth/login'
  const url2 = 'http://localhost:4003/api/v1/users/me'
  const navigation = useNavigate()

  const handleSubmit = () => {
    console.log(loginForm)
    axios.post(url, loginForm)
      .then(res => {
        console.log(res.data)
        return (
          axios.get(url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${res.data.token}`
            }
          }).then(response => {
            console.log(response.data)
            navigation('/profile')
          })
        )
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginForm({
      ...loginForm,
      [name]: value
    })
    console.log(loginForm)
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
            <Button variant="primary" type="button" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm