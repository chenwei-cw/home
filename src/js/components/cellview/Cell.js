import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Cell extends Component {
  render() {
    return (
      <li className="list-post">
        <Link to={{pathname:`/article`,search:`${this.props.number}`}}>
          <span className="date-long">{this.props.created_at.substr(0, 10)}</span>
          <span className='title'>{this.props.title}</span>
        </Link>
      </li>
    );
  }
};