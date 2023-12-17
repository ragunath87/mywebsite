import { Col, Container, Row} from "react-bootstrap";
import LottieAnimation from '../animations/LottieAnimation';
import animationData1 from '../animations/Peace.json';

const MainBody = () => {


    return(
        <>
            <div className="fillBody">
                <Container fluid>
                    <Row>
                        <Col md={{offset:3, span:6}}>
                            <LottieAnimation animationData={animationData1} width={300} height={400} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MainBody;