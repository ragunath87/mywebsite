import { Col, Container, FloatingLabel, Form, Row, Stack } from "react-bootstrap";
import Button from '../assetsui/Buttons';
import Checkbox from "../assetsui/Checkbox";
import { useState } from "react";
import LottieAnimation from '../animations/LottieAnimation';
import animationData1 from '../animations/Peace.json';

const MainBody = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

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