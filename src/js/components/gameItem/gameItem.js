import React, { Component } from 'react';
import './gameItem.less'

class gameItem extends Component {
    render() {
        return (
            <div className="gameItem">
                <img className="bookImg" src={this.props.data.coverImg} />
                <p className="gameTitle">{this.props.data.title}</p>
            </div>
        );
    }
}

export default gameItem;