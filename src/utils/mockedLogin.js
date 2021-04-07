const mockedUser = {
  id: '1',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default function loginApi(username, password) {
  if (username === '123' && password === '123') {
    return mockedUser;
  }
  return null;
}
