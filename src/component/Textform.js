import React, { useState } from 'react'

export default function Textform(props) {
    
    const handleUpclick=()=>{
        // console.log("Upclick"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to uppercase", "success");
    }
    const handleLoclick=()=>{
        // console.log("Upclick"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lowercase", "success");
    }
    const handleToclearclick=()=>{
        // console.log("Upclick"+text);
        let newText='';
        setText(newText);
        props.showAlert(" Cleared text ", "success");
    }
    const handlecopy=()=>{
        // var text=document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert(" Copied to clipboard", "success");
    }
    const handleExtraclick=()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert(" Extra spaces removed", "success");
    }
    const handleCapitalclick=()=>{
        let CapitalizeWords = text[0].toUpperCase();  
        for (let i = 1; i <= text.length - 1; i++) {  
            let currentCharacter,  previousCharacter = text[i - 2];  
            if (previousCharacter && previousCharacter === '.') {  
                currentCharacter = text[i].toUpperCase();  
            } else {  
                currentCharacter = text[i];  
            }  
            CapitalizeWords = CapitalizeWords + currentCharacter;  
        }  
        setText(CapitalizeWords);
        props.showAlert(" Capitalized first word", "success");
     }
    const handleclick=(event)=>{
        // console.log("clicked");
        setText(event.target.value);
    }
    // const[text,setText]=useState('Enter your text');
    const[text,setText]=useState('');
    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
            <h3>{props.heading}</h3>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleclick} style={{backgroundColor:props.mode==='dark'?'#121212':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpclick}>Uppercase Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLoclick}>Lowercase Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1"  onClick={handleToclearclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraclick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCapitalclick}>Capitalize</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary </h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}s Read time</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

