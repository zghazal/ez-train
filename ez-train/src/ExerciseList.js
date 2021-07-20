import { Link } from "react-router-dom";

const ExerciseList = ({exercises,title}) => {


    return (  
        <div className="exercise-list">
            <h2>{title + " "}</h2>
            {exercises.map((exercise) => (
                <div className="exercise-preview" key={exercise.id}>
                    <h2>{exercise.title} </h2>
                    <p>{exercise.body}</p>
                    <br/>
                    <Link to={`/exercises/${exercise.id}`}> Start Exercise </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ExerciseList;