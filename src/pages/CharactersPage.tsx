import { useState } from "react";
import { CharacterList } from "../components/CharacterList";
import { Search } from "../components/Search";
import {Link} from "react-router-dom";

export const CharactersPage = ({characters, styledButton}) => {
    const [search, setSearch] = useState("");
    const [visibleData, setVisibleData] = useState(characters.slice(0, 8));
    const [itemsToShow, setItemsToShow] = useState(8);

    // 🔎 Filter data based on search input
    const filteredData = characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
    );

    // 📊 Handle loading more items
    const loadMore = () => {
        const nextItems = itemsToShow + 8;
        setVisibleData(filteredData.slice(0, nextItems));
        setItemsToShow(nextItems);
    };

    const hasMore = itemsToShow < filteredData?.length;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Characters</h1>

            {/* 🔍 Search Component */}
            <Search search={search} setSearch={setSearch} />

            {/* ➕ Add Character Button */}
            <div className="flex justify-center mb-6">
                <Link
                    to="/characters/add"
                    className={styledButton}
                >
                    +  Add New Character
                </Link>
            </div>

            {/* 📋 Character List */}
            <CharacterList characters={filteredData.slice(0, itemsToShow)} loadMore={loadMore} hasMore={hasMore} styledButton={styledButton} />
        </div>
    );
}
