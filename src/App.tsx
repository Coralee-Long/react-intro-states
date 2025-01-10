import  { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { RickAndMortyPage } from "./pages/RickAndMortyPage.tsx";
import './App.css';
import { Header } from "./components/Header.tsx";
import { CharacterPage} from "./pages/CharacterPage.tsx";


function App() {

    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/characters" element={<RickAndMortyPage />} />
                    <Route path="/characters/:id" element={<CharacterPage />} />
                </Routes>
        </>
    );
}

export default App;
