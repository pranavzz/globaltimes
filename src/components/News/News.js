import React, { Component } from "react";
import Newsitem from "../Newsitem/Newsitem";

export class News extends Component {
  articles = [];
  constructor() {
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
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=347f9d964dbf466b895c8b0329c7f8ba&page=1&pagesize=6";
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
  }

  // handles previous button
  // will change the state and will increment
  handleprevbtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=347f9d964dbf466b895c8b0329c7f8ba&page=${
      this.state.page - 1
    }&pagesize=6`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
    });
  };
  handlenextbtn = async () => {
    // this are backticks
    if (this.state.page +1> Math.ceil(this.state.totalResults / 6)) {

    }
    
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=347f9d964dbf466b895c8b0329c7f8ba&page=${this.state.page + 1}&pagesize=6`;
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
      });
    }
  };
  render() {
    return (
      <div className="container mx-auto px-10 py-10">
        <div className="container my-5">
          <div className="head">
            <b>Global times - Top headlines</b>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {this.state.articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                  ></Newsitem>
                </div>
              );
            })}
          </div>
        </div>

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
