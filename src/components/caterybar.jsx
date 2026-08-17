import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CategoryBar = () => {
    const books = useSelector((state) => state.books.books);

    const categories = [
        "All",
        ...new Set(books.map((book) => book.category)),
    ];

    return (
        <div className="max-w-5xl mx-auto overflow-x-auto py-4">
            <nav className="flex gap-4 px-4 w-max mx-auto">
                {categories.map((category) => (
                    <NavLink
                        key={category}
                        to={category === "All" ? "/books" : `/books/${category}`}
                        end={category === "All"}
                        className={({ isActive }) =>
                            `px-6 py-3 rounded-xl whitespace-nowrap transition ${isActive
                                ? "bg-blue-600 text-white"
                                : "bg-black text-white hover:bg-gray-800"
                            }`
                        }
                    >
                        {category}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default CategoryBar;