// TextComponent.js
import React, { useState } from 'react';

function TextComponent({ text, mode }) {
  const [fontStyle, setFontStyle] = useState('Arial'); // Default font style

  const handleFontClick = () => {
    setFontStyle(prevFont => prevFont === 'Arial' ? 'Courier New' : 'Arial');
  };

  return (
    <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : '#042743' }}>
      <button onClick={handleFontClick}>Change Font</button>
      <h2 style={{ fontFamily: fontStyle }}>Your Text Summary</h2>
      
      <p style={{ fontFamily: fontStyle }}>
        {text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters
      </p>
      
      <p style={{ fontFamily: fontStyle }}>
        {(0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length).toFixed(2)} Minutes read
      </p>
      
      <h2>Preview</h2>
      <p style={{ fontFamily: fontStyle }}>
        {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
      </p>
    </div>
  );
}

export default TextComponent;
