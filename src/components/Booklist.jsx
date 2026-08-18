import { useSelector } from 'react-redux';
import BookCard from './BookCard';


const BookList = () => {
    const books = useSelector(state => state.books);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6'>
            {books && books.length > 0 ? (
                books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))
            ) : (
                <div className='col-span-full text-center py-10'>
                    <p className='text-gray-500 text-lg'>No books available</p>
                </div>
            )}
        </div>
    )
}

export default BookList