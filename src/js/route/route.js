import React,{Fragment} from 'react'
import { HashRouter, Route} from "react-router-dom";
import {Main,All} from '../containers/index'

function routes(){
    return (
        <HashRouter>
            <Fragment>
                <Route exact path="/" component={Main} />
                <Route path="/all" component={All} />
                <Route path="/archive" component={Main} />
                <Route path="/tags" component={Main} />
            </Fragment>
        </HashRouter>
    )
}

export default routes