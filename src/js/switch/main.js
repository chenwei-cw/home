import React, { Component } from 'react';
import GameItem from '../components/gameItem/gameItem'
import data from '../data/switch'
import './main.less'

const gameArr = data.gameArr;

class main extends Component {
    render() {
        return (
            <div className="main">
                <ul className="gameUl">
                    {gameArr.map((g,i)=>{
                        return <li key={i} className="gameLi"><GameItem data={g} /></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default main;