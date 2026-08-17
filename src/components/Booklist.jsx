import BookCard from './BookCard';


const BookList = ({ Books }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6'>
            {
                
            }
            {Books.map((Book =>
                <BookCard key={Book.id} book={Book} />
            ))}
        </div>
    )
}

export default BookList