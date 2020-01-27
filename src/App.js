import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    isLoading: true
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  };
  // JavaScript 코드
  // async 를 통해 componentDidMount 가 실행 되기 전까지
  // 잠시 기다림을 알리는데(하나의 액션 ex. Loading..) 어떤 데이터를 기다리냐면
  // await 을 통해 표시한 url 의 데이터임을 표시해줌.
  // async 를 먼저 사용함을 알려줘야 await 사용가능.

  componentDidMount() {
    this.getMovies()
  };

  render() {
    const { isLoading } = this.state;

    return <div>
      {/* 3항 연산자 JavaScript 사용 */}
      {this.state.isLoading ? "Loading.." : "We are ready" }
    </div>
  };

}

export default App;