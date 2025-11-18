import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)
    console.log(singleBook)
    const {bookName,image} =singleBook

    const handleMarkAsRead = id => {

        addToStoredDB(id)

    }
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h4>{bookName}</h4>
            <button 
            onClick={() => handleMarkAsRead(id)} 
            className='btn btn-accent m-2'>Mark as Read</button>
            <button className='btn btn-info m-2'> Add to WishList</button>
        </div>
    );
};

export default BookDetails;