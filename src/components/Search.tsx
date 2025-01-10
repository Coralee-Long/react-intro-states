
export const Search = ({ search, setSearch }) => {
    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};
