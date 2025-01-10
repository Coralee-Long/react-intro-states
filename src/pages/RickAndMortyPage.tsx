import { CharacterList } from "../components/CharacterList.tsx";
import { Search } from "../components/Search.tsx";
import { Filter } from "../components/Filter.tsx";
import { data as response } from "../data/data.ts";
import { useState, useEffect } from "react";

export const RickAndMortyPage = () => {
    const [data, setData] = useState(response);
    const [search, setSearch] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [visibleCount, setVisibleCount] = useState(5);

    // Filter by name, gender, and status
    const filteredData = data.filter((character) => {
        const matchesName = character.name.toLowerCase().includes(search.toLowerCase());
        const matchesGender = genderFilter ? character.gender === genderFilter : true;
        const matchesStatus = statusFilter ? character.status === statusFilter : true;
        return matchesName && matchesGender && matchesStatus;
    });

    // Show only a subset of the filtered data
    const visibleData = filteredData.slice(0, visibleCount);

    // Load 5 more characters on button click
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);
    };

    // 🔥 Reset pagination when filters/search change
    useEffect(() => {
        setVisibleCount(5);
    }, [search, genderFilter, statusFilter]);

    return (
        <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
                Rick & Morty Characters
            </h1>

            {/* Search Input */}
            <Search search={search} setSearch={setSearch} />

            {/* Filter Options */}
            <Filter
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
            />

            {/* Character List or Error */}
            <div className="mt-8 w-full flex justify-center">
                {filteredData.length === 0 ? (
                    <p className="text-center text-red-500">No characters found.</p>
                ) : (
                    <CharacterList
                        data={visibleData}
                        loadMore={loadMore}
                        hasMore={visibleCount < filteredData.length}
                    />
                )}
            </div>
        </div>
    );
};
