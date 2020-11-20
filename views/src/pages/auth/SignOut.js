import React, {
    useState,
    useEffect
} from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomImg } from '../../components/CustomTag'
import "./style.css";
import utils from '../../../../utils/utils'
import {
    Button,
    Card, CardBody,
    Form, FormGroup, FormFeedback,
    Input,
    Alert,
    Container,
} from "reactstrap";
const SignOut = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    let handleChange = () => {

    }
    let handleSubmit = () => {

    }
    return (
        <React.Fragment>
            <Container className="width-percent-80 SignIn-card">
                {
                    error &&
                    <Alert color="danger" className="p-2 SignIn-alert" >{error}</Alert>
                }
                <Container className="px-0">
                    <Card className="SignIn-form">
                        <div className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "mx-4 mt-5" : "m-2"}>
                            <div className="text-center">

                            </div>
                        </div>
                        <h1 className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "text-center SignIn-text font-weight-bold SignIn-font-size__text pb-3" : "SignIn-text font-weight-bold text-center"}>Đồ Án</h1>
                        <Form onSubmit={handleSubmit()}>
                            <FormGroup className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "pb-3" : ""}>
                                <Input
                                    bsSize="mb-3"
                                    type="email"
                                    name="email"
                                    value={""}
                                    onChange={handleChange()}
                                    placeholder={"placeholder"}
                                    invalid={submitted && !email ? true : false}
                                />
                                <FormFeedback invalid>
                                    Email is a required field!
                                            </FormFeedback>
                                {/* <small className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "py-3" : ""}>
                                    <Link to="/auth/reset-password">{"FORGOT_PASSWORD"}?</Link>
                                </small> */}
                            </FormGroup>
                            <FormGroup className={window.innerWidth >= 415 && window.innerWidth <= 1920 ? "pb-3" : ""}>
                                <Input
                                    bsSize="mb-3"
                                    type="password"
                                    name="password"
                                    value={""}
                                    onChange={handleChange()}
                                    placeholder={"placeholder"}
                                    invalid={submitted && !email ? true : false}
                                />
                                <FormFeedback invalid>
                                    Email is a required field!
                                            </FormFeedback>
                            </FormGroup>
                            <div className="text-center mt-3">
                                {loading === false ?
                                    <Button
                                        color="primary"
                                        font-weight="200"
                                        size="mb-3"
                                        className="btn btn-block text-capitalize"
                                    >
                                        Sign In
                                    </Button>
                                    :
                                    <LoadingSprinner />
                                }
                            </div>
                        </Form>
                    </Card>
                </Container>
            </Container>
        </React.Fragment>
    )
}
export default SignOut