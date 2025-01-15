import  { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { CharactersPage } from "./pages/CharactersPage.tsx";
import './App.css';
import { Header } from "./components/Header.tsx";
import { CharacterDetailPage} from "./pages/CharacterDetailPage.tsx";


function App() {

    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/characters" element={<CharactersPage />} />
                    <Route path="/characters/:id" element={<CharacterDetailPage />} />
                </Routes>
        </>
    );
}

export default App;
