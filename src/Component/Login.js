
import React, { useState, useEffect } from 'react';
import '../Login.css'
// import Validation from '../Component/Validation'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';




function Login() {
    // const [values, setValues] = useState({
    //     fullname: "",
    //     lastname: "",
    //     designation: "",
    //     email: "",
    //     password: ""
    // });


    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("")
        }
    }, [])

    // const [errors, setErrors] = useState({});

    const signup = async e => {
        e.preventDefault();
        let item = [firstname, lastname, designation, email, password];
        console.warn(item)
        let res = await fetch("https://localhost:44396/api/Register/AddRegister", {
            method: 'POST',
            body: JSON.stringify(item),
            header: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        res = await res.json()
        localStorage.setItem("user-info", JSON.stringify(res))
        history.push("");

    }


    // const siginin = async e => {

    //     let item = [mail, pwd];
    //     let result = await fetch("https://localhost:44396/api/Login/AddUser", {
    //         method: 'POST',
    //         body: JSON.stringify(item),
    //         header: {
    //             "Content-Type": 'application/json',
    //             "Accept": 'application/json'
    //         }
    //     });
    //     result = await result.json()
    //     localStorage.setItem("user-info", JSON.stringify(result))
    //     history.push("");
    // }

    function siginin  ()  {
        debugger;
        // let self = this;

        axios({
            method: "post",
            url: "https://localhost:44396/api/Login/AddUser",
            // headers: authHeader(),
            data:{
                email:mail,
                password:pwd
            } 
            
        })
            .then(function (res) {
                debugger;
                let status = res.data.message;
                let data = res.data.responseData;
                if (status === "Success") {
                    // self.setState({
                    //     subscriptionTypePeriod: data,
                    // });
                } else {
                    // self.setState({
                    //     subscriptionTypePeriod: [],
                    // });
                }
            })
            .catch((data) => {
                console.log(data);
            });
    }

    return (
        <>

            <div className="header">
                <span >Q&A</span>
            </div>
            <div className="container">
                <br />  <br />  <br />
                <Container>
                    <Row  >
                        {/* New Register User */}

                        <Col >
                            <Card>
                                <Card.Header className="formheader">Register</Card.Header>
                                <div className="register">
                                    <br />
                                    <Form>
                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                FirstName :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="text" placeholder="Enter Your First Name" onChange={(e) => setFirstName(e.target.value)} />
                                                {/* {errors.fullname && <p className="error">{errors.fullname}</p>} */}

                                            </Col>
                                        </Form.Group>
                                        <br />
                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                LastName :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="text" placeholder="Enter Your Last Name" onChange={(e) => setLastName(e.target.value)} />
                                                {/* {errors.lastname && <p className="error">{errors.lastname}</p>} */}

                                            </Col>
                                        </Form.Group>
                                        <br />

                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                Designation :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="text" placeholder="Enter Your Designation" onChange={(e) => setDesignation(e.target.value)} />
                                                {/* {errors.designation && <p className="error">{errors.designation}</p>} */}

                                            </Col>
                                        </Form.Group>
                                        <br />
                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                Email :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="text" placeholder="Enter Your Email Id" onChange={(e) => setEmail(e.target.value)} />
                                                {/* {errors.email && <p className="error">{errors.email}</p>} */}
                                            </Col>
                                        </Form.Group>
                                        <br />

                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                Password :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                                                {/* {errors.password && <p className="error">{errors.password}</p>} */}

                                            </Col>
                                        </Form.Group>
                                        <br />
                                        <Form.Group className="remember">
                                            <Form.Check column sm="2" type="checkbox" label="Remember Me" />
                                        </Form.Group>
                                        <br />
                                        <Button className="button" onClick={e => signup(e)}>
                                            Login
                                        </Button>
                                        <br /> <br />
                                    </Form>
                                </div>
                            </Card>
                        </Col>


                        {/* Login Users  */}

                        <Col>

                            <Card >
                                <Card.Header className="formheader">Login</Card.Header>
                                <div className="register">
                                    <br />
                                    <Form>
                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                Email :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="text" placeholder="Enter Your Email Id" onChange={(e) => setMail(e.target.value)} />
                                            </Col>
                                        </Form.Group>
                                        <br />
                                        <Form.Group as={Row} >
                                            <Form.Label column sm="4" className="label">
                                                Password :
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control className="textbox" type="password" placeholder="Enter Your Password" onChange={(e) => setPwd(e.target.value)} />
                                            </Col>
                                        </Form.Group>
                                        <br />
                                        <Form.Group className="remember">
                                            <Form.Check column sm="2" type="checkbox" label="Remember Me" />
                                        </Form.Group>
                                        <br />
                                        <div >
                                            <Button className="button" onClick={e => siginin(e)}>
                                                Login
                                            </Button>
                                        </div>
                                        <br /> <br />
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Login


