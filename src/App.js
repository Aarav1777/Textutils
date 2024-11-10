
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextComponent from './components/TextComponent';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  // const [text, setText] = useState('');

  const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.background ='#042743';

  }
  else{
    setMode('light');
    document.body.style.background ='white';

  }
  }


  return (
    <> 
  <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
  <div className="container my-3">
  <TextForm heading =" Enter the text to analyze below " mode ={mode}/>
    {/* <TextComponent text={text} mode={mode}/> */}
  </div>
 
    </>
  );
} 

export default App;
