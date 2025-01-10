import { Card } from "./Card.tsx";

export const Character = ({ character }) => {

    const { name, status, species, type, gender, origin, location, image } = character;

    return (
        <Card className="w-80 m-4">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-sm text-gray-600"><span className="font-semibold">Status:</span> {status}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Species:</span> {species}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Type:</span> {type}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Gender:</span> {gender}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Origin:</span> {origin.name}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Location:</span> {location.name}</p>
            </div>
        </Card>
    );
};