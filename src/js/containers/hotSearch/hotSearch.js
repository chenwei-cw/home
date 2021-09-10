import React, { Component } from 'react';
import { connect } from 'react-redux';
import './hotSearch.less'
import { Tabs, Button, List } from 'antd-mobile'

function mapStateToProps(state) {
    return {

    };
}

class hotSearch extends Component {
    state = {
        tabs: [
            { title: '百度热搜', sub: '1' },
            { title: '微博热搜', sub: '2' },
            { title: '微博要闻', sub: '3' },
        ],
        wbHot: [],
        wbSocialevent: [],
        bdHot:[]
    }
    componentDidMount() {
        this.handleTabsClick({ sub: "1" })
    }
    async getWeiBoData(type) {
        let res = await this.getData('//192.168.31.245:3000/weibo?cate=' + type);
        if (res.code === 0) {
            this.setState({ wbHot: res.data })
        }
    }
    async handleTabsClick(tab) {
        let res, type;
        switch (tab.sub) {
            case "1":
                res = await this.getData('//192.168.31.245:3000/baidu');
                type = "bdHot";
                break;
            case "2":
                res = await this.getData('//192.168.31.245:3000/weibo?cate=realtimehot');
                type = "wbHot";
                break;
            case "3":
                res = await this.getData('//192.168.31.245:3000/weibo?cate=socialevent');
                type = "wbSocialevent";
                break;
        }

        if (res.code === 0) {
            this.state[type] = res.data;
            this.setState({ ...this.state })
        } else {
            console.log('err')
        }
    }
    getData(url) {
        return fetch(url).then(res => {
            return res.json();
        }).then(myJson => {
            return myJson;
        })
    }
    render() {
        let { wbHot, wbSocialevent,bdHot } = this.state;
        return (
            <div className='hotSearch'>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    onTabClick={this.handleTabsClick.bind(this)}
                    onChange={this.handleTabsClick.bind(this)}
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    <div className='tabsBody'>
                        <List className="my-list">
                            {bdHot.map(hotData => {
                                return <List.Item key={hotData.keyword} arrow="horizontal" onClick={() => { location.href = hotData.url }}>
                                    {/* <span className='num'>{hotData.num || "🔝"}</span> */}
                                    <span className='keyword'>{hotData.keyword}</span>
                                    {/* <span className='hotNum'>{hotData.hotNum}</span> */}
                                </List.Item>
                            })}
                        </List>
                    </div>
                    <div className='tabsBody'>
                        <List className="my-list">
                            {wbHot.map(hotData => {
                                return <List.Item key={hotData.keyword} arrow="horizontal" onClick={() => { location.href = hotData.url }}>
                                    <span className='num'>{hotData.num || "🔝"}</span>
                                    <span className='keyword'>{hotData.keyword}</span>
                                    <span className='hotNum'>{hotData.hotNum}</span>
                                </List.Item>
                            })}
                        </List>
                    </div>
                    <div className='tabsBody'>
                        <List className="my-list">
                            {wbSocialevent.map(hotData => {
                                return <List.Item key={hotData.keyword} arrow="horizontal" onClick={() => { location.href = hotData.url }}>
                                    {/* <span className='num'>{hotData.num || "🔝"}</span> */}
                                    <span className='keyword'>{hotData.keyword}</span>
                                    <span className='hotNum'>{hotData.hotNum}</span>
                                </List.Item>
                            })}
                        </List>
                    </div>
                </Tabs>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(hotSearch);