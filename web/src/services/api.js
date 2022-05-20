const URL_SERVER = 'https://awesome-profile-cards.herokuapp.com/card';
const URL_LOCAL = 'https://card-team-9.herokuapp.com/card';

const dataApi = (data) => {
  return fetch(URL_LOCAL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default dataApi;
