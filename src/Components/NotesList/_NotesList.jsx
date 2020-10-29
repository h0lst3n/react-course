import React from 'react';

import style from './style.module.scss';

export default class NotesList extends React.Component {

  renderNotes = (notes) => {
    const {deleteNote} = this.props.actions;
    return (
      notes.length
        ? notes.map(({text, id}) => {
          const handleDeleteNote = () => (deleteNote(id));
          return (<li key={id} className={style['list-item']}>{text}&nbsp;
              <button type="button"
                onClick={handleDeleteNote}
                >
                Delete note
              </button>
            </li>)
        })
        : <li>No notes</li>
    )
  };

  render() {
    // console.log(this.props);
    const { notes } = this.props;
    const { addNote } = this.props.actions;
    const notesList = this.renderNotes(notes);
    const handleAddNote = () => (addNote(`New note #${notes.length + 1}`));
    return(
      <>
      <button onClick={handleAddNote}>Add note</button>
        <div className={style['notes-list-container']}>
          <ul className={style['notes-list']}>
            {notesList}
          </ul>
        </div>
      </>
    );
  }
}
