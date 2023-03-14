import React, { Component } from "react";
import Newsitem from "../Newsitem/Newsitem";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    name:'in',
    pageSize:3,
    category:'general'
  }
  static propTypes={
    country : PropTypes.string,
    pageSize :PropTypes.number,
    // here we set validation for props going
  }

  articles = [];
  constructor() {

    //super denotes that this constructor is of super class
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=347f9d964dbf466b895c8b0329c7f8ba&page=1&pagesize=${this.props.pageSize}`;
    
      this.setState({loading:true});
      let data = await fetch(url);
    // fetch api used to reach the endpoints

    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    });
  }

  // handles previous button
  // will change the state and will increment
  handleprevbtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=347f9d964dbf466b895c8b0329c7f8ba&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false
    });
  };
  handlenextbtn = async () => {
    // this are backticks
    if (this.state.page +1> Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=347f9d964dbf466b895c8b0329c7f8ba&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container mx-auto px-10 py-10">
        <div className="container my-5">
          <div className="flex justify-center items-center" id="head">
            <b>Global times - Top headlines</b>
          </div>
          <br/>
          {this.state.loading && <Spinner></Spinner>}
          <div className="grid grid-cols-3 gap-1">
            {this.state.articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    publishdate={element.publishedAt}
                    author={element.author ? element.author : "unknown author"}
                    src = {element.source.name}
                  ></Newsitem>
                </div>
              );
            })}
          </div>
        </div>
        {this.state.loading && <Spinner></Spinner>}
        <br />
        <div className="flex justify-center items-center">
          <div className="inline-flex">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={this.handleprevbtn}
            >
              &larr; Prev
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={this.handlenextbtn}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
