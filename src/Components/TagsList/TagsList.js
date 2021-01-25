import React from 'react';
import { connect } from 'react-redux';

import { getAllTags, getSelectedTags } from '../../store/selectors/articles.selectors';
import { selectTag, unselectTag } from '../../store/actions/articles.actions';


const TagsList = ({ tags, selectedTags , selectTag, unselectTag }) => (
  <div>
    <div>
      <h2>Select tags:</h2>
      <ul>
      {
        tags.map(tag => <li key={tag} onClick={() => selectTag(tag)}>{tag}</li>)
      }
      </ul>
    </div>
    <div>
      <h2>Selected tags:</h2>
      <ul>
      {
        selectedTags.map(tag => <li key={tag} onClick={() => unselectTag(tag)}>{tag}</li>)
      }
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  tags: getAllTags(state),
  selectedTags: getSelectedTags(state)
});

export default connect(mapStateToProps, { selectTag, unselectTag })(TagsList);
