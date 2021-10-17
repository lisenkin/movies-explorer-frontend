class MainApi {
    constructor({ baseUrl, headers, credentials }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
      this._credentials = credentials;
    }
  
    getUserData() {
      return this._sendRequest('/users/me', 'GET', null);
    }
  
    signUpUser(userData) {
      return this._sendRequest('/signup', 'POST', userData);
    }
  
    signInUser(userData) {
      return this._sendRequest('/signin', 'POST', userData);
    }
  
    signOutUser() {
      return this._sendRequest('/signout', 'GET', null);
    }
  
    getSavedMovies() {
      return this._sendRequest('/movies', 'GET', null);
    }
  
    saveMovie(movieData) {
      return this._sendRequest('/movies', 'POST', movieData);
    }
  
    updateUserData(newUserData) {
      return this._sendRequest('/users/me', 'PATCH', newUserData);
    }
  
    deleteMovie(movieId) {
      return this._sendRequest(`/movies/${movieId}`, 'DELETE');
    }
  
    _sendRequest(
      path,
      method,
      body,
      headers = this._headers,
      credentials = this._credentials
    ) {
      const options = {
        method,
        headers,
        credentials,
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      return fetch(`${this._baseUrl}${path}`, options).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
    }
  }
  
  const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',
    //baseUrl: 'https://movies.lisena.api.nomoredomains.club',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default mainApi;