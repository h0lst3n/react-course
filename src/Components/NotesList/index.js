import React from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, fetchNotes } from '../../store/actions/notes.actions';

import { getNotesBySelectedTags } from '../../store/selectors/notes.selectors';

const NoteItem = ({objectID, title, onDelete}) => (
  <li>
    <strong>{title}</strong>
    <button type="button" onClick={() => onDelete(objectID)}>X</button>
  </li>
);

class NotesList extends React.Component {

  state = {
    noteName: ''
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleNoteNameChange = (e) => {
    const { value } = e.target;
    this.setState({noteName: value});
  }

  handleAdd = () => {
    const { noteName } = this.state;
    this.props.addNote(noteName);
    this.setState({noteName: ''});
  }

  handleDelete = (id) => {
    this.props.deleteNote(id);
  }

  render() {
    console.log(this.props);
    const { noteName } = this.state;
    const  { notes } = this.props;
    return (
      <div>
        <h2>Note List</h2>
        <div>
          <label>
            Note name:
            <input type="text"  value={noteName} onChange={this.handleNoteNameChange} placeholder="Enter note name"/>
          </label>
          <button type="button" onClick={this.handleAdd}>Add Note</button>
        </div>
        <div>
          <ul>
            {
              notes.map(({objectID, title}) => <NoteItem objectID={objectID} title={title} key={objectID} onDelete={this.handleDelete}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: getNotesBySelectedTags(state)
});

// const mapDispatchToProps = dispatch => ({
//   addNote: (text) => dispatch(addNote(text)),
//   deleteNote: (id) => dispatch(deleteNote(id))
// });

export default connect(
  mapStateToProps,
  { addNote, deleteNote, fetchNotes } /* mapDispatchToProps */
)(NotesList);
