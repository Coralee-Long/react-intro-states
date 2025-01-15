import { AddCharacterForm } from "../components/AddCharacterForm";
import { Link } from "react-router-dom";

export const AddCharacterPage = ({ addCharacter, styledButton }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900">
            <h1 className="text-3xl font-bold text-white mb-6">Add a New Character</h1>

            {/* Add Character Form */}
            <AddCharacterForm addCharacter={addCharacter} styledButton={styledButton} />

            {/* Back to Characters Button */}
            <Link
                to="/characters"
                className={styledButton}
            >
                ← Back to Characters
            </Link>
        </div>
    );
};
