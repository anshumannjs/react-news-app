import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
  }
  resizeDesc(str) {
    if (str == null) {

    }
    else if (str.length > 100) {
      return str.slice(0, 99) + ".....";
    }
    else {
      return str;
    }
  }
  resizeTitl(str) {
    if (str.length > 70) {
      return str.slice(0, 69) + ".....";
    }
    else {
      return str;
    }
  }
  click = (e) => {
    window.open(this.props.res.url, '_blank')
  }
  render() {
    return (
      <div onClick={this.click} className={`cursor-pointer flex border border-black`}>
        <div className={``}>
          <img className={`h-36 w-64`} src={`${this.props.res.urlToImage}`} alt="foo" />

        </div>
        <div className={`flex flex-col w-[350px] h-36`}>
          <div className='font-bold ml-2'>
            {this.resizeTitl(this.props.res.title)}
          </div>
          <div className=' m-2'>
            {this.resizeDesc(this.props.res.description)}
            {/* { this.resize("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, similique quod consequatur labore ullam officia explicabo facilis mollitia? Nesciunt eius iusto magnam inventore quis blanditiis rem ea. Laudantium, magni consequatur?")} */}
          </div>
        </div>
      </div>
    )
  }
}
