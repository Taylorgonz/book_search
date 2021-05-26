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
            <div className="row">
                <div className="displayCard col-12">
                    {books &&
                        books.map((book, index) => (
                            <div>
                                <h3> {book.volumeInfo.title}</h3>
                                <img key={index} src={book.volumeInfo.imageLinks.smallThumbnail} style={{height: "50px;"}} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Search;