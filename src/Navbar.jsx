import React, { Component } from 'react'
import { Link, Navigate, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super();
    this.state = { nav: null };
  }
  change = (e) => {
    this.setState({ nav: e.target.value })
  }
  click = () => {
    this.props.search(document.getElementById("input").value);
  }
  render() {
    return (
      <div className={`flex bg-orange-200 space-x-10 h-14 fixed w-[100%]`}>
        <div className={`font-bold text-lg mt-auto mb-auto`}>NewsNjs</div>
        <Link className={`font-serif mt-auto mb-auto`} to={'/'}>
          <div >Home</div>
        </Link>
        <Link className={`font-serif mt-auto mb-auto`} to={'/science'}>
          <div >Science</div>
        </Link>
        <Link className={`font-serif mt-auto mb-auto`} to="/technology">
          <div >Tech</div>
        </Link>
        <Link className={`font-serif mt-auto mb-auto`} to="/entertainment">
          <div >Entertainment</div>
        </Link>
        <Link className={`font-serif mt-auto mb-auto`} to={"/business"}>
          <div >Business</div>
        </Link>
        <Link className={`font-serif mt-auto mb-auto`} to={"/sports"}>
          <div >Sports</div>
        </Link>
        <Link className={`font-serif mt-auto mb-auto`} to={"/health"}>
          <div >Health</div>
        </Link>
        <div className={`flex`}>
          <input id='input' type="text" onChange={this.change} className={`h-6 mb-auto mt-auto rounded ml-56`} />
          <Link to={`/q=${this.state.nav}`} className={`border-2 border-orange-500 h-6 mb-auto mt-auto rounded text-sm text-center ml-2`}>
            <button onClick={this.click} >Search</button>
          </Link>
        </div>
      </div>
    )
  }
}
