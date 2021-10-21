// use rfc for react function
import React,{useState} from 'react'


export default function Tectform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase Was clicked");
        setText("You have clicked on handleUpClick")
    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}-{text}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onClick={handleonchange} id="my box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Uppercase it</button>
        </div>
    )
}
