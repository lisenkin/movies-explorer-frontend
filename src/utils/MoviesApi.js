class MoviesApi {
    constructor({ baseUrl, headers }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
    }
  
    getMovies() {
      return fetch(this._baseUrl, { method: 'GET', headers: this._headers }).then(
        (res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
        }
      );
    }
  }
  
  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default moviesApi;