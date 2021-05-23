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

    console.log(search)
    console.log(books)



    return (
        <div className="d-flex justify-content-center container">
            <div class="row">
                <div class="searchInput col-12">
                    <label className="search"> Search</label>
                    <input className="searchBar" type="text" value={search} onChange={(event) => {
                        setSearch(event.target.value)
                        getBooks()
                    }} />
                </div>
            </div>
            <div className="d-flex row">
                <div className="col-12">
                    { books.length !== 0 ?
                        books.map((book, index) => (
                            <h3> {book.volumeInfo.title}</h3>
                        ))
                        : <div/>
                    }

                </div>

            </div>


        </div>
    )
}

export default Search;