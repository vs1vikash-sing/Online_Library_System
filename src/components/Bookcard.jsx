import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            {/* Book Image */}
            <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-64 object-contain"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold line-clamp-1">
                    {book.title}
                </h3>

                <p className="text-gray-600">
                    by <span className="font-medium">{book.author}</span>
                </p>

                <span className="inline-block w-fit bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                    {book.category}
                </span>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-yellow-500 font-semibold flex gap-1 items-center">
                        <Star /> {book.rating}
                    </span>

                    <span className="text-gray-500 text-sm">
                        {book.pages} Pages
                    </span>
                </div>

                <Link
                    to={`/book-details/${book.id}`}
                    className="mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default BookCard;