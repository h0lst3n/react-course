import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useRef
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNote, deleteNote, fetchNotes } from '../../store/actions/notes.actions';
import { notesSelector } from '../../store/selectors/notes.selectors';

const NoteItem = ({title, objectID, onDelete}) => (
  <li>
    <strong>{title}</strong>
    <button type="button" onClick={() => onDelete(objectID)}>X</button>
  </li>
);

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector);
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  const handleTextChange = useCallback(e => {
    const { value } = e.target;
    setText(value);
  }, [setText]);

  const handleNoteDelete = useCallback(
    (objectID) => dispatch(deleteNote(objectID))
  , [dispatch]);

  const notesList = useMemo(() => (
    notes.length > 0
      ? notes.map(
        note => <NoteItem {...note}
          key={note.objectID}
          onDelete={() => handleNoteDelete(note.objectID)}
        />)
      : <li>There are no notes</li>
  ), [notes]);

  const handleAddNote = useCallback(() => {
    dispatch(addNote(text));
    setText('');
  }, [text, dispatch, setText]);
  useLayoutEffect(() => {
    console.log('layout effect');
  }, []);

  useEffect(() => {
    console.log('Like componentDidMount');
    inputRef.current.focus();
    dispatch(fetchNotes('https://hn.algolia.com/api/v1/search?query=react'));
  }, []);

  useEffect(() => {
    console.log('Like componentDidUpdata');
  }, [text]);

  useEffect(() => {
    console.log('Like componentWillUnmount');
    // return () => {
    //   /* function should be called before unmount */
    //   return true;
    // };
  }, []);

  return (
    <div>
      <h2>Notes List</h2>
      <div>
        <strong>Add note:</strong>
        <input ref={inputRef} type="text" placeholder="Enter note text" value={text} onChange={handleTextChange}/>
        <button type="button" onClick={handleAddNote}>Add note</button>
      </div>
      <div>
        <ul>
          {notesList}
        </ul>
      </div>
    </div>
  );
};

export default NotesList;
