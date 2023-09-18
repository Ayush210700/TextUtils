import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('I am Clicked...' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        // console.log('i am also Clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to LowerCase", "success");
    }

    const handleInvClick = () => {
        // console.log('i am also Clicked' + text);
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text is Inversed now.", "success");
    }
    
    const handleClearClick = () => {
        // console.log('i am also Clicked' + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text is Cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value)
    }

    const [text, setText] = useState('')

  return (
    <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'#b7bdc1':'white', color:props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style = {{backgroundColor:'black'}} onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style = {{backgroundColor:'black'}} onClick={handleLowClick}>Convert To LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style = {{backgroundColor:'black'}} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style = {{backgroundColor:'black'}} onClick={handleInvClick}>Inverse the Text</button>
        </div>
        <div className="container1 my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes to read your Text.</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Nothing to Preview !!'}</p>
        </div>
        <hr></hr>
    </>
  )
}
