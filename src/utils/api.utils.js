export const apiCall = () => Promise.resolve();

export const signUp = ({login, password}) => Promise.resolve({
  access: 'eyJpc3MiOiJnb2l0IGFjYWRlbXkiLCJpYXQiOjE2MDU4OTY1MTAsImV4cCI6MTYzNzQzMjUxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0',
  refresh: 'eyJpc3MiOiJnb2l0IGFjYWRlbXkiLCJpYXQiOjE2MDU4OTY1MTAsImV4cCI6MTYzNzQzMjUxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0'
});

export const login = ({login, password}) => Promise.resolve({
  access: 'eyJpc3MiOiJnb2l0IGFjYWRlbXkiLCJpYXQiOjE2MDU4OTY1MTAsImV4cCI6MTYzNzQzMjUxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0',
  refresh: 'eyJpc3MiOiJnb2l0IGFjYWRlbXkiLCJpYXQiOjE2MDU4OTY1MTAsImV4cCI6MTYzNzQzMjUxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0'
});

export const fetchUserData = request => Promise.resolve({
    name: 'John',
    surname: 'Doe',
    position: 'administrator',
    email: 'johndoe@mail.com'
  });
