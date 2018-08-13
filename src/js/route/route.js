import React,{Fragment} from 'react'
import { HashRouter, Route} from "react-router-dom";
import {Main} from '../containers/index'
// import asyncComponent from './asyncComponent'

// const All = asyncComponent('../containers/all/all.js');
// const Article = asyncComponent('../containers/article/article.js');

var All = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('../containers/all/all.js').default);
    }, 'all');
  };

function routes(){
    return (
        <HashRouter>
            <Fragment>
                <Route exact path="/" component={Main} />
                <Route path="/all" component={All} />
                <Route path="/article" component={Article} />
                <Route path="/archive" component={Main} />
                <Route path="/tags" component={Main} />
            </Fragment>
        </HashRouter>
    )
}

export default routes