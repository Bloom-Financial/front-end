export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const newAccessToken = (accessToken) => ({
  type: ACCESS_TOKEN,
  payload: accessToken,
});
