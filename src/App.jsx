import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import MovieDetail from "./components/MovieDetail";
import Filter from "./components/Filter";
import Latest from "./pages/Latest";
import Popular from "./pages/Popular";

function App() {
    return (
        <>
                <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/:imdbID" element={<MovieDetail />} />
                    <Route path="/latest" element={<Latest />} />
                    <Route path="/popular" element={<Popular />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
