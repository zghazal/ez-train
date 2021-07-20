import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import {CardGroup, Card, Row, Col} from 'react-bootstrap';

const Profile = () => {

    const {id} = 3;
    const{data:profile, isPending, error} = useFetch('http://localhost:8000/profiles/3');

    return ( 
        <div className="profile">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {profile && (
                <article>
                    <h2>{'Welcome ' + profile.fname + ' ' + profile.lname + ' to your profile page'}</h2><br/>
                    <h5>Thank you for supporting our program by being a premium user! Here you can find all your personal information along with your past completed workouts</h5><br/>
                    <p>{'Age: ' + profile.age}</p>
                    <p>{'Gender: ' + profile.sexe}</p>
                    <p>{'Height: ' + profile.height}</p>
                    <p>{'Weight: ' + profile.weight}</p>
                    <h5>For the past week, you have done 3 workout sessions.</h5><br/>
                    {profile.history.map((exercise) => (
                        <div className="exercise-preview">
                    <Row>
                        <Col xs="10">
                    <h2>{exercise + " workout"}</h2>
                    </Col>
                    <Col xs="2">
                    <Link to={`/exercises/${exercise.id}`}> Details </Link>
                    </Col>
                    </Row>
                </div>
            ))}
                </article>
            )}
        </div>
     );
}
 
export default Profile;