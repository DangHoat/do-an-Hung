import React, {
    useState,
    useEffect
} from "react";
import { Link, NavLink } from "react-router-dom";
import socketIOClient  from "socket.io-client"
import {
    Button,
    Card, CardBody,
    Form, FormGroup, FormFeedback,
    Input,
    Alert,
    Container,
} from "reactstrap";
import "../style.css"
const SignIn = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const socket = socketIOClient("http://127.0.0.1:8080");
        socket.on("FromAPI", data => {
          console.log(data)
        });
      }, []);
    let handleChange = () => {

    }
    let handleSubmit = () => {

    }
    return (
        <React.Fragment >
                <Container className="width-percent-80 SignIn-card">
                    {error &&
                        <Alert color="danger" className="p-2 SignIn-alert" >{error}</Alert>
                    }
                    <Container className="px-0">
                        <Card className="SignIn-form">
                            <CardBody className="px-0 pt-0 pb-0">
                                <div className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "mx-4 mt-5" : "m-2"}>
                                    <div className="text-center">
                                        
                                    </div>
                                    <h1 className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "text-center SignIn-text font-weight-bold SignIn-font-size__text pb-3" : "SignIn-text font-weight-bold text-center"}>Đồ Án Tốt Nghiệp</h1>
                                    <Form onSubmit={handleSubmit()}>
                                        <FormGroup className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "pb-3" : ""}>
                                            <Input
                                                bsSize="mb-3"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={handleChange()}
                                                placeholder={"Email"}
                                                invalid={submitted && !email ? true : false}
                                            />
                                            <FormFeedback invalid>
                                                Email is a required field!
                                            </FormFeedback>
                                        </FormGroup>
                                        <FormGroup className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "pb-3" : ""}>
                                            <Input
                                                bsSize="mb-3"
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={handleChange()}
                                                placeholder={"Password"}
                                                invalid={submitted && !password ? true : false}
                                            />
                                            <FormFeedback invalid>
                                                Passwords is a required field!
                                            </FormFeedback>
                                            <small className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "py-3" : ""}>
                                                <Link to="/auth/reset-password">Quên Mật Khẩu?</Link>
                                            </small>
                                        </FormGroup>
                                        <div className="text-center mt-3">
                                            {loading === false ?
                                                <Button
                                                    color="primary"
                                                    font-weight="200"
                                                    size="mb-3"
                                                    className="btn btn-block text-capitalize"
                                                >
                                                    Đăng Nhập
                                                </Button>
                                                :
                                                <LoadingSprinner />
                                            }
                                        </div>
                                    </Form>
                                    <div className={window.innerWidth >= 411 && window.innerWidth <= 414 ? "text-center mt-3" : window.innerWidth >= 415 && window.innerWidth <= 1920 ? "text-center mt-2 pt-3" : "text-center mt-2"}>
                                        <NavLink to="/auth/sign-up">Bạn chưa có tài khoản</NavLink>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </Container>
            </React.Fragment>
    )
}
export default SignIn