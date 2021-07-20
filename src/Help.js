import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import ChatBot from 'react-simple-chatbot';
import {useState} from 'react';


const Help = () => {

    const steps = [
        {
          id: '0',
          message: 'Hello! What kind of help do you need?',
          trigger: '1',
        },
        {
          id: '1',
          message: 'I am not yet implemented :(',
          end: true,
        },
      ];

    const [chat,setChat] = useState(null);
    const handleClick = () => {
        if(chat === null){
        setChat('open');
        }
        else{
            setChat(null);
        }
    }
    return ( 
        <div className="help">

        <Fab icon="?" text="Request Help" onClick={handleClick}></Fab>
        {chat && <ChatBot steps={steps} />}
        </div>
     );
}
 
export default Help;