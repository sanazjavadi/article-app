/* eslint-disable import/no-anonymous-default-export */
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  SET_PAGE,
  // APPLY_TAG_FILTER,
  // HOME_PAGE_LOADED,
  // HOME_PAGE_UNLOADED,
  // CHANGE_TAB,
  // PROFILE_PAGE_LOADED,
  // PROFILE_PAGE_UNLOADED,
  // PROFILE_FAVORITES_PAGE_LOADED,
  // PROFILE_FAVORITES_PAGE_UNLOADED,
} from "../constans/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_FAVORITED:
    case ARTICLE_UNFAVORITED:
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.slug === action.payload.article.slug)
            return {
              ...article,
              favorited: action.payload.article.favorited,
              favoritesCount: action.payload.article.favoritesCount,
            };
          return article;
        }),
      };

    case SET_PAGE:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage: action.page,
      };
    default:
      return state;
  }
};
