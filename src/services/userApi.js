import fetch from 'node-fetch';

const URL = 'http://localhost:7890/user/user';

export const getUser = (username) => {
  const data = { username };

  return fetch(`${URL}`,  {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
};

export const findByUsername = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json());
};
