import {Link} from 'react-router-dom';
import logo from './logo.PNG';
import {useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { LangContext } from "./LangContext";
import useFetch from './useFetch';

const Navbar = () => {

    const [url, setUrl] = useState("http://localhost:8000/nav-texts-eng")
    const { user, setUser } = useContext(UserContext);
    const { lang, setLang } = useContext(LangContext);
    const {data: navtexts, isPending, error} = useFetch(url);
    const handleLang = () => {
        if(lang === "eng"){
            setLang("fr");
            setUrl("http://localhost:8000/nav-texts-fr");
        }
        else{
            setLang("eng");
            setUrl("http://localhost:8000/nav-texts-eng");
        }
    }
    return ( 

        <nav className="navbar">
            <Link to="/"><h1>EZ-Train <img src={logo}/></h1></Link>
            <div className="links">
                <Link to="/menu">Home</Link>
                <Link to="/exerciselist">Exercises</Link>
                <Link to="/nutrition">Nutrition</Link>
                <Link to="/exerciselist" onClick={handleLang}>Français</Link>
                {!user && <Link to="/signup" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Sign up</Link>}
                {user && <Link to="/profiles/3" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Profile</Link>}
            </div>
        </nav>

     );
}
 
export default Navbar;