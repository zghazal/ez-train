import {useState, useContext } from 'react';
import { UserContext } from "./UserContext";
import {useHistory} from 'react-router-dom';
import { ProgressBar} from 'react-bootstrap';
import ContactInfo from './ContactInfo';
import PhysicalInfo from './PhysicalInfo';
import PremiumQ from './PremiumQ';
import Created from './Created';

const SignUp = () => {

    const { user, setUser } = useContext(UserContext);
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [age,setAge] = useState('0-18');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const [percent,setPercent] = useState(1);

    const handleSubmit = ( e) => {
       e.preventDefault();
       const profile = {fname, lname, age};

       //setIsPending(true);
       
       setPercent(percent + 33);

       if(percent === 100){
            fetch('http://localhost:8000/profiles', {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(profile)
            }).then(() => {
                setUser(true);
                setIsPending(false);
                history.push('/menu');
            })
        }
    }

    const handleCancel = (e) =>{
        history.push('/');
    }
    return (  
        <div className="signup">

            <ProgressBar variant="danger" now={percent} label={`Step ${(percent-1)/33} of 3 Done`}/>
            
            <div class="row">
                <div class="col-md-10"><h2>Sign up today for free and have access to all our unique features!</h2></div>
                <div class="col-md-2"><br/><img src="https://img.icons8.com/material-outlined/60/fa314a/sign-up-in-calendar.png"/></div>
            </div>

            {percent === 1 && <ContactInfo isPending={isPending} handleSubmit={handleSubmit} handleCancel={handleCancel}/>}
            {percent === 34 && <PhysicalInfo isPending={isPending} handleSubmit={handleSubmit} handleCancel={handleCancel}/>}
            {percent === 67 && <PremiumQ isPending={isPending} handleSubmit={handleSubmit} handleCancel={handleCancel}/>}
            {percent === 100 && <Created isPending={isPending} handleSubmit={handleSubmit} handleCancel={handleCancel}/>}
            
            
        </div>
    );
}
 
export default SignUp;