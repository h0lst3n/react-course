import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';

import NoteItem from './item';

const NotesList = () => {
  const notes = useSelector(state => state.notes);
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const handleChangeValue = (e, valueName) => {
    const { value } = e.target;
    if (valueName === 'A') {
      setValueA(value);
    } else {
      setValueB(value);
    }
  }

  const memoizedValue = useMemo(() => {
    return valueA + ' '+ valueB;
  }, [valueA]);
  return (
    <div>
      <span>Notes List</span>
        <div>
          <strong>Memoized value</strong>
          <span>{memoizedValue}</span>
        </div>
        <div>
          <input type="text" value={valueA} placeholder="value A" onChange={(e) => handleChangeValue(e, 'A')}/>
        </div>
        <div>
          <input type="text" value={valueB} placeholder="value B" onChange={(e) => handleChangeValue(e, 'B')}/>
        </div>
      <ul>
        { notes.map(({id, name}) => <NoteItem key={id} id={id} name={name}/>) }
      </ul>
    </div>
  );
};

export default NotesList;
