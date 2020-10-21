import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../../store/actions/notes.actions';

const NoteItem = ({name, id}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteNote(id));
  };
  return (
    <li>
      <p>{name}</p>
      <button type="button" onClick={handleDelete}>X</button>
    </li>
  );
};

export default NoteItem;
