import { Link } from "react-router-dom";

const NutritionList = ({nutritions,title}) => {
    return ( 
        <div className="nutrition-list">
            <h2>{title + " "}</h2>
            {nutritions.map((nutrition) => (
                <div className="nutrition-preview" key={nutrition.id}>
                    <h2>{nutrition.title} </h2>
                    <p>{nutrition.body}</p>
                    <br/>
                    <Link to={`/nutrition/${nutrition.id}`}> More Details </Link>
                </div>
            ))}
        </div>
     );
}
 
export default NutritionList;