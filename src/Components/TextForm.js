import React, { useState }  from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success");
    }
    // const handleCapitalClick = () => {
    //     // let str = text.toString();
    //     // let newText =  str.charAt(0).toUpperCase() + str.substring(1);
    //     // setText(newText);
    //     // document.getElementById("mybox").classList.add('first-letter-uppercase');
    // }


    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "new text"; // wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#5566':'white',color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length} Characters and {text.split(" ").length} Words</p>
            <p>Reading Time: {0.008 * text.split(" ").length} Minutes</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
