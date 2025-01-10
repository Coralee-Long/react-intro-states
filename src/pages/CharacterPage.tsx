import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { Character } from "../components/Character";

export const CharacterPage = () => {
    const { id } = useParams();  // Get the character ID from the URL
    const character = data.find((char) => char.id === parseInt(id));  // Find the character by ID

    if (!character) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-red-500 text-xl">Character not found.</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            {/* Render the Character component */}
            <Character character={character} />
        </div>
    );
};
