import React, { useState, useEffect } from "react";
import api from "../utils/api";
import axios from 'axios'
import { set } from "mongoose";
const key = "AIzaSyCt1rfcVmMgd_zKGCFIs6YZ9iny9cIfV-Y"


function Search() {

    const [books, setBooks] = useState("");
    const [search, setSearch] = useState("")


    const getBooks = () => {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`)
            .then(result => {
                setBooks(result.data.items)
            })
    }


    console.log(books);



    return (
        <div className="container">
            <div class="row">
                <div class="searchInput col-12">
                    <label className="search"> Search</label>
                    <input className="searchBar" type="text" value={search} onChange={(event) => {
                        setSearch(event.target.value)
                        getBooks()
                    }} />
                </div>
            </div>
            <div className="searchResponse row d-flex justify-content-center">
                {books &&
                    books.map((book, index) => (


                        <div key={index} className="card displayCard m-30 xs-m-0 col-xs-12 col-3" >
                            <img className="card-img-top cardImage" src={book.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center cardTitle">{book.volumeInfo.title}</h5>
                                <textarea readOnly={true} className="card-text">{book.volumeInfo.description}</textarea>
                                <div className="d-flex justify-content-center">
                                    <a href={book.volumeInfo.infoLink} target="_blank" className="btn btn-link">More info!</a>
                                    <button className="btn btn-success"> Save!</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default Search;