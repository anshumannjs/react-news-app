import React, { Component } from 'react'
import Base from './Base';

export default class Base1 extends Component {
    constructor(props){
        super(props);
        console.log(props.headline)
        this.state={art:this.props.stat(this.props.headline).art,total:props.stat(this.props.headline).total,loading:props.stat(this.props.headline).loading}
        
    }
  render() {
    // this.setState({art:this.props.stat(this.props.headline).art,total:props.stat(this.props.headline).total,loading:props.stat(this.props.headline).loading})
    return (
      <div>
        <Base count={this.props.count} setCount={this.props.setCount} art={this.state.art} loading={this.state.loading} total={this.state.total}></Base>
      </div>
    )
  }
}
