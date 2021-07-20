import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
    return (  

        <div className="welcome">

            <h2>Welcome to EZ-Train! The place to find all your exercising needs from workouts to nutrition!</h2>
            <br/>
            
                <Container>
                    <Row>
                        <Col md={6}>
                            <h4>If you are looking to make an account with us and have access to all our amazing features, click on the button below.</h4>
                        </Col>
                        <Col md={6}>
                            <br/>
                            <h4>If you are just looking to find our exercises list, click on the button below.</h4>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Link to="/signup">Sign Up <img src="https://img.icons8.com/material-outlined/30/ffffff/sign-up.png"/></Link>
                        </Col>
                        <Col md={6}>
                        <Link to="/exerciselist"> Start Exercise <img src="https://img.icons8.com/ios-glyphs/30/ffffff/exercise.png"/></Link>
                        </Col>
                    </Row>
              </Container>

        </div>

    );
}
 
export default Welcome;