import React, { useState } from "react";

export default function Hero(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been changed to UPPERCASE!","Success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been changed to lowercase!","Success")
  };

  const handleSentenceCase = () => {
    let sentences = text.split(/([.!?]\s+)/);
    sentences = sentences.map((sentence, index) => {
      if (index % 2 === 0 && sentence.trim() !== "") {
        return (
          sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
        );
      }
      return sentence;
    });
    let newText = sentences.join("");
    setText(newText);
    props.showAlert("Your text has been changed to Sentence case!","Success")
  };

  const handleTitleCase = () => {
    let words = text.split(" ");
    words = words.map((word) => {
      if (word.length > 1) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    });

    let newText = words.join(" ");
    setText(newText);
    props.showAlert("Your text has been changed to Title Case!","Success")
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed from your text!","Success")
  };

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text has been copied to clipboard!","Success")
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Textarea is cleared!","Success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3" >
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'black' }}>
          <h2>Fastest Tool to manipulate your text!!</h2>
          <textarea
            className={`form-control ${props.mode === 'dark' ? 'dark-textarea' : ''}`}
            id="myBox"
            rows="8"
            placeholder="Type or Paste your content here"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'rgba(var(--bs-dark-rgb)':'white' , color: props.mode==='light'?'black':'white' , borderRadius: 0}}
          ></textarea>
          <div className="container my-3">
            <button
              type="button"
              onClick={handleUpClick}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              UPPERCASE
            </button>
            <button
              type="button"
              onClick={handleLoClick}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              lowercase
            </button>
            <button
              type="button"
              onClick={handleSentenceCase}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              Sentence case
            </button>
            <button
              type="button"
              onClick={handleTitleCase}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              Title Case
            </button>
            <button
              type="button"
              onClick={handleSpaces}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              Remove Extra Spaces
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              Copy text
            </button>
            <button
              type="button"
              onClick={handleClear}
              className={`btn mx-1 my-1 ${text.trim() === '' ? 'btn-secondary' : 'btn-success'}`}
              disabled={text.trim() === ''}
              style={{ borderRadius: 0 }}
            >
              Clear Text
            </button>
          </div>
        </div>
        <hr className="bold-hr" style={{color: props.mode==='light'?'black':'white'}}/>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary:</h3>
        <p>
          WordsCount: {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and{" "}
          {text.length} characters <br />
          Reading Time: {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}
          {" "}
          mins{" "}
        </p>
        <hr className="bold-hr" />
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Text Preview:</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        <hr className="bold-hr" />
      </div>
    </>
  );
}
