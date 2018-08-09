import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import {getIssuesData} from '../../reducers/reducers'
import CellView from '../../components/cellview/CellView'
import Logo from '../../components/logo/Logo'
class All extends Component{
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
        console.log(this.props.issuesData);
        return(
            <Fragment>
                <Logo />
                <div className='list'>
                    <CellView 
                        title = '全部'
                        items = {this.props.issuesData? this.props.issuesData : []} /> 
                </div>
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

export default connect(getData,getDispatch)(All) 