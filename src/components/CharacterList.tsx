import { Character } from "./Character.tsx"

export const CharacterList = ({ data, loadMore, hasMore }) => {
    return (
        <div className="flex flex-col items-center w-full mx-auto">
            <div className="flex flex-wrap gap-6 px-8 max-w-screen-lg justify-start">
                {data.map((character) => (
                    <Character key={character.id} character={character} />
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <button
                    onClick={loadMore}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Load More
                </button>
            )}
        </div>
    );
};
