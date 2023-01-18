import React, { Component } from 'react'

export default class Slider extends Component {
  constructor(props){
    super(props);
    this.back1=this.back1.bind(this);
    this.back5=this.back5.bind(this);
    this.forward1=this.forward1.bind(this);
    this.forward5=this.forward5.bind(this);
  }
  back1(){
    let a=this.props.count;
    if (a-1>=1){
        this.props.setCount(a-1);
    }
  }
  back5(){
    if (this.props.count-5>=1){
        this.props.setCount(this.props.count-5);
    }
  }

  forward1(){
    if (this.props.count+1<=this.props.total/6){
        this.props.setCount(this.props.count+1);
    }
  }
  forward5(){
    if (this.props.count+5<=this.props.total/6){
        this.props.setCount(this.props.count+5);
    }
  }
  render() {
    return (
      <div className='flex flex-col space-y-4'>
        <div className='font-serif m-auto'>
            {`page ${this.props.count} of results ${this.props.total/6}`}
        </div>
        <div className='flex m-auto space-x-96'>
            <div className='flex space-x-40'>
                <div onClick={this.back5} className='border border-black h-4 w-4'>

                </div>
                <div onClick={this.back1} className='border border-black h-4 w-4'>

                </div>
            </div>
            <div className='flex space-x-40'>
                <div onClick={this.forward1} className='border border-black h-4 w-4'>

                </div>
                <div onClick={this.forward5} className='border border-black h-4 w-4'>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
