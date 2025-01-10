import { Character } from "./Character.tsx"

export const CharacterList = ({ data }) => {
    return (


            <div className="flex flex-wrap justify-center items-stretch gap-3 p-2">
                {data.map((character) => (
                    <Character key={character.id} character={character} />
                ))}
            </div>

    );
};


