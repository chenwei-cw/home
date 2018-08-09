import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import {getIssuesData} from '../../reducers/reducers'
import Article from '../../components/article.js/article.js'
import Logo from '../../components/logo/Logo'
import './article.less'

class ArticleCon extends Component{
    constructor(){
        super()
        this.state = {
            title:'',
            created_at:'',
            body:""
        }
        this.variate = {

        }
    }
    componentDidMount(){
        let number = this.props.location.query.number,
            length = this.props.issuesData.length,
            articleData = this.props.issuesData[length - number];
        this.variate = {
            number,
            articleData,
            issuesData:this.props.issuesData
        }
        this.setState({
            title:articleData.title,
            created_at:articleData.created_at,
            body:articleData.body
        })
    }
    
    render(){
        return(
            <Fragment>
                <Logo />
                <Article {...this.state}/>
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

export default connect(getData,getDispatch)(ArticleCon) 