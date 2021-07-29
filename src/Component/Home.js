import React from 'react'
import '../Home.css'
import {   Container, Row, Col, Card, Button } from 'react-bootstrap'
import Header from '../Component/Header'

function Home() {
    return (
        <div>
            <div>
                <Header/>
            </div>

           
            <div className="card">

                    {/* first Group Box */}

                <Container>
                    <Row>
                        <Col >
                            <Card style={{ width: '18rem' }}>
                            <Card.Header >React</Card.Header>
                            <Card.Body className="qbutton">
                              
                                    <Button variant="primary">Question</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col><Card style={{ width: '18rem' }}>
                        <Card.Header >Python</Card.Header>
                        <Card.Body className="qbutton">
                                <Button variant="primary">Question</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header >Java</Card.Header>
                        <Card.Body className="qbutton">
                                <Button variant="primary">Question</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>
             <br/>
             {/* second Group Box */}

                <Container>
                    <Row>
                        <Col >
                            <Card style={{ width: '18rem' }}>
                            <Card.Header >Angular</Card.Header>
                            <Card.Body className="qbutton">
                                    <Button  variant="primary">Question</Button>
                                    </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header >Vue js</Card.Header>
                        <Card.Body className="qbutton">
                                <Button variant="primary">Question</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header >Node js</Card.Header>
                        <Card.Body className="qbutton">
                                <Button variant="primary">Question</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>
                <br/>  
                    {/* Third Group Box */}

                <Container>
                    <Row>
                        <Col >
                            <Card style={{ width: '18rem' }}>
                            <Card.Header >c#</Card.Header>
                            <Card.Body className="qbutton">
                                    <Button variant="primary">Question</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header >C++</Card.Header>
                        <Card.Body className="qbutton">
                                <Button variant="primary">Question</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Asp.net</Card.Header>
                        <Card.Body className="qbutton">
                                <Button variant="primary">Question</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Home
