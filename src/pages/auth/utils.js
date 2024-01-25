const token_key = '@access_token';
export function saveToken(token) {
  localStorage.setItem(token_key, token);
}

export function getToken() {
  return localStorage.getItem(token_key);
}