const SearchBar = ({ searchText, setSearchText }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <form className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                    placeholder="Search by title or author..."
                    className="flex-1 rounded-xl border border-gray-400 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
            </form>
        </div>
    );
};

export default SearchBar;