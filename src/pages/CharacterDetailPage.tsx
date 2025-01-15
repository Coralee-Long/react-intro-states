import { useParams, Link } from "react-router-dom";
import { CharacterDetail } from "../components/CharacterDetail";
import { CommentSection } from "../components/CommentSection";

export const CharacterDetailPage = ({ characters, addComment, styledButton }) => {
    const { id } = useParams();  // Get the character ID from the URL
    const character = characters.find((character) => character.id === parseInt(id));  // Find the character by ID

    if (!character) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-red-500 text-xl">Character not found.</p>
            </div>
        );
    }

    const { name, status, species, type, gender, origin, location, image, comments } = character;

    const details = [
        { label: "Status", value: status },
        { label: "Species", value: species },
        { label: "Type", value: type },
        { label: "Gender", value: gender },
        { label: "Origin", value: origin?.name },
        { label: "Location", value: location?.name }
    ];

    return (
        <div className="flex flex-col items-center py-8">
            <img
                src={image}
                alt={name}
                className="w-64 h-64 object-cover rounded-md"
            />
            <h2 className="text-3xl font-bold text-slate-50 mt-4">{name}</h2>
            <div className="mt-4 space-y-2 text-slate-300 text-lg">
                {details.map((detail, index) => (
                    <CharacterDetail key={index} label={detail.label} value={detail.value} />
                ))}
            </div>

            {/* Comment Section */}
            <CommentSection characterId={character.id} comments={comments} addComment={addComment} styledButton={styledButton} />

            <Link
                to="/characters"
                className={styledButton}
            >
                ← Back to Characters
            </Link>
        </div>
    );
};
