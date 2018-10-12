import axios from "axios";

// const BASEURL = (process.env.NODE_ENV === "development") 
// 	? "https://cors-anywhere.herokuapp.com/api.nytimes.com/svc/search/v2/articlesearch.json"
// 	: "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const BASEURL = "https://cors-anywhere.herokuapp.com/api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
  getNewArticles: (query) => {
    return axios.get(BASEURL, {
      params: {
        "q": query.topic,
        "begin_date": query.startYear,
        "end_date": query.endYear,
        "api-key": process.env.REACT_APP_NYT_API_KEY,
        "sort": "newest"
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  },
  // Gets all articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: (id) => {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: (id) => {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  }
};
