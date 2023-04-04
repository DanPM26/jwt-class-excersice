import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const url = 'http://localhost:5000/users'
    const users = await axios.get(url)
    console.log(users.data)
    setUsers(users.data)
  }

  useEffect(() => {
    getUsers()
  }, []);
  return (
    <Container>
      <Row>
        {
          users.length > 0 ?
            users.map((user, i) => (
              <Col md={6} key={i} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://picsum.photos/300/250" />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                      Email: {user.email}
                    </Card.Text>
                    <Card.Text>
                      Edad: {user.age}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div>
              <h1>Sin usuarios</h1>
            </div>
        }
      </Row>
    </Container>
  )
}

export default App
