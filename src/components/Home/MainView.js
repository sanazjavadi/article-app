import React from "react";
import ArticleList from "../ArticleList";
import api from "../../api";
import { connect } from "react-redux";
import { CHANGE_TAB } from "../../constans/actionTypes";

const YourFeedTab = ({ token, onTabClick, tab }) => {
  if (token) {
    const clickHandler = (ev) => {
      ev.preventDefault();
      onTabClick("feed", api.Articles.feed, api.Articles.feed());
    };
    return (
      <li className="nav-item">
        <a
          href=""
          className={tab === "feed" ? "nav-link active" : "nav-link"}
          onClick={clickHandler}
        >
          your Feed
        </a>
      </li>
    );
  }

  return null;
};

const GlobalFeedTab = (props) => {
  const clickHandler = (ev) => {
    ev.preventDefault();
    props.onTabClick("all", api.Articles.all, api.Articles.all());
  };

  return (
    <li>
      <a
        href=""
        className={props.tab === "all" ? "nav-lin active" : "nav-link"}
        onClick={clickHandler}
      ></a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
});
const mapDispatchToProps = (dispatch) => ({
  onTabClick: (tab, pager, payload) =>
    dispatch({ type: CHANGE_TAB, tab, pager, payload }),
});

const MainView = ({
  pager,
  articles,
  loading,
  articlesCount,
  currentPage,
  token,
  tab,
  onTabClick,
}) => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab token={token} tab={tab} onTabClick={onTabClick} />
        </ul>
      </div>
      <ArticleList
        pager={pager}
        articles={articles}
        loading={loading}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
