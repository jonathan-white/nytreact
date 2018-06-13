import axios from "axios";
const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "64a9589234bd478597232c57877f7396";

export default {
  getArticles: function(query) {
    return axios.get(BASEURL, {
    	params: {
    		"q": query.topic,
    		"begin_date": query.startYear,
    		"end_date": query.endYear,
    		"api-key": APIKEY,
    		"sort": "newest"
    	}
    });
  }
};
