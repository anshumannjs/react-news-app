import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';

export default class NewsBody extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, count: 1, loading: true, func: "headline" };

    this.setCount = this.setCount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.headline = this.headline.bind(this);
    this.pus = this.pus.bind(this);
  }
  con = [];
  pus(artic) {
    let el = artic.map((elems) => {
      return <NewsItem key={elems.url} res={elems}></NewsItem>
    })
    this.con.push(el);
  }
  async componentDidMount() {
    document.addEventListener("scroll", this.scrol);
    let artic = await this.headline();
    this.con.length = 0;
    this.pus(artic);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      let artic = await this.headline();
      if (artic != undefined) {
        this.pus(artic);
      }
    }
    if (prevProps.category != this.props.category) {
      this.con.length = 0;
      let artic = await this.headline();
      if (artic != undefined) {
        this.pus(artic);
      }
    }
    if (prevProps.query != this.props.query) {
      this.con.length = 0;
      let artic = await this.apiCall();
      if (artic != undefined) {
        this.pus(artic);
      }
    }
  }
  async headline() {
    this.setState({ func: "headline" });
    let date = new Date();
    this.setState({ loading: true });
    let apiKey = '68bee47762d040e294b0b15264fabbdc';
    let api = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&page=${this.state.count}&pageSize=8&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
    let result = await fetch(api);
    let parsed = await result.json();
    this.setState({ total: parsed.totalResults });
    this.setState({ art: parsed.articles });
    this.setState({ loading: false });
    return parsed.articles;
  }
  setCount(a) {
    this.setState({ count: a });
  }
  async apiCall() {
    this.setState({ func: "apiCall" });
    let date = new Date();
    this.setState({ loading: true });
    let api = `https://newsapi.org/v2/everything?q=${this.props.query}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&page=${this.state.count}&pageSize=8&language=en&sortBy=publishedAt&apiKey=68bee47762d040e294b0b15264fabbdc`;
    let result = await fetch(api);
    let parsed = await result.json();
    this.setState({ total: parsed.totalResults });
    this.setState({ art: parsed.articles });
    this.setState({ loading: false });
    return parsed.articles;
  }
  scrol = (e) => {
    let a = document.body.scrollHeight;
    let b = window.scrollY + window.innerHeight;
    if (b + 20 >= a) {
      if (this.state.count + 1 <= this.state.total / 8) {
        this.setCount(this.state.count + 1);
      }
    }
  }
  render() {
    return (
      <div className='mt-14'>
        {
          this.state.art == null ? "" :
            <div id='pop' className={`grid grid-cols-2 gap-4 mt-4 ml-4 mr-4`}>
              {
                this.con
              }
            </div>
        }
        {this.state.loading ? <Spinner></Spinner> : ""}
      </div>
    )
  }
}
