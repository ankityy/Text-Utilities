import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    //text = "new text"  //wrong way to change the text
    //setText("new text") //correct way

    const handleUpClick = () => {
        setText(text.toUpperCase());
   }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleVowelsClick = () => {
        let count = 0;
        for (let char of text) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
                count++;
        }

        setText(`Total vowels in '${text}' are ${count}`);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);          
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    return (
          <>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Text here" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleVowelsClick} >Count Vowels</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
          </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p> {text.split(" ").length * 0.008} minutes</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter the text above to preview"}</p>
            <p></p>    
            </div>
        </>    
    )
}
