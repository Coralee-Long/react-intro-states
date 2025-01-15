import { CharacterCard } from "./CharacterCard.tsx";

export const CharacterList = ({ characters, loadMore, hasMore, styledButton}) => {
    return (
        <div className="flex flex-col items-center">
            {/* Grid Layout for Character Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <button
                    onClick={loadMore}
                    className={styledButton}
                >
                    Load More
                </button>
            )}
        </div>
    );
};
