import React,{Fragment,Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../containers/main/main'
import asyncComponent from './asyncComponent'

const All = asyncComponent(() => import(/* webpackChunkName: "all" */"../../js/containers/all/all"));
const Article = asyncComponent(() => import(/* webpackChunkName: "article" */"../../js/containers/article/article"));
const switchMain = asyncComponent(() => import(/* webpackChunkName: "all" */"../../js/switch/main.js"));
const HotSearch = asyncComponent(() => import(/* webpackChunkName: "article" */"../../js/containers/hotSearch/hotSearch"));

function routes(){
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={switchMain} />
                {/* <Route path="/all" component={All} /> 
                <Route path="/article" component={Article} />
                <Route path="/archive" component={Main} />
                <Route path="/tags" component={Main} /> */}
                <Route path="/hotSearch" component={HotSearch} />
            </Fragment>
        </Router>
    )
}

  

export default routes