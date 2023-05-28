import { Row, Container } from 'react-bootstrap'
import Signup from '../components/Signup'

function Register() {
    return (
        <Container className="justify-content-md-center" fluid >
            <Row style={{height: 180, background: "#FF7100" }}>
                Header
            </Row>
            <Row md="auto">
                <Signup />
            </Row>
            <Row style={{height: 100}}>
                Footer
            </Row>
        </Container>
    )
}

export default Register