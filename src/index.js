import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ToDoList from './ToDoList';
import * as serviceWorker from './serviceWorker';

const itemList = [
  {
    name: 'List item 1',
    isCompleted: false
  }
];

ReactDOM.render(
  <React.StrictMode>
    <ToDoList items={itemList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
