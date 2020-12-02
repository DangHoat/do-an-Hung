import React, {
    useState,
    useEffect
} from "react";
import {NavLink} from 'react-router-dom'
import {withTranslation} from 'react-i18next';
import LoadingSprinner from "../../../components/LoadingSprinner";
import '../style.css'
import {
    Button,
    Card, CardBody,
    Form, FormGroup, FormFeedback,
    Label,
    Input, CustomInput,
    Alert,
    Container,
} from "reactstrap";
import "../style.css"
const SignUp = () => {
    const [error, setError] = useState("")
    const [full_name, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password,setComfirm] = useState('')
    const [success,setSuccess] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [terms, setTerms] = useState(false)
    

    let handleChange = () => {

    }
    let handleSubmit = () => {


    }
    let validateEmail = (value) => {
        
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return false;
        } 
        return true;
    }
    let validatePassword = (value)=> {
        let error;
        if (/(?=^.{8,}$).*$/i.test(value)) {
           return false;
        } 
        return true;
    }
    return (
        <React.Fragment>
                <Container className={window.innerWidth <= 375 ? "width-percent-100" : window.innerWidth >= 376 && window.innerWidth <= 414 ? "width-percent-85" : window.innerWidth >= 1366 && window.innerWidth <= 1920 ? "width-percent-65" : "width-percent-75"}>
                    {success &&
                        <Alert className="p-2" color="success">{success}</Alert>
                    }      
                    {error &&
                        <Alert className="p-2" color="danger" isOpen={success ? false: true}>{error}</Alert>
                    }
                    <Card className= 'SignIn-form'>
                        <h1 className=" text-center mt-3 font-weight-bold">Đăng Kí</h1>
                        <CardBody>
                            <Form onSubmit={handleSubmit()}>
                                <FormGroup>
                                    <Label  className="text-primary">{'Email'}</Label>
                                    <Input
                                        bsSize="mb-3"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange()}
                                        placeholder={"Email"}
                                        invalid={submitted && validateEmail(email) ? true : false}
                                    />
                                    { !email &&
                                        <FormFeedback invalid>
                                            Email s a required field!
                                        </FormFeedback> 
                                    }
                                    { email && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) &&
                                        <FormFeedback invalid>
                                            Email is not valid!
                                        </FormFeedback> 
                                    }                             
                                </FormGroup>
                                <FormGroup>
                                    <Label  className="text-primary">{"Tên Đầy Đủ"}</Label>
                                    <Input
                                        bsSize="mb-3"
                                        type="text"
                                        name="full_name"
                                        value={full_name}
                                        onChange={handleChange()}
                                        placeholder={"Tên Đầy Đủ"}
                                        invalid={submitted && !full_name ? true : false}
                                    />
                                    <FormFeedback invalid>
                                        Full name is a required field!
                                    </FormFeedback> 
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-primary">{"Password"}</Label>
                                    <Input
                                        bsSize="mb-3"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange()}
                                        placeholder={"Password"}
                                        invalid={submitted && validatePassword(password) ? true : false}
                                    />
                                    { !password &&
                                        <FormFeedback invalid>
                                            Password is a required field!
                                        </FormFeedback>
                                    }
                                    { password && (!/(?=^.{8,}$).*$/i.test(password)) &&                     
                                        <FormFeedback invalid>
                                            Your password must contain at least 8 or more characters
                                        </FormFeedback> 
                                    } 
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-primary">Xác nhận mật khẩu</Label>
                                    <Input
                                        bsSize="mb-3"
                                        type="password"
                                        name="confirm_password"
                                        value={confirm_password}
                                        onChange={handleChange()}
                                        placeholder={"Xác nhận mật khẩu"}
                                        invalid={submitted && password !== confirm_password ? true : false}
                                    />  
                                    <FormFeedback invalid>
                                        Confirm password incorrect. Please retype the password
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <CustomInput  type="checkbox"  name="terms" id="term"  onChange={e=>setTerms(e.target.value)}  />
                                    </Label>
                                    <small>
                                        <NavLink to="/term" target="_blank" className="mt-1">
                                            Bạn đồng ý với các điều khoản dịch vụ của chúng tôi!
                                        </NavLink> 
                                    </small> 
                                </FormGroup>
                                <div className="text-center mt-3">
                                    {loading === false? 
                                        <Button 
                                            color="primary" 
                                            size="mb-3" 
                                            className="btn btn-block"
                                            disabled = {!terms ? true: false}>
                                            Đăng Kí
                                        </Button>
                                        :
                                        <LoadingSprinner/>
                                    }
                                </div>
                            </Form>
                            <div className="text-center mt-2">
                                <NavLink to="/auth/sign-in" >Quay Về Đăng Nhập!</NavLink>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </React.Fragment>
    )
}
export default SignUp