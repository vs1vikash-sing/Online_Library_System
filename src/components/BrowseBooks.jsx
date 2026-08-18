import { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import { Search } from 'lucide-react';

const BrowseBooks = () => {
    const books = useSelector(state => state.books);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(books.map(book => book.category))];

    // Filter books
    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <h1 className='text-3xl font-bold mb-8'>Browse Books</h1>

            {/* Search and Filter */}
            <div className='mb-8 space-y-4'>
                {/* Search Bar */}
                <div className='flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2'>
                    <Search size={20} className='text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search by title or author...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='flex-1 outline-none'
                    />
                </div>

                {/* Category Filter */}
                <div className='flex gap-2 flex-wrap'>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full font-medium transition ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Books Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {filteredBooks && filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (
                    <div className='col-span-full text-center py-10'>
                        <p className='text-gray-500 text-lg'>No books found matching your criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseBooks;
