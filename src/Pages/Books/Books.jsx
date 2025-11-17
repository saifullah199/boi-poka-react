import React, { Suspense, use, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks]= useState([])

    // useEffect(() =>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())
    

    return (
        <div>
            <h3>Books</h3>
            <Suspense fallback={<h2> ...Books are loading</h2>}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                      {
                    data.map((book) => <Book 
                                    key={book.bookId} 
                                    book={book}></Book>)
                }
              </div>
            </Suspense>

        </div>
    );
};

export default Books;