import React from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote } from '../../store/actions/notes.actions';

const NoteItem = ({id, text, onDelete}) => (
  <li>
    <strong>{text}</strong>
    <button type="button" onClick={() => onDelete(id)}>X</button>
  </li>
);

class NotesList extends React.Component {

  state = {
    noteName: ''
  };

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
              notes.map(({id, text}) => <NoteItem id={id} text={text} key={id} onDelete={this.handleDelete}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

// const mapDispatchToProps = dispatch => ({
//   addNote: (text) => dispatch(addNote(text)),
//   deleteNote: (id) => dispatch(deleteNote(id))
// });

export default connect(
  mapStateToProps,
  { addNote, deleteNote } /* mapDispatchToProps */
)(NotesList);
