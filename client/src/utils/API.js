import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
  getNewArticles: function(query) {
    return axios.get(BASEURL, {
      params: {
        "q": query.topic,
        "begin_date": query.startYear,
        "end_date": query.endYear,
        "api-key": process.env.REACT_APP_NYT_API_KEY,
        "sort": "newest"
      }
    });
  },
  // Gets all articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
