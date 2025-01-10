import { Card } from "./Card.tsx";
import { Link } from "react-router-dom";

export const Character = ({ character }) => {
    const { id, name, status, species, type, gender, origin, location, image } = character;

    return (
        <Link to={`/characters/${id}`} className="w-full sm:w-72">
            <Card className="w-full sm:w-72 h-[420px] hover:scale-105 transform transition cursor-pointer shadow-md">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded-t-md"
                />
                <div className="p-4 flex flex-col justify-between h-[260px]">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">{name}</h2>
                    <div className="space-y-1 text-sm text-gray-600">
                        <p><span className="font-semibold">Status:</span> {status}</p>
                        <p><span className="font-semibold">Species:</span> {species}</p>
                        <p><span className="font-semibold">Type:</span> {type ? type : "-"}</p> {/* Updated line */}
                        <p><span className="font-semibold">Gender:</span> {gender}</p>
                        <p><span className="font-semibold">Origin:</span> {origin.name}</p>
                        <p><span className="font-semibold">Location:</span> {location.name}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
};
