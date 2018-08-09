import req from './base'
import {config} from './config'

//issues 的链接
let issuesUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/issues`;
//导出
export const issuesData = (param)=>{
    return req.get(issuesUrl,param)
}