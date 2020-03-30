import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactLoadable from "react-loadable";
import { RouterWrap } from "./Router.styles";

const LoadingIndicator = () => {
  return <></>;
};

const Loadable = options =>
  ReactLoadable({
    loading: LoadingIndicator,
    delay: 300,
    ...options
  });

/** Reporting */
const Reporting = Loadable({
  loader: () => import("containers/reporting/Reporting")
});

/** Not Found */
const NotFound = Loadable({
  loader: () => import("components/notFound")
});

const Router = () => {
  return (
    <RouterWrap>
      <Switch>
        <Route path="/reporting" component={Reporting} />
        <Route component={NotFound} />
      </Switch>
    </RouterWrap>
  );
};

export default Router;
