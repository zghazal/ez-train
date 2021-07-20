import {useState} from 'react';

const ContactInfo = ({isPending, handleSubmit, handleCancel}) => {

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');

    return ( 
        <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required/>

                <label>Last Name:</label>
                <input type="text" value ={lname} onChange={(e) => setLname(e.target.value)}required/>

                <label>E-Mail:</label>
                <input type="text" value ={email} onChange={(e) => setEmail(e.target.value)}required/>

                {!isPending && <button>Next</button>}
                {!isPending && <button class="skip" onClick={handleCancel}>Cancel</button>}
                {isPending && <button disabled>Signing up...</button>}
            </form>
     );
}
 
export default ContactInfo;