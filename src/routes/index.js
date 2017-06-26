import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { App, PageNotFound } from '../pages';

const Home = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/home').default);
    }, 'home');
};
const Music = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/music').default);
    }, 'home');
};
const Group = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/group').default);
    }, 'home');
};
const Mine = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/mine').default);
    }, 'home');
};

export default <Route path="/" component={App}>
  <IndexRedirect to="/home" />
  <Route path="home" getComponent={Home} />
  <Route path="music" getComponent={Music} />
  <Route path="group" getComponent={Group} />
  <Route path="mine" getComponent={Mine} />
  <Route path="*" component={PageNotFound} />
</Route>