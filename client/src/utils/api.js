import axios from "axios";
import Axios from "axios";
const apiKey = "AIzaSyCt1rfcVmMgd_zKGCFIs6YZ9iny9cIfV-Y"

export default {

    getBooks: function (books) {
        return Axios.get(`https://www.googleapis.com/books/v1/search?q=harrypotter&key=${apiKey}`)
    },

    saveBook: function(postData) {
        axios.post('api/books', postData);
    },
    
    getDbBooks: function () {
        axios.get("api/book")
    }
    
}