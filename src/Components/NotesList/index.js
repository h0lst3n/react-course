import { connect } from 'react-redux';

import NotesList from './NotesList.jsx';

import { addNote, deleteNote } from '../../store/actions/notes.actions';

/* Simpler version

const addNote = text => ({
  type: 'ADD_NOTE',
  payload: {
    id: Date.now(),
    text
  }
});

const mapDispatchToProps = { addNote };

*/

const mapStateToProps = (state /*, ownProps*/) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch /*, ownProps*/ ) => ({
  actions: {
    addNote: text => dispatch(addNote(text)),
    deleteNote: id => dispatch(deleteNote(id))
  }
});

export default connect(/*<Function|null>*/mapStateToProps, /*<Function|null>*/mapDispatchToProps)(NotesList);
