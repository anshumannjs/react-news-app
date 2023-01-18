import React, { Component } from 'react'
import NewsBody from './NewsBody';
import Spinner from './spinner';
import Slider from './slider';

export default class Base extends Component {
    constructor(props){
        super(props);
    }
  render() {
    console.log(this.props);
    return (
      <div>
        {/* {(this.props.loading==false)?
          <NewsBody result={this.props.art}></NewsBody>:<Spinner></Spinner>
        }
        {(this.props.loading==false)?<Slider count={this.props.count} setCount={this.props.setCount} total={this.props.total}></Slider>:""} */}
      </div>
    )
  }
}
