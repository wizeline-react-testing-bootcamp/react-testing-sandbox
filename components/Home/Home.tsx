import React, { PureComponent, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MiddleContent from "../MiddleContent";
import { globalActions, contentActions } from "../../actions";
import { HomeWrapper, Content } from "./Home.styles";

const SECTION_COUNT = 3;
const SECTION_MARGIN = 2;
const SECTION_WIDTH = 100 / SECTION_COUNT - SECTION_MARGIN;

const Home = ({
  fnSetPageParams,
  fnSetRouterPath,
  fnFetchSubredditList,
  pageParams,
}) => {
  const router = useRouter();

  useEffect(() => {
    // router.events.on("routeChangeStart", this.routeChangeStart);
    // router.events.on("routeChangeComplete", this.routeChangeComplete);

    fnSetPageParams({
      ...pageParams,
    });
    fnSetRouterPath({
      currentPath: pageParams.url || "/",
    });

    return () => {
      // router.events.off("routeChangeStart", this.routeChangeStart);
      // router.events.off("routeChangeComplete", this.routeChangeComplete);
    };
  }, []);

  const routeChangeStart = useCallback(() => {
    fnSetPageParams();
    if (pageParams.url) {
      fnSetRouterPath({
        prevPath: pageParams.url,
      });
    }
  }, [pageParams]);

  const routeChangeComplete = useCallback(
    (url) => {
      fnSetPageParams({
        ...pageParams,
        ...router.query,
      });
      fnSetRouterPath({
        currentPath: pageParams.url || "/",
      });
    },
    [pageParams]
  );

  return (
    <HomeWrapper>
      <Header />
      <Content>
        <Sidebar />
        <MiddleContent />
      </Content>
    </HomeWrapper>
  );
};

const mapStateProps = (state) => ({
  global: state.global,
});

const mapDispatchToProps = (dispatch) => ({
  fnSetPageParams: (params) => dispatch(globalActions.setPageParams(params)),
  fnSetRouterPath: (params) => dispatch(globalActions.setRouterPath(params)),
  fnFetchSubredditList: () => dispatch(contentActions.fetchSubRedditList()),
});

export default connect(mapStateProps, mapDispatchToProps)(Home);
