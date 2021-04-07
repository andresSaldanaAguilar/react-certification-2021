const localStorage = {
  starredVideos: { 1: ['Av2i5yZdBv0', 'yVsjV1hQRzE'] },
  user: {
    id: '1',
    name: 'Wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  },
};

const storage = {
  get(key) {
    try {
      return localStorage[key];
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    localStorage[key] = value;
  },
};

export { storage };
