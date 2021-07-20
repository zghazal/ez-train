import{useParams} from 'react-router-dom';
import useFetch from './useFetch';

const ExerciseDetails = () => {

    const {id} = useParams();
    const{data:exercise, isPending, error} = useFetch('http://localhost:8000/exercises/' + id);

    return (
        <div className="exercise-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {exercise && (
                <article>
                    <h2>{exercise.title}</h2>
                    <p>{exercise.body}</p>
                    <p>{exercise.time}</p>
                </article>
            )}
        </div>
      );
}
 
export default ExerciseDetails;