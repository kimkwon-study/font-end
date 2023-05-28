import { useForm } from 'react-hook-form'
import './styles.css'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

const Signup = () => {
    const {
        register,
        handlerSubmit,
        formState : { errors },
    } = useForm();

    return (
            <Container className='signupCard' >
                <form className='form' >
                    <Row>
                        <p className='signupText'>Sign up</p>
                    </Row>
                    <Row >
                        <Form.Group className="mb-3" controlId="userId">
                            <FloatingLabel label="아이디" >
                                <Form.Control {...register('userId' ,{ required: true })} type="text" placeholder="아이디를 입력해주세요."  />
                                <Form.Text className="text-muted">
                                    사용가능한 아이디입니다.
                                </Form.Text>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="userPassword">
                                <FloatingLabel label="비밀번호(10자리 이상)" className="mb-3" controlId="userPassword">
                                    <Form.Control type="password" placeholder="비밀번호를 입력해주세요." />
                                    <Form.Text className="text-muted">
                                        올바르지 않은 비밀번호 형식입니다.
                                    </Form.Text>
                                </FloatingLabel>
                        </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="userPasswordCheck">
                                <FloatingLabel label="비밀번호 확인" className="mb-3" controlId="userPassword">
                                    <Form.Control type="password" placeholder="비밀번호를 입력해주세요." />
                                    <Form.Text className="text-muted">
                                        비밀번호가 불일치합니다.
                                    </Form.Text>
                                </FloatingLabel>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="userNickname">
                            <FloatingLabel label="닉네임" className="mb-3" controlId="userNickname">
                                <Form.Control type="text" placeholder="닉네임을 입력해주세요." />
                                {/* <Form.Text className="text-muted">
                                    사용가능한 닉네임입니다.
                                </Form.Text> */}
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="userEmail">
                            <FloatingLabel label="이메일 주소" className="mb-3" controlId="userEmail">
                                <Form.Control type="email" placeholder="이메일을 입력해주세요." />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Button type="submit" className='signupButton'>
                        회원가입
                    </Button>
                </form>
            </Container>
    )
}

export default Signup