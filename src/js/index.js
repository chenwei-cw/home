import React,{Fragment} from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Route from './route/route'
import entrepot from './reducers/reducers'
import '../common/comment.less'

const store = createStore(entrepot);

ReactDom.render(
    <Provider store={store}>
        <Route/>
    </Provider>,
    document.getElementById('app')
)