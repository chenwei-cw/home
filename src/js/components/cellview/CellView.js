import React, { Component } from 'react';
import Cell from './Cell.js';
import './cellView.less'

export default class CellView extends Component {
  render() {
    return (
      <div>
        <h2 className="category">{this.props.title}</h2>
        <ul>
          {
            this.props.items.map((item, index) => 
              <Cell {...item} index={index} key={index} />
            )
          }
        </ul>
      </div>
    );
  }
};