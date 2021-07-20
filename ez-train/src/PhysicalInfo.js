
import {useState} from 'react';

const PhysicalInfo = ({isPending, handleSubmit, handleCancel}) => {

    const [sexe,setSexe] = useState('');
    const [height,setHeight] = useState('');

    const [weight,setWeight] = useState('');
    const [age,setAge] = useState('Choose an age field');


    return ( 
        <form onSubmit={handleSubmit}>

                <label>Gender:</label>
                <input type="text" value ={sexe} onChange={(e) => setSexe(e.target.value)}required/>

                <label>Height (cm):</label>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} required/>

                <label>Weight (kg):</label>
                <input type="text" value ={weight} onChange={(e) => setWeight(e.target.value)}required/>

                <label>Age:</label>
                <select value={age} onChange={(e) => setAge(e.target.value)}>
                    <option value="12-18">12-18</option>
                    <option value="19-25">19-25</option>
                    <option value="26-32">26-32</option>
                    <option value="33-39">33-39</option>
                    <option value="40+">40+</option>
                </select>
                {!isPending && <button>Next</button>}
                {!isPending && <button class="skip" onClick={handleCancel}>Cancel</button>}
                {isPending && <button disabled>Signing up...</button>}
            </form>
     );
}
 
export default PhysicalInfo;