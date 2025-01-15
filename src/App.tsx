import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CharactersPage } from "./pages/CharactersPage";
import { Header } from "./components/Header";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { AddCharacterPage } from "./pages/AddCharacterPage";
import { data as initialData } from "./data/data";
import { Character, Comment } from "./types";  // ✅ Import types

function App() {

    const styledButton = "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-12 hover:text-white"
    const [characters, setCharacters] = useState<Character[]>(
        initialData.map((character) => ({
            ...character,
            comments: [] as Comment[]  // ✅ Explicitly define comments as Comment[]
        }))
    );

    // 📦 Add new character
    const addCharacter = (newCharacter: Character) => {
        setCharacters((prevCharacters) => [
            ...prevCharacters,
            { ...newCharacter, comments: [] }
        ]);
    };

    // 📝 Add comment with correct typing
    const addComment = (id: number, comment: Comment) => {
        setCharacters((prevCharacters) =>
            prevCharacters.map((character) =>
                character.id === id
                    ? { ...character, comments: [...character.comments, comment] }
                    : character
            )
        );
    };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharactersPage characters={characters} styledButton={styledButton} />} />
                <Route path="/characters/:id" element={<CharacterDetailPage characters={characters} addComment={addComment} styledButton={styledButton} />} />
                <Route path="/characters/add" element={<AddCharacterPage addCharacter={addCharacter} styledButton={styledButton} />}  />
            </Routes>
        </>
    )
}

export default App;
