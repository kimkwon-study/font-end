import { useForm } from 'react-hook-form'

import axios from 'axios'
import './styles.css'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState : { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        axios.post('http://localhost:8080/api/register', JSON.stringify(data))
            .then(function (response) {
                console.log(response);
                if (response.result_code === "REGISTER_SAME_ID") {
                    alert(response.result)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
            <Container className='signupCard' gap={3} >
                <form className='form' onSubmit={handleSubmit(onSubmit)} >
                    <Row>
                        <p className='signupText'>Sign up</p>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group className="mb-3" controlId="userId">
                                <FloatingLabel label="아이디" >
                                    <Form.Control {...register('userId' ,{
                                        required: "아이디는 필수 입력입니다.",
                                        })} type="text" />
                                    <Form.Text className="text-muted">
                                        {errors.userId && errors.userId.message}
                                    </Form.Text>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        {/* <Col sm={3}>
                            <button className='idCheck'>중복확인</button>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="password">
                                <FloatingLabel label="비밀번호(10자리 이상)" className="mb-3" >
                                    <Form.Control 
                                        {...register('password' ,{ 
                                            required: "비밀번호는 필수 입력입니다.",
                                            minLength: {
                                                value: 8,
                                                message: "8자리 이상 비밀번호를 사용하세요.",
                                            },
                                        })} type="password" />
                                    <Form.Text className="text-muted">
                                        {errors.password && errors.password.message}
                                    </Form.Text>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" >
                                <FloatingLabel label="비밀번호 확인" className="mb-3" >
                                    <Form.Control type="password"/>
                                    <Form.Text className="text-muted">
                                        {errors.password && errors.password.message}
                                    </Form.Text>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="nickname">
                                <FloatingLabel label="닉네임" className="mb-3" >
                                    <Form.Control {...register('nickname' ,{ required: "닉네임은 필수 입력입니다." })} type="text" />
                                    <Form.Text className="text-muted">
                                        {errors.nickname && errors.nickname.message}
                                    </Form.Text>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="email">
                                <FloatingLabel label="이메일 주소" className="mb-3">
                                    <Form.Control {...register('email' ,{ 
                                        required: "이메일은 필수 입력입니다.",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "이메일 형식에 맞지 않습니다.",
                                        }
                                    })} type="email" />
                                </FloatingLabel>
                                <Form.Text className="text-muted">
                                    {errors.email && errors.email.message}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <button type="submit" className='signupButton' disabled={isSubmitting}>
                        회원가입
                    </button>
                </form>
            </Container>
    )
}

export default Signup