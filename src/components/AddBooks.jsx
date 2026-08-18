import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

const AddBooks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector(state => state.books);
    
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        rating: 4.5,
        pages: 0,
        coverImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'rating' || name === 'pages' ? parseFloat(value) : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.title || !formData.author || !formData.category) {
            alert('Please fill in all required fields');
            return;
        }

        const newBook = {
            id: books.length + 1,
            ...formData
        };

        dispatch({
            type: 'ADD_BOOK',
            payload: newBook
        });

        alert('Book added successfully!');
        setFormData({
            title: '',
            author: '',
            category: '',
            rating: 4.5,
            pages: 0,
            coverImage: ''
        });
        navigate('/');
    };

    return (
        <div className='max-w-4xl mx-auto px-4 py-10'>
            <div className='flex items-center gap-2 mb-8'>
                <Plus size={32} className='text-blue-600' />
                <h1 className='text-3xl font-bold'>Add New Book</h1>
            </div>

            <form onSubmit={handleSubmit} className='bg-white rounded-lg shadow-lg p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Title */}
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Book Title <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                            placeholder='Enter book title'
                            required
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Author <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            name='author'
                            value={formData.author}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                            placeholder='Enter author name'
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Category <span className='text-red-600'>*</span>
                        </label>
                        <select
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                            required
                        >
                            <option value=''>Select Category</option>
                            <option value='Fiction'>Fiction</option>
                            <option value='Non-Fiction'>Non-Fiction</option>
                            <option value='Mystery'>Mystery</option>
                            <option value='Romance'>Romance</option>
                            <option value='Science Fiction'>Science Fiction</option>
                            <option value='Fantasy'>Fantasy</option>
                            <option value='Biography'>Biography</option>
                            <option value='History'>History</option>
                            <option value='Self-Help'>Self-Help</option>
                            <option value='Classic'>Classic</option>
                            <option value='Dystopian'>Dystopian</option>
                        </select>
                    </div>

                    {/* Rating */}
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Rating (0-5)
                        </label>
                        <input
                            type='number'
                            name='rating'
                            value={formData.rating}
                            onChange={handleChange}
                            min='0'
                            max='5'
                            step='0.1'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                            placeholder='4.5'
                        />
                    </div>

                    {/* Pages */}
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Number of Pages
                        </label>
                        <input
                            type='number'
                            name='pages'
                            value={formData.pages}
                            onChange={handleChange}
                            min='0'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                            placeholder='300'
                        />
                    </div>

                    {/* Cover Image URL */}
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Cover Image URL
                        </label>
                        <input
                            type='url'
                            name='coverImage'
                            value={formData.coverImage}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                            placeholder='https://...'
                        />
                    </div>
                </div>

                {/* Preview */}
                {formData.coverImage && (
                    <div className='mt-6'>
                        <p className='text-gray-700 font-semibold mb-2'>Cover Preview:</p>
                        <img
                            src={formData.coverImage}
                            alt='Book Cover'
                            className='w-32 h-48 object-cover rounded-lg'
                        />
                    </div>
                )}

                {/* Buttons */}
                <div className='flex gap-4 mt-8'>
                    <button
                        type='submit'
                        className='flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
                    >
                        Add Book
                    </button>
                    <button
                        type='button'
                        onClick={() => navigate('/')}
                        className='flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition'
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;
