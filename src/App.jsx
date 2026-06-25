import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import MovieDetail from "./components/MovieDetail";

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie" element={<MovieDetail />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
