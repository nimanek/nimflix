import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import MovieDetail from "./components/MovieDetail";
import Filter from "./components/Filter";

function App() {
    return (
        <>
                <Navbar />
            <main>
                <Routes>
                    {/* <Route element={<Filter />} /> */}
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/:imdbID" element={<MovieDetail />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
