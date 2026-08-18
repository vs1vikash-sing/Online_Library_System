import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowLeft, Star } from 'lucide-react';

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const books = useSelector(state => state.books);
    
    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        return (
            <div className='max-w-7xl mx-auto px-4 py-10'>
                <button
                    onClick={() => navigate('/')}
                    className='flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6'
                >
                    <ArrowLeft size={20} /> Back to Books
                </button>
                <div className='text-center py-10'>
                    <h2 className='text-2xl font-bold text-gray-800'>Book not found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <button
                onClick={() => navigate('/')}
                className='flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium'
            >
                <ArrowLeft size={20} /> Back to Books
            </button>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Book Cover */}
                <div className='md:col-span-1'>
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className='w-full rounded-lg shadow-lg'
                    />
                </div>

                {/* Book Details */}
                <div className='md:col-span-2'>
                    <h1 className='text-4xl font-bold mb-2'>{book.title}</h1>
                    
                    <p className='text-xl text-gray-600 mb-4'>
                        by <span className='font-semibold'>{book.author}</span>
                    </p>

                    <div className='flex items-center gap-4 mb-6'>
                        <span className='inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium'>
                            {book.category}
                        </span>
                        <span className='flex items-center gap-2 text-yellow-500 text-lg font-semibold'>
                            <Star size={24} /> {book.rating} / 5
                        </span>
                    </div>

                    <div className='bg-gray-100 p-6 rounded-lg mb-6'>
                        <p className='text-gray-700 text-lg'>
                            <span className='font-semibold'>Pages:</span> {book.pages}
                        </p>
                        <p className='text-gray-700 text-lg mt-2'>
                            <span className='font-semibold'>Category:</span> {book.category}
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <button className='flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition'>
                            Add to Wishlist
                        </button>
                        <button className='flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition'>
                            Borrow Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
