import MovieTab from "../components/MovieTab";
import { useSelector } from "react-redux";

function PagesNowPlaying() {
    const movies = useSelector(state => state.movies.nowPlaying)

    const twelvemovies = movies.slice(0, 12);

    return (
        <div>
            <h1>Now Playing</h1>
            <div>
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movie={movie}></MovieTab>
                ))}
            </div>
        </div>
    );
}

export default PagesNowPlaying;
