import React from 'react';
import { connect } from 'react-redux';

import { addNote, deleteNote } from '../../store/actions/notes.actions';

const NoteItem = ({text, id, onDelete}) => (
  <li>
    <strong>{text}</strong>
    <button type="button" onClick={() => onDelete(id)}>X</button>
  </li>
);

class NotesList extends React.Component {

  state = {
    text: ''
  };

  handleDelete = (id) => {
    this.props.deleteNote(id);
  };

  handleTextChange = (e) => {
    const { value: text  } = e.target;
    this.setState({text});
  };

  hadleAddNote = () => {
    const { text } = this.state;
    this.props.addNote(text);
    this.setState({text: ''});
  };

  render() {
    const { text } = this.state;
    const { notes } = this.props;
    return (
      <div>
        <h2>Notes List</h2>
        <div>
          <strong>Add note:</strong>
          <input type="text" placeholder="Enter note text" value={text} onChange={this.handleTextChange}/>
          <button type="button" onClick={this.hadleAddNote}>Add note</button>
        </div>
        <div>
          <ul>
            {
              notes.length > 0
                ? notes.map(note => <NoteItem {...note} key={note.id} onDelete={this.handleDelete}/>)
                : <li>There are no notes</li>
            }
          </ul>
        </div>
      </div>
    );
  };
  
};

const mapStateToProps = state => ({
  notes: state.notes
});

// const mapDispatchToProps = dispatch => ({
//   addNote: (text) => dispatch(addNote(text)),
//   deleteNote: (id) => dispatch(deleteNote(id))
// });

export default connect(mapStateToProps, { addNote, deleteNote })(NotesList);
