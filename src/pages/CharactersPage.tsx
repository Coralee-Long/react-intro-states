import { useState } from "react";
import { data } from "../data/data";
import { CharacterList } from "../components/CharacterList";
import { Search } from "../components/Search";

export const CharactersPage = () => {
    const [search, setSearch] = useState("");
    const [visibleData, setVisibleData] = useState(data.slice(0, 8));
    const [itemsToShow, setItemsToShow] = useState(8);

    // 🔎 Filter data based on search input
    const filteredData = data.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
    );

    // 📊 Handle loading more items
    const loadMore = () => {
        const nextItems = itemsToShow + 8;
        setVisibleData(filteredData.slice(0, nextItems));
        setItemsToShow(nextItems);
    };

    const hasMore = itemsToShow < filteredData.length;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Characters</h1>

            {/* 🔍 Search Component */}
            <Search search={search} setSearch={setSearch} />

            {/* 📋 Character List */}
            <CharacterList data={filteredData.slice(0, itemsToShow)} loadMore={loadMore} hasMore={hasMore} />
        </div>
    );
};
