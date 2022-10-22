import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(
    {
      InputText: '',
      OutputText: '',
      selectOperation: "TextToBinary"
    })


  let ConvertToBinary = () => {
    let textValue = data.InputText;
    let BinaryValue = '';
    for (let i = 0; i < textValue.length; i++) {
      let AsciiValue = textValue.charCodeAt(i);
      BinaryValue += `${AsciiValue.toString(2)} `
    }
    setData({ ...data, OutputText: BinaryValue })
  }

  let ConvetToText = () => {
    let str = data.InputText;
    let BinaryArary = str.split(' ')
    let decimal;
    let TextValue = '';
    for (let key in BinaryArary) {
      decimal = parseInt(BinaryArary[key], 2);
      TextValue += String.fromCharCode(decimal);
      setData({ ...data, OutputText: TextValue })
    }
  }
  return (
    <div className='container' >
      <select onChange={(e) => {
        setData({ ...data, selectOperation: e.target.value, InputText: '', OutputText: '' })
      }}>
        <option value="TextToBinary">Text to Binary</option>
        <option value="BinaryToText">Binary to Text</option>
      </select>
      <h3>{data.selectOperation}</h3>
      <textarea className='input-text' placeholder='Enter text here' value={data.InputText} onChange={(e) => setData({ ...data, InputText: e.target.value })}></textarea>
      <textarea className="outputcontainer" placeholder="Output" value={data.OutputText} onChange={() => data.OutputText}></textarea>
      <button id='btn-convert' onClick={data.selectOperation === 'TextToBinary' ? ConvertToBinary : ConvetToText} >Convert</button>
    </div>
  );
}

export default App;
