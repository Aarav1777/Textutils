import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState();
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLwClick =()=>{
      let newText = text.toLowerCase();
      setText(newText)

  }
    const handleOnchange =(event)=>{
      console.log(event.target.value);
      
        setText(event.target.value)
    }
    const handleclear=()=>{
      setText(" ")
      
    }
    

    const handleCpClick = () => {
      let newText = text
        .split(' ') // Split the text into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(' '); // Join the words back together with a space
    
      setText(newText);
    };
    
    // remove extra space 
    const handleRmClick = () => {
      console.log("Removing extra spaces");
   
      let newText = text.replace(/\s+/g, ' ').trim();
    
      setText(newText);
    };
   
    

  return (
    <>
    <div className="container" style = {{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      
<div className="mb-3">
  <textarea  className="form-control " value={text} onChange={handleOnchange} style = 
  {{backgroundColor:props.mode ==='dark'?'grey':'white', color: props.mode ==='dark' ? 'white':'#042743'}}id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-4" onClick={handleUpClick}> convert to UpperCase</button>
<button className="btn btn-primary mx-4" onClick={handleLwClick}> convert to LowerCase</button>
<button className="btn btn-primary mx-4" onClick={handleCpClick}> convert to capitalize</button>
<button className="btn btn-primary mx-4" onClick={handleRmClick}> Remove extra space </button>

<button className="clearbtn mx-4 btn-danger" onClick={handleclear}> Clear </button>

 </div>

 <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
  <h2>Your Text Summary</h2>

  <p>
    {/* Calculate word count once for reuse */}
    {(() => {
      const wordsArray = (text || "").trim().split(/\s+/).filter(word => word.length > 0);
      const wordCount = wordsArray.length;
      const charCount = (text || "").length;

      return (
        <>
          {wordCount} words and {charCount} characters
        </>
      );
    })()}
  </p>

  <p>
    {/* Calculate reading time based on word count */}
    {(() => {
      const wordsArray = (text || "").trim().split(/\s+/).filter(word => word.length > 0);
      const readingTime = (0.008 * wordsArray.length).toFixed(2);

      return `${readingTime} Minutes read`;
    })()}
  </p>

  <h2>Preview</h2>
  <p>{(text || "").length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
</div>
f

    </>
    
  )
}
