import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry! That page cannot be found.</h1>
      <div style={{textAlign: "center"}}>
      <Link to="/">Back to the homepage...</Link>
      </div>
    </div>
  );
}
 
export default NotFound;