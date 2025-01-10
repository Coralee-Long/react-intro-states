export const Filter = ({genderFilter, setGenderFilter, statusFilter, setStatusFilter}) => {
    return (
        <div className="flex gap-4 mt-4">
            <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
                <option value="">All Statuses</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>

        </div>
    )
}