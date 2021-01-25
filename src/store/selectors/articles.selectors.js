import { createSelector }  from 'reselect';

export const getAllArticles = state => state.articles.items;

export const getAllTags = state => state.articles.tags;

export const getSelectedTags = state => state.articles.selectedTags;

const getSearchKeyword = state => state.articles.searchKeyword;

// export const getArticlesBySelectedTags = state => {
//   const articles = getAllArticles(state);
//   const selectedTags = getSelectedTags(state);
//
//   return articles.filter(
//     article => selectedTags.some(
//       tag => article['_tags'].includes(tag)
//     )
//   );
// };
//

export const searchArticleByTitle = createSelector(
  [getSearchKeyword, getAllArticles],
  (keyword, articles) => articles.find(article => article.title.toLowerCase().indexOf(keyword) > -1)
)

export const getArticlesBySelectedTags = createSelector(
  [getAllArticles, getSelectedTags],
  (articles, selectedTags) => articles.filter(
      article => selectedTags.some(
        tag => article['_tags'].includes(tag)
      )
    )
);
