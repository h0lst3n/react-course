import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/notes.actions';

class NotesList extends React.Component {

  renderNotes(notes) {
    return (
      notes.length
        ? notes.map((note, index) => <li key={index}>{note}</li>)
        : <li>No notes</li>
    )
  }

  render() {
    const { notes } = this.props;
    const notesList = this.renderNotes(notes);
    return(
      <div>
        <button onClick={() => {this.props.addNote('New Note')}}>Add note</button>
        <ul>
          {notesList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch /*, ownProps*/ ) => ({
  addNote: text => dispatch(addNote(text))
})

export default connect(/*<Function|null>*/mapStateToProps, mapDispatchToProps)(NotesList);
