import React, { Component } from 'react'
import NewsBody from './NewsBody';
import Spinner from './spinner';
import Slider from './slider';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        {(this.props.stat.loading==false)?
          <NewsBody result={this.props.stat.art}></NewsBody>:<Spinner></Spinner>  
        }
        {(this.props.stat.loading==false)?<Slider count={this.props.stat.count} setCount={this.props.setCount} total={this.props.stat.total}></Slider>:""}
      </div>
    )
  }
}
