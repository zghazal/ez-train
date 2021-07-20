import NutritionList from './NutritionList';
import useFetch from './useFetch';



const Nutrition = () => {

    const {data: nutritions, isPending, error} = useFetch('http://localhost:8000/nutrition');

    
    return (  

        <div className="nutrition">

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {nutritions && <NutritionList nutritions={nutritions} title="Available Diets" />}
            
        </div>

    );
}
 
export default Nutrition;

