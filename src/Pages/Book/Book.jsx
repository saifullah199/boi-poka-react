import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router";

const Book = ({book}) => {

    const {bookName,image, rating, category,tags, yearOfPublishing
,publisher,bookId
} =book
    console.log(book)
    return (
       <Link to={`/bookDetails/${bookId}`}>
         <div>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                    <img
                    className='h-[166px]'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-10">
                        {
                            tags.map((tag, index) => <button key={index}>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p> Book By : {publisher}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <IoStarHalf /></div>
                    </div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;