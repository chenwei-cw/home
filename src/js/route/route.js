import React,{Fragment,Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../containers/main/main'
import asyncComponent from './asyncComponent'

const All = asyncComponent(() => import(/* webpackChunkName: "all" */"../../js/containers/all/all"));
const Article = asyncComponent(() => import(/* webpackChunkName: "article" */"../../js/containers/article/article"));

function routes(){
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={Main} />
                <Route path="/all" component={All} /> 
                <Route path="/article" component={Article} />
                <Route path="/archive" component={Main} />
                <Route path="/tags" component={Main} />
            </Fragment>
        </Router>
    )
}

  

export default routes