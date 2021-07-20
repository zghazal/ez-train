import ExerciseList from './ExerciseList';
import useFetch from './useFetch';



const Exercise = () => {

    const {data: exercises, isPending, error} = useFetch('http://localhost:8000/exercises');

    
    return (  

        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {exercises && <ExerciseList exercises={exercises} title="All Exercises" />}
            
        </div>

    );
}
 
export default Exercise;

