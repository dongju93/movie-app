import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        // https://yts.tl/api/v2/list_movies.json?sort_by=rating
        // https://yts-proxy.now.sh/list_movies.json?sort_by=rating
        this.setState({ movies, isLoading: false });
    };
    // JavaScript 코드
    // async 를 통해 componentDidMount 가 실행 되기 전까지
    // 잠시 기다림을 알리는데(하나의 액션 ex. Loading..) 어떤 데이터를 기다리냐면
    // await 을 통해 표시한 url 의 데이터임을 표시해줌.
    // async 를 먼저 사용함을 알려줘야 await 사용가능.

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;

        return (
            <section className="container">
                {/* 3항 연산자 JavaScript 사용 */}
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading..</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
