import React, {useState, useCallback, useEffect, useReducer} from 'react';
import {useDispatch} from 'react-redux';

import {addNote} from '../../store/actions/notes.actions';

import NotesList from './list';

const useCustomTitleHook = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useDefaultValue = () => {
  document.title = 'default';
};

const defaultReducer = (state = '', action) => {
  switch (action.type) {
    case 'changed':
      return action.value;
    default:
      return state;
  }
}

const NotesContainer = () => {
  //const [noteName, setNoteName] = useState('');
  const [noteName, dispatch] = useReducer(defaultReducer, '');
  const [isAddEnabled, setAddEnabled] = useState(false);
  const reduxDispatch = useDispatch();
  const title = `Note: ${noteName}`;

  useCustomTitleHook(title);

  const handleChange = useCallback((e) => {
    const {value} = e.target;
    // // setNoteName(prevValue => value);
    // setNoteName(value);
    dispatch({ type: 'changed', value });
  }, []);

  //ComponentDidMount
  useEffect(() => {
    console.log('Equal to ComponentDidMount');
  }, []);

  useEffect(() => {
    setAddEnabled(noteName !== '');
  }, [noteName]);

  const handleAdd = () => {
    reduxDispatch(addNote(noteName));
    //setNoteName();
    dispatch({type: 'changed', value: ''});
  };

  return (
    <div>
      <span>Notes Container</span>
      <div>
        <label>
          Enter input name:
          <input type="text" placeholder="input name" value={noteName} onChange={handleChange}/>
          <button type="button" disabled={!isAddEnabled} onClick={handleAdd}>Add</button>
        </label>
      </div>
      <NotesList/>
    </div>
  );
};

export default NotesContainer;
