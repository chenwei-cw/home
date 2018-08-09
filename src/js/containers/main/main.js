import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import {getIssuesData} from '../../reducers/reducers'
import {issuesData} from '../../ajax'
import Menu from '../../components/menu/Menu'

class Main extends Component{
    constructor(){
        super()
        this.state = {

        }
        this.variate = {

        }
    }
    componentDidMount(){
        //获取issues的数据
        issuesData().then((result)=>{
            this.props.getIssuesData(result.data);
            console.log('issuesData',this.props.issuesData);
        })
        
    }
    render(){
        return(
            <Fragment>
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