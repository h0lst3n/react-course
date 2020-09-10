import React, {useState} from 'react';
import './App.scss';
import CustomForm from './components/CustomForm';

const App = () => {
  const [text, setText] = useState('');
  return (
    <>
      <h2>React hooks overview</h2>
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
      <CustomForm text={text}/>
    </>
  );
}

export default App;
