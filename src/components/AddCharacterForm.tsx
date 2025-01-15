import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const AddCharacterForm = ({addCharacter, styledButton}) => {
const [name, setName] = useState("");
const [status, setStatus] = useState("Alive");
const [species, setSpecies] = useState("");
const [type, setType] = useState("");
const [gender, setGender] = useState("Male");
const [origin, setOrigin] = useState("");
const [image, setImage] = useState("");
const [location, setLocation] = useState("");

    const navigate = useNavigate();  // 🔄 For redirecting after submit
    const inputStyle = "px-4 py-2 bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCharacter = {
        id: Date.now(),  // Unique ID (example: 1576996323453)
        name,
        status,
        species,
        type,
        gender,
        origin: { name: origin },
        location: { name: location },
        image: image || "https://via.placeholder.com/150"  // Default image if none provided
    };

    addCharacter(newCharacter);

    // Reset Form
    setName("");
    setStatus("Alive");
    setSpecies("");
    setType("");
    setGender("Male");
    setOrigin("");
    setLocation("");
    setImage("");

    // 🔄 Redirect to Characters Page
    navigate("/characters");
}

    return (
        <form onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white shadow-md rounded-md w-full"><input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
            required
        />

            {/* Status Dropdown */}
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-black bg-gray-100"
                required
            >
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Unknown">Unknown</option>
            </select>

            <input
                type="text"
                placeholder="Species"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                className={inputStyle}
                required
            />

            <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={inputStyle}
                required
            />

            {/* Gender Dropdown */}
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-black bg-gray-100"
                required
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
            </select>

            <input
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className={inputStyle}
                required
            />

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={inputStyle}
                required
            />

            <input
                type="text"
                placeholder="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className={inputStyle}
            />

            <button
                type="submit"
                className={styledButton}
            >
                Add Character
            </button>
        </form>
    )
}