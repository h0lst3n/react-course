import React from 'react';
import { connect } from 'react-redux';

import { getAllTags, getSelectedTags } from '../../store/selectors/notes.selectors';

import { selectTag, unselectTag } from '../../store/actions/notes.actions';

const TagsList = ({
  tags,
  selectedTags,
  selectTag,
  unselectTag
}) => (
  <>
    <div>
      {
        tags.map(
          tag => <><strong key={tag} onClick={() => selectTag(tag)}>&nbsp;{tag}</strong><br/></>
        )
      }
    </div>
    <div>
      <h2>Selected tags:</h2>
      <div>
        {
          selectedTags.map(
            tag => <><strong key={tag} onClick={() => unselectTag(tag)}>&nbsp;{tag}</strong></>
          )
        }
      </div>
    </div>
  </>
);

const mapStateToProps = state => ({
  tags: getAllTags(state),
  selectedTags: getSelectedTags(state)
});

export default connect(mapStateToProps, { selectTag, unselectTag })(TagsList);
