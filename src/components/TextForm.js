import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    //text = "new text"  //wrong way to change the text
    //setText("new text") //correct way

    const handleUpClick = () => {
        setText(text.toUpperCase());
        text && props.showAlert("Converted to Uppercase", "success");
   }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        text && props.showAlert("Converted to Lowercase", "success");

    }

    const handleClearClick = () => {
        setText("");
        text && props.showAlert("Text is Cleared", "success");
    }

    const handleVowelsClick = () => {
        let count = 0;
        for (let char of text) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
                count++;
        }
        if (count === 0)
            return;
        setText(`Total vowels in '${text}' are ${count}`);
        text && props.showAlert("Counted the Vowels", "success");

    }

    const handleOnChange = (e) => {
        setText(e.target.value);          
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        text && props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        text && props.showAlert("Extra spaces Removed", "success");

    }
    
    return (
          <>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Text here" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleVowelsClick} >Count Vowels</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
          </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p> {text.length>0 ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
                <p> {text.length>0 ? text.trim().split(/\s+/).length*0.008 : 0} minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            <p></p>    
            </div>
        </>    
    )
}
