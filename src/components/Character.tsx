import { Card } from "./Card.tsx";
import { Link, useLocation } from "react-router-dom";

export const Character = ({ character }) => {
    const { id, name, status, species, type, gender, origin, location, image } = character;
    const pageLocation = useLocation();

    // Check if the user is on the character detail page
    const isDetailPage = pageLocation.pathname === `/characters/${id}`;

    const characterCard = (
        <div className="flex flex-col items-center">
            <Card
                className={`w-full ${isDetailPage ? "sm:w-[500px]" : "sm:w-72" } 
                transform transition shadow-md ${!isDetailPage ? "cursor-pointer hover:scale-105" : "cursor-default"}`}
            >
                <img
                    src={image}
                    alt={name}
                    className={`w-full ${isDetailPage ? "max-h-64" : "h-[250px] min-w-[300px]"} object-cover rounded-t-md`}
                />
                <div className={`p-6 flex flex-col justify-start ${isDetailPage ? "min-h-68 px-4" : "min-h-44 min-w-48 px-8"}`}>
                    <h2 className={`text-center font-bold mb-4 text-gray-800" ${isDetailPage ? "text-3xl text-gray-800" : "text-lg text-gray-800" }`}>
                        {name}
                    </h2>
                    <div className={`space-y-2 text-gray-600 ${isDetailPage ? "text-lg text-sm min-h-68" : "text-sm min-h-52"}`}>
                        <p><span className="font-semibold">Status:</span> {status}</p>
                        <p><span className="font-semibold">Species:</span> {species}</p>
                        <p><span className="font-semibold">Type:</span> {type ? type : "-"}</p>
                        <p><span className="font-semibold">Gender:</span> {gender}</p>
                        <p><span className="font-semibold">Origin:</span> {origin.name}</p>
                        <p><span className="font-semibold">Location:</span> {location.name}</p>
                    </div>
                </div>
            </Card>

            {/* 🔙 Back Button (Visible Only on Detail Page) */}
            {isDetailPage && (
                <Link
                    to="/characters"
                    className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    ← Back to Characters
                </Link>
            )}
        </div>
    );

    // If not on detail page, wrap the card in a Link
    return isDetailPage ? characterCard : (
        <Link to={`/characters/${id}`} className="w-full sm:w-72">
            {characterCard}
        </Link>
    );
};
