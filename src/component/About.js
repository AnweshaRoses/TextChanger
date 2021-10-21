import React  from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]=useState(
    // {
    //     color:'black',
    //     backgroundColor:'white'
    // }
    // )
    let myStyle={
        color:props.mode==='dark'?'white':'#121212',
        backgroundColor:props.mode==='dark'?'#121212':'white'
    }


    return (
        <div className="container" style={myStyle}>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <h3 className="my-3">About us</h3>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>Basic function</strong>   
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Text changer lets you carry out certain functions to manipulate your text, it supports many languages but we suggest 
                sticking to english to get full benifit of it, if you have any quaries feel free to message me on discord Anwesha#0811 or mail me at anwesharoses@gmail.com
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Functions of different buttons</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               <p> <strong>Uppercase:</strong>  Converts any text into uppercase.</p> 
               <p> <strong>Lowercase:</strong> Converts any text into lowercase.</p>
               <p> <strong>Clear Text:</strong> Clears any texts written in the box.</p>
               <p> <strong>Copy Text:</strong>  Copies your text to the clipboard.</p>
               <p> <strong>Remove Extra Spaces:</strong>  Removes any extra spaces but it will leave one space by default.</p>
               <p> <strong> Capatalize:</strong> Makes only the first letter capital or any letter after fullstop, make sure its indented properly.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Compatability</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This is a responsive website so it will work on all your devices let me be your smartphone, tablet, laptop or desktop.
                To access the about and the dark mode on your phone and tablet please click on the three lines present on the right hand side top corner of your device.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
        </div>
    )
}
