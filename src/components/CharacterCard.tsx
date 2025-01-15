import { Card } from "./Card";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {
    const { id, name, image } = character;

    return (
        <Link to={`/characters/${id}`} className="w-full">
            <Card className="w-64 transform transition shadow-md cursor-pointer hover:scale-105">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover rounded-t-md"
                />
                <div className="p-4">
                    <h2 className="text-center font-bold text-lg text-gray-800 truncate">{name}</h2>
                </div>
            </Card>
        </Link>
    );
};