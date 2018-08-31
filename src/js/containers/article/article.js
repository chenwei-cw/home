import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import {getIssuesData} from '../../reducers/reducers'
import {issuesData} from '../../ajax'
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
        this.init();
    }
    init(){
        //没本地数据就请求服务器
        this.props.issuesData? this.view() : this.serverData();
    }

    serverData(){
        //获取issues的数据
        issuesData().then((result)=>{
            this.props.getIssuesData(result.data);
            console.log(result.data)
            this.view();
        })
    }
    view(){
        let number = parseInt(this.props.location.search.split('?')[1]),
            articleData = this.props.issuesData[number];
        this.variate = {
            number,
            articleData,
            issuesData:this.props.issuesData
        };
        this.setState({
            number:articleData.number,
            title:articleData.title,
            created_at:articleData.created_at,
            body:articleData.body
        });
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