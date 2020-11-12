const ACCESS_TOKEN = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NSIsIm5hbWUiOiJKb2huIEdvbGQiLCJhZG1pbiI6dHJ1ZX0K.
LIHjWCBORSWMEibq-tnT8ue_deUqZx1K0XxCOXZRrBI`;

const REFRESH_TOKEN = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NSIsIm6hbWUiOiJKb1huIEdvbGQiLCJhZG2pbiI3dHJ1ZX1K.
LIHjWCBORSWMEibq-tnT8ue_deUqZx1K0XxCOXZRrBI`

export const apiCall = () => Promise.resolve({
  refreshToken: REFRESH_TOKEN,
  accessToken: ACCESS_TOKEN
});

// const _apiCall = function(callback) {
//   //call Async action
//   var request = new XMLHttpRequest('GET', 'url');
//   request.onreadystatechange = function(response) {
//     if (response.status === 200) {
//       callback(response.data);
//     }
//   }
// }
