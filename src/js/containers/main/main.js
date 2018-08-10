import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import {getIssuesData} from '../../reducers/reducers'
import Menu from '../../components/menu/Menu'
import Logo from '../../components/logo/Logo'

class Main extends Component{
    constructor(){
        super()
        this.state = {

        }
        this.variate = {

        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <Fragment>
                <Logo />
                <Menu />
            </Fragment>
        )
    }
}

const getData = (state) =>{
    return {
        issuesData:state.issuesData
    }
}
const getDispatch = (dispatch) =>{
    return {
        getIssuesData:(mess)=>{
            dispatch(getIssuesData(mess))
        }
    }
}

export default connect(getData,getDispatch)(Main) 