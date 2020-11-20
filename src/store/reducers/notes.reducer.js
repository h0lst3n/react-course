import {
  ADD_NOTE,
  DELETE_NOTE,
  NOTES_FETCH_SUCCES,
  SELECT_TAG,
  UNSELECT_TAG
} from '../actions/notes.actions';

const initialState = {
  items: [],
  tags: [],
  selectedTags: []
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_FETCH_SUCCES:
    const { data } = action.payload;
    const tags = data.reduce((res, item) => {
      return [...res, ...item['_tags']];
    }, [])
    .reduce((res, elem) => {
      if (res.indexOf(elem) < 0) {
        res.push(elem);
      }
      return res
    }, []);
      return {
        ...state,
        items: data,
        tags
      };
    case SELECT_TAG:
      const { tag } = action.payload;
      const newTags = state.tags.filter(tagItem => tagItem !== tag);
      return {
        ...state,
        tags: newTags,
        selectedTags: [...state.selectedTags, tag]
      };
    case UNSELECT_TAG:
      const selectedTag = action.payload.tag;
      const selectedTags = state.selectedTags.filter(tagItem => tagItem !== selectedTag);
      return {
        ...state,
        tags: [...state.tags, selectedTag],
        selectedTags
      };
    case ADD_NOTE:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_NOTE:
      return state.filter(({objectID: id}) => id !== action.payload.objectID);
    default:
      return state;
  }
};

export default notesReducer;
