import {CardGroup, Card, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import pic1 from './menu1.jpg';
import pic2 from './menu2.jpg';

const Menu = () => {
    return ( 
        <div className="menu">
            <Row xs={1} md={2} className="g-4">
            
                <Col>
                    <Card className="text-center">
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                        <Card.Title>Exercises</Card.Title>
                        <Card.Text>
                            Check out our page full of all kinds of exercises to help you achieve the goals you are looking for.
                        </Card.Text>
                        <Link to="/exerciselist">Exercise List</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Img variant="top" src={pic2} />
                        <Card.Body>
                        <Card.Title>Nutrition</Card.Title>
                        <Card.Text>
                            Check out this page where diets are created suited perfectly for our user's goals. Requires premium account.
                        </Card.Text>
                        <Link to="/nutrition">Dietary help</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
     );
}
 
export default Menu;